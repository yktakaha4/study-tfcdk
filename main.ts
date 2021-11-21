import { App } from "cdktf";
import { MyStack } from "./my-stack";

const app = new App();
new MyStack(app, "study-tfcdk");
app.synth();
