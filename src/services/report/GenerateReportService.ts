import { parse } from "json2csv";
import fs from "fs";

import prismaClient from "../../../prisma";

class GenerateReportService {
  async execute() {

    const combinedData = await this.combineData()

    const csvData = parse(combinedData, { fields: ['dispenser_id', 'dispenser_name', 'revenue','revenue_avg_analysis', 'time_running_in_minutes', 'operations'] });

    const path = "./exports/report.csv";

    return fs.writeFileSync(path, csvData, { encoding: "utf8" });
  }
  
  private async combineData() {
    const dispensersData = await this.getDispensersData();
    const servicesData = await this.getServicesData();

    const totalRevenue = dispensersData.reduce((total, dispenser) => {
      return total + dispenser.total_amount
    }, 0)

    const revenue_avg = totalRevenue / dispensersData.length

    const combinedData = [];

    for (const dispenser of dispensersData) {
      const dispenser_id = dispenser.id;
      const dispenser_name = dispenser.name;
      const revenue = dispenser.total_amount;

      const servicesForDispenser = servicesData.filter(
        (service) => service.dispenser_id === dispenser_id
      );

      let revenueAvgAnalysis: string;
      if (revenue < revenue_avg) {
        revenueAvgAnalysis = 'below_average';
      } else if (revenue > revenue_avg) {
        revenueAvgAnalysis = 'above_average';
      } else {
        revenueAvgAnalysis = 'average';
      }


      const totalTimeRunning = servicesForDispenser.reduce(
        (totalTime, service) => {
          const start_time = new Date(service.start_time);
          const end_time = new Date(service.end_time);
          const serviceTime =
            (end_time.getTime() - start_time.getTime()) / (1000 * 60);
          return totalTime + serviceTime;
        },
        0
      );

      const totalOperations = servicesForDispenser.length;

      const combinedItem = {
        dispenser_id: dispenser_id,
        dispenser_name: dispenser_name,
        revenue: revenue.toFixed(2),
        revenue_avg_analysis: revenueAvgAnalysis,
        time_running_in_minutes: totalTimeRunning.toFixed(2),
        operations: totalOperations,
      };

      combinedData.push(combinedItem);
    }

    return combinedData
  }

 
  private async getDispensersData() {
    return await prismaClient.dispensers.findMany();
  }

  private async getServicesData() {
    return await prismaClient.serviceRegister.findMany();
  }
}

export { GenerateReportService };
