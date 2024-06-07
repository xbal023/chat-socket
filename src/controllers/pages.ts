import { Request, Response } from "express";

export default class Controller {
    static async login(req: Request, res: Response) {
        res.render('login')
    }

    static async register(req: Request, res: Response) {
        res.render('register')
    }

    static async dashboard(req: Request, res: Response) {
        res.render('dashboard')
    }
}