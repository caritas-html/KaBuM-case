import { Router } from "express";

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({
    message: "Server route is running!",
  });
});

export default routes;
