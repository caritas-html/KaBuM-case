import { Router } from "express";
import CostumerController from "../controllers/CostumerController";

const costumerRouter = Router();
const costumerController = new CostumerController();

costumerRouter.get("/", costumerController.index);
costumerRouter.post("/", costumerController.create);
costumerRouter.put("/:id", costumerController.update);
costumerRouter.delete("/:id", costumerController.delete);

export default costumerRouter;
