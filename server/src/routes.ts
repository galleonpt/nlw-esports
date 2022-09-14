import { Router } from "express";

const routes: Router = Router();

routes.get("/", (_, response) => {
  response.send("asd");
});

export { routes };
