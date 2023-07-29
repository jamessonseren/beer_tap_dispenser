import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'

import swaggerUi from 'swagger-ui-express'

import swaggerDocument from '../swagger.json'

import { router } from './routes'

const app = express()

const port = 3333

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
app.use(router)
app.use(cors())

app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})

app.listen(port, () => console.log(`Server running on PORT ${port}`))