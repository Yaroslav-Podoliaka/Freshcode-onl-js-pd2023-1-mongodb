require("dotenv").config();
const express = require("express");
const cors = require("cors");
//==================================
const dbMongo = require("./models");
const { players } = require("./constants/players-info");
const router = require("./routers");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/', router)

const PORT = process.env.PORT || 5000;

const createPlayers = async () => {
  console.log("Collection has been created");
  const { Player } = dbMongo;
  await Player.insertMany(players);
};

// createPlayers();

const createRoles = async () => {
  const { Role } = dbMongo;
  const roles = [
    { role: "Admin", email: "admin@example.com" },
    { role: "Moderator" },
    { role: "User", email: "user@example.com"},
  ]
  await Role.create(roles);
};

// createRoles();

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
