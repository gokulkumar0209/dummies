import express from "express";

const app = express();

const port = 3000;

app.use(express.json());
const series = [];
const nextId = 1;
app.post("/add", (req, res) => {
	// const name=req.body.name
	// const lead=req.body.lead
	const { name, lead } = req.body;

	const sitcom = { id: nextId++, name, lead };
	series.push(sitcom);
	console.log(sitcom);
	res.status(201).send(sitcom);
});
app.get("/", (req, res) => {
	res.send("Hello from Hulk");
});
app.get("/bbt", (req, res) => {
	res.send("Bazinga!");
});
app.get("/friends", (req, res) => {
	res.send("Howudoing!");
});
app.listen(port, () => {
	console.log(`server is running at port: ${port}`);
});
