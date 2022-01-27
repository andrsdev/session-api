import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import routes from "./src/routes.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());

routes(app);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
