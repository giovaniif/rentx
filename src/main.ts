import express from "express";
import { makePreviewController } from "./factories/preview";
import { httpControllerAdapter } from "./http-controller-adapter";

const app = express();
app.use(express.json());

app.post("/preview", httpControllerAdapter(makePreviewController()));

app.listen(9090, () => console.log("App Running"));
