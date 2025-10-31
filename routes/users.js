const express = require("express");
const router = express.Router();
// const User = require("../models/user",);
const {Note ,remplirBasedeDonnee} =require("../models/faker");

console.log("remplirBasedeDonnee => " + remplirBasedeDonnee );


router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvée !" });
    res.json(user);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/generer-users", async (req, res)=>{
  try {
    const {nombre}=req.body;
    await remplirBasedeDonnee(nombre);
    res.json({message : 'Users générés avec succès.'});
  } catch (err){
    res.status(500).json({error: err.message});
  }
})

module.exports = router;
