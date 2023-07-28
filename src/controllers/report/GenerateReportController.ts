import { Request, Response } from "express";
import { GenerateReportService } from "../../services/report/GenerateReportService";

class GenerateReportController{
    async handle(req: Request, res: Response){

        const generateReport = new GenerateReportService()

        await generateReport.execute()

        return res.json({message: 'Report generated successfully!'})
    }
}

export { GenerateReportController }