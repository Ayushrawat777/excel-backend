const mongoose = require("mongoose");
try {
  mongoose.connect(process.env.MONGO_URL, {
  });
  console.log("Database is connected");
} catch (error) {
  console.log(error);
}
 
