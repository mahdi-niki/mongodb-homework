
const express = require("express");
const router = express.Router();
const validateMember = require("../middleware/validateUser");
const { getMembers, addMember, deleteMember } = require("../controllers/user.controller");


router.get("/",getMembers)
router.post("/",validateMember,addMember)
router.delete("/:id",deleteMember)

module.exports = router;