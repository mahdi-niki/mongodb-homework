const validateMember = (req, res, next) => {
  const { name, age, gender } = req.body;

  if (!name || !age || !gender) {
    return res.status(400).json({ message: "name, age, and gender are required" });
  }

  next();
};

module.exports = validateMember;