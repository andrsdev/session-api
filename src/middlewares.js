import { isValidToken, decodeToken } from "./utils.js";

export function sessionMiddleware(req, res, next) {
  const token = req.cookies["session"];

  if (!isValidToken(token)) {
    res.status(401).send("Unauthorized");
    return;
  }

  const { uid } = decodeToken(token);
  res.locals.uid = uid;

  next();
}
