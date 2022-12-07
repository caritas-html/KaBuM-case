import isAuthenticated from "@modules/users/middlewares/isAuthenticated";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import AddressController from "../controllers/AddressController";

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get("/", isAuthenticated, addressController.index);

addressRouter.post(
  "/",
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      costumer_id: Joi.string().uuid().required(),
      address: Joi.string().required(),
    },
  }),
  addressController.create
);

addressRouter.get(
  "/:id",
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  addressController.find
);

addressRouter.patch(
  "/",
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      costumer_id: Joi.string().uuid().required(),
      address: Joi.string().required(),
    },
  }),
  addressController.delete
);

export default addressRouter;
