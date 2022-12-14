import { Router } from "express";
import CostumerController from "../controllers/CostumerController";
import { celebrate, Joi, Segments } from "celebrate";
import isAuthenticated from "@modules/users/middlewares/isAuthenticated";

const costumerRouter = Router();
const costumerController = new CostumerController();

costumerRouter.get("/", isAuthenticated, costumerController.index);

// routes with celebrate validation
costumerRouter.post(
  "/",
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birthday: Joi.date().required().iso(),
      cpf: Joi.string()
        .regex(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/)
        .required(),
      rg: Joi.string().required(),
      phone: Joi.string().length(11).required(),
    },
  }),
  costumerController.create
);

costumerRouter.put(
  "/:id",
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string(),
      birthday: Joi.date().iso(),
      cpf: Joi.string().regex(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/),
      rg: Joi.string(),
      phone: Joi.string().regex(
        /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
      ),
    },
  }),
  costumerController.update
);

costumerRouter.delete(
  "/:id",
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  costumerController.delete
);

export default costumerRouter;
