import express from "express";
import mongoose from "mongoose";

const PORT = 4000;
const app = express();

mongoose.set("strictQuery", true);

await mongoose
  .connect(
    "mongodb+srv://akhil:8686Amma@cluster0.9ha2pr2.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongodb Connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(PORT, () => {
  console.log(`Express Server Running http://localhost:${PORT}`);
});
