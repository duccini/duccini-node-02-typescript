import { Request, Response } from "express";
import CreateCourse from "./CreateCourse";

export function createCourse(req: Request, res: Response) {
    CreateCourse.execute({
        // duration: 10,
        name: 'Node 7', 
        educator: 'Dani Leão'
    })

    return res.send()
}