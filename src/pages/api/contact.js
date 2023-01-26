import { MongoClient } from "mongodb";
const mongoDbUser = process.env.REACT_APP_MONGODB_USER;
const mongoDbPassword = process.env.REACT_APP_MONGODB_PASSWORD;
const dbName = "blog";

const connectDatabase = async () => {
  const url = `mongodb+srv://${mongoDbUser}:${mongoDbPassword}@cluster0.2hfpeoq.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  await client.connect();
  console.log("Connected successfully to the server");
  return client;
};

const insertDocument = async (client, collection, document) => {
  const db = client.db(dbName);
  const thisCollection = db.collection(collection);
  const insertDocumentResult = await thisCollection.insertOne(document);
  console.log("inserted document:", insertDocumentResult);
  return insertDocumentResult;
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const { email, name, message } = body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await connectDatabase();
    } catch (e) {
      res.status(500).json({ message: "Connecting to the database failed." });
      return;
    }

    try {
      const result = await insertDocument(client, "messages", newMessage);
      newMessage._id = result.insertedId;
      res.status(201).json({ message: "Comment added.", data: newMessage });
    } catch (e) {
      res.status(500).json({ message: "Inserting comment failed." });
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", data: newMessage });
  } else {
    res.status(404);
  }
};
export default handler;
