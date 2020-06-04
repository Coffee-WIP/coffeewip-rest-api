import { routeController } from "./routeControllers";

export const routes: { [key: string]: Function }  = {
    '/users': routeController.listUsers
};
