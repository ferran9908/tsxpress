import * as dotenv from "dotenv";

import express, { Application } from "express";
import { notFoundHandler } from "./middleware/not-found.middleware";
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();

if (!process.env.PORT) process.exit(1);

const port = parseInt(process.env.PORT as string);

const app: Application = express();

app.use(express.json());

// Your Routers go here

// Your routes go here
app.get("/", (_req, res) => {
  return res.send({ message: "Success" });
});

// After all routers
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port, () => console.log(`Server Up and running in port ${port}`));
