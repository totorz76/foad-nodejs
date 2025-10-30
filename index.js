const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const app = express();
const portServer = 8080;
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => console.log("Connecté à mongodb"))
  .catch((err) => console.error("Erreur de connexion à mongodb !", err));

app.use("/api/users", userRoutes);

app.listen(portServer, "0.0.0.0", () => {
  console.log(`Le serveur tourne sur le port ${portServer}`);
});
