import { isValidToken, decodeToken } from "./utils.js";

export function authMiddleware(req, res, next) {
  const token = req.cookies["session"];

  if (!isValidToken(token)) {
    res.send("Unauthorized");
    return;
  }

  const { uid } = decodeToken(token);
  res.locals.uid = uid;

  next();
}
