const express=require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
	origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json)

const PORT = process.env.PORT || 8080;

app.get("/", (req, res)=> {
	console.log("hello");
	res.json({user: "AAya Ayushi"})
})

app.listen(PORT, ()=> {
	console.log(`Server is running on port ${PORT}`)
})

//localhost:8080/

