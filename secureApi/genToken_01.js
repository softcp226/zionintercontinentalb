const jwt = require("jsonwebtoken");
const privatekey = process.env.privateKey;

const genToken = (user_id) => {
  const token = jwt.sign({ user_id }, privatekey);
  return token;
};
// console.log(genToken("929haji98298hahjhj"))
module.exports = genToken;
