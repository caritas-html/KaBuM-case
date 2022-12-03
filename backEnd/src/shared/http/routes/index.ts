import costumerRouter from "@modules/costumers/routes/costumers.routes";
import { Router } from "express";

const routes = Router();

routes.use("/costumers", costumerRouter);

routes.get("/", (request, response) => {
  return response.json({
    message: "Server route is running!",
  });
});

export default routes;
