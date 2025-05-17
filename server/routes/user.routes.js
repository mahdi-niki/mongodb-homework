
const express = require("express");
const Router = express.Router();
const validateMember = require("../middleware/validateUser");
const { getMembers, addMember, deleteMember } = require("../controllers/user.controller");


Router.get("/",getMembers)
Router.post("/",validateMember,addMember)
Router.delete("/:id",deleteMember)

module.exports = Router;