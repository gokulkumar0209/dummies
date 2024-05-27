import express from "express";

const app = express();

const port = 3000;

app.use(express.json());
let series = [];
let nextId = 1;
app.post("/series", (req, res) => {
	// const name=req.body.name
	// const lead=req.body.lead
	const { name, lead } = req.body;

	const sitcom = { id: nextId++, name, lead };
	series.push(sitcom);
	console.log(sitcom);
	res.status(201).send(sitcom);
});
app.get("/series", (req, res) => {
	res.status(201).send(series);
});
app.get("/series/:id", (req, res) => {
	const watch = series.find((t) => t.id === parseInt(req.params.id));
	if (!watch) {
		res.status(404).send("Series not found");
	}

	res.status(201).send(watch);
});
app.put("/series/:id", (req, res) => {
	const watch = series.find((t) => t.id === parseInt(req.params.id));
	if (!watch) {
		res.status(404).send("Series Not Found");
	}
	watch.name = req.body.name;
	watch.lead = req.body.lead;
	res.status(201).send(watch);
});
app.delete("/series/:id", (req, res) => {
	const index = series.findIndex((t) => t.id === parseInt(req.params.id));
	if (index == -1) {
		res.status(404).send("Not Found");
	}
	series.splice(index, 1);
	res.status(200).send("Deleted");
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
