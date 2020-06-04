import { Response, Request } from "express";
import { SlackService } from "../services/slackService";


export class routeController {
    public static async listUsers(req:Request, res: Response) {
        let slackService: SlackService = SlackService.getInstance();
        let usersList = await slackService.getUsersList();
        res.json(usersList);
    }
}