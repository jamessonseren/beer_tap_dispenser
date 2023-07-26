import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    //get admin session token
    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end()
    }
    //Adjusting to receive only token
    const [, token] = authToken.split(" ")
    
    try{
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad
        //sub returns admin ID
        // console.log(sub)

        req.admin_id = sub
        return next()
    }catch{
        return res.status(401).end()
    }
}