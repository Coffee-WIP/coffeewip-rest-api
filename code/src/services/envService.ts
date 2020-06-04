import * as dotEnv  from 'dotenv';

export class EnvService {
    private static classInstance: EnvService;

    public static getInstance(): EnvService {
        if(!EnvService.classInstance) {
            EnvService.classInstance = new EnvService();
        }
        return EnvService.classInstance;
    }

    protected constructor() {
        dotEnv.config({
            path: process.cwd() + "/code/src/.env"
        });
    }

    public get(propertyName: string): any {
        return process.env[propertyName];
    }
}
