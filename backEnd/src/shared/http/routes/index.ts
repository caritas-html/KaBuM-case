import addressRouter from "@modules/address/routes/address.routes";
import costumerRouter from "@modules/costumers/routes/costumers.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import userRouter from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes = Router();

routes.use("/costumers", costumerRouter);
routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/costumers/address", addressRouter);

routes.get("/", (request, response) => {
  return response.json({
    message: "Server route is running!",
  });
});

export default routes;
