const mainCall = async (req, res) => {
  res.send("HIi bro ");
};

const getVal = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("pqr");
};
module.exports = { mainCall, getVal };
