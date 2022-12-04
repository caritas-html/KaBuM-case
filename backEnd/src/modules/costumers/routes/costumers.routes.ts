import { Router } from "express";
import CostumerController from "../controllers/CostumerController";
import { celebrate, Joi, Segments } from "celebrate";

const costumerRouter = Router();
const costumerController = new CostumerController();

costumerRouter.get("/", costumerController.index);

// routes with celebrate validation
costumerRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birthday: Joi.date().required().iso(),
      cpf: Joi.string()
        .regex(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/)
        .required(),
      rg: Joi.string().required(),
      phone: Joi.string()
        .regex(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)
        .required(),
    },
  }),
  costumerController.create
);

costumerRouter.put(
  "/:id",
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
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  costumerController.delete
);

export default costumerRouter;
