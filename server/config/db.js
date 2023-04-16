const mongoose = require("mongoose");
const mognURL =
  "mongodb+srv://Md_Furkan:furkan786@talentbox.g6liwmx.mongodb.net/TalentBox";
const ConnectDB = () => {
  mongoose
    .connect(mognURL, { useNewUrlParser: true })
    .then((res) => console.log(res.connection.db.databaseName))
    .catch((error) => console.log(error));
};
module.exports = ConnectDB;
