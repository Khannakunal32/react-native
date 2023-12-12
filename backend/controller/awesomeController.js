const { JsonDB, Config } = require("node-json-db");
const { v4: uuidv4 } = require("uuid");
const db = new JsonDB(new Config("./database/localDb.json", true, false, "/"));

// Declare a variable to store the current id value
let currentId = 1;

const getHomeMessage = (req, res) => {
  res.json({ message: "Hellodd World" });
};

const getContentLocalDb = async (req, res) => {
  try {
    const posts = await db.getData("/");
    res.send(posts);
  } catch (error) {
    console.log("ni hora");
    res.status(500).send(error.message);
  }
};
const postContentLocalDb = async (req, res) => {
  try {
    const { title, author } = req.body;

    // Generate a UUID for the new data
    const id = uuidv4();
    // Use the currentId as the id for the new data
    await db.push(`/${id}`, req.body);
    await db.save();
    res.send({ title: title, author: author });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getHomeMessage, getContentLocalDb, postContentLocalDb };
