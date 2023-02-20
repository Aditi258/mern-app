const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://test:Password123@cluster-semi.13a6ts5.mongodb.net/Web-wizards?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(`no connection : ${err}`));
