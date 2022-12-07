import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { verify, Secret } from "jsonwebtoken";
import authConfig from "@config/auth";

function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("Missing JWT Token");

  // split the bearer and token
  const [_, token] = authHeader.split(" ");

  // verify if the received token is from the application hashed secret
  try {
    verify(token, authConfig.jwt.secret as Secret);

    return next();
  } catch {
    throw new AppError("Invalid JWT Token");
  }
}

export default isAuthenticated;
