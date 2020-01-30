exports.validAccount = props => {
  const { name, budget } = props;
  //   console.log(props, name, budget);
  return name && typeof budget === "number" && budget >= 0;
};

//ALL code Below code isn't working...yet....
//
exports.error500 = (name, req, res) => {
  console.log("error500");
  res
    .status(500) //server error
    .json({ error: `error in 500` });
};

exports.error400 = message => {
  console.log("error400");
  res
    .status(400) //server error
    .json({ error: message });
};

exports.success200 = (data, req, res) => {
  console.log("success200", data);
  res
    .status(200) //success
    .json(data);
};
