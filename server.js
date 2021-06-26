const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

//App config
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api", require("./Routes/claim_storeRoutes"));

//db config
const connection_url =
	"mongodb+srv://seedify:kvnHQMHJxyfZEQeM@cluster0.fv8c7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
	connection_url,
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) throw err;
		console.log("connected to mongodb");
	},
);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("frontend/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
	});
}

//listener
const port = process.env.PORT || 8002;
app.listen(port, () => {
	console.log(`listening port localhost : ${port}`);
});
