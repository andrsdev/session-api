import jwt from "jsonwebtoken";

export function isValidToken(token) {
  try {
    jwt.verify(token, process.env.JWT_SIGN_SECRET);
    return true;
  } catch {
    return false;
  }
}

export function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SIGN_SECRET, {
    expiresIn: "15m",
  });
}

export function decodeToken(token) {
  return jwt.decode(token);
}
