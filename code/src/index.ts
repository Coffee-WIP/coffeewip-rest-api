import express, { Response } from "express";

import { routes } from './controllers/routes';

// Create a new express app instance
const app: express.Application = express();

Object.entries(routes).forEach(([route,controller]) => {
    app.get(route, (req, res) => {
        controller(req, res);
    });
});

app.listen(3000, function () {
    console.log("App is listening on port 3000!");
});