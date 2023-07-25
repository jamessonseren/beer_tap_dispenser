import { Router, Request, Response } from "express"

const router = Router()

router.get('/test', (req: Request, res: Response) => {
    throw new Error("error to request")
    // return res.json({project: 'beer tap dispenser'})
})

export { router }