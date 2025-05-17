
const user = require("../models/user.model");
const getMembers = async (req, res) => {
  try {
    const members = await user.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addMember = async (req, res) => {
  const { name, age,exp, type, qualification } = req.body;
  const member = new user({
    name,
    age,
    gender,
    exp,
    type,
    qualification,
  });
    try {
        const newMember = await member.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await user.findByIdAndDelete(id);
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



