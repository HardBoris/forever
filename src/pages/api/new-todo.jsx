import { MongoClient } from "mongodb";
async function handler(req, resp) {
  if (req.method !== "POST") return;
  const { heading, description } = req.body;
  const done = "false";
  if (!heading || !description) return;

  const client = new MongoClient("mongodb://localhost:27017", {
    monitorCommands: true,
  });
  client.on("commandStarted", (started) => console.log(started));
  const db = client.db();
  const collection = db.collection("todos");
  const result = await collection.insertOne({ heading, description, done });
  client.close();
  resp.status(201).json({
    todo: result,
    message: "To do created",
  });
}
export default handler;
