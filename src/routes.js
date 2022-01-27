import express from "express";
import crypto from "crypto";
import database from "./database.js";
import { generateToken } from "./utils.js";
import { sessionMiddleware } from "./middlewares.js";

function routes(app) {
  const router = express.Router();
  app.use("/api", router);

  router.get("/session", function (req, res) {
    const payload = { uid: crypto.randomUUID() };
    const sessionToken = generateToken(payload);

    res.cookie("session", sessionToken);
    res.send("Session initialized");
  });

  router.put("/data", sessionMiddleware, function (req, res) {
    const { uid } = res.locals;
    const body = req.body;

    const data = {
      ...database[uid],
      ...body,
    };

    database[uid] = data;
    res.send("Saved");
  });

  router.get("/data", sessionMiddleware, function (req, res) {
    const { uid } = res.locals;
    const data = database[uid];

    res.json({ uid, data });
  });
}

export default routes;
