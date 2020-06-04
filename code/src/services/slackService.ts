import { EnvService } from "./envService";
import {WebClient} from '@slack/web-api';
import { request } from "https";
import axios from 'axios';
import { resolve } from "path";

export class SlackService {
    private static classInstance: SlackService;
    protected dotEnvInstance: EnvService;
    protected slackWebService: WebClient;

    public static getInstance(): SlackService {
        if (!SlackService.classInstance) {
            SlackService.classInstance = new SlackService();
        }
        return SlackService.classInstance;
    }

    protected constructor() {
        this.dotEnvInstance = EnvService.getInstance();
        this.slackWebService = new WebClient(this.dotEnvInstance.get('SLACK_TOKEN'));
    }

    public async getUsersList() {
        this.slackWebService.users.list().then((data: any) => {
            let users: any[] = [];
            data.members.forEach((element: any) => {
                let user = {
                    id: element.id,
                    name: element.name,
                    real_name: element.real_name,
                    images: {
                        image_192: element.profile.image_192,
                        image_24: element.profile.image_24,
                        image_32: element.profile.image_32,
                        image_48: element.profile.image_48,
                        image_512: element.profile.image_512,
                        image_72: element.profile.image_72
                    }
                };
            users.push(user);
            });
            return users;          
        }).catch((data) => {
            return [];
        })
    }
}