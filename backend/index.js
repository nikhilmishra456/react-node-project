const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const fs = require('fs');
const app = express();
require('dotenv').config(); 


const username = encodeURIComponent(process.env.MONGO_USER);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);
const cluster = process.env.MONGO_CLUSTER;
const dbName = process.env.MONGO_DBNAME;

const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`

async function loadData() {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db('articlesDB');
    const articlesCollection = db.collection('articles');

    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    await articlesCollection.insertMany(data);
    console.log('Data loaded successfully');
  } catch (err) {
    console.error('Error loading data:', err);
  } finally {
    await client.close();
  }
}

loadData();
app.use(cors()); // Enable CORS for all routes

// app.use(cors);
app.get('/articles', async (req, res) => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db('articlesDB');
    const articlesCollection = db.collection('articles');

    const articles = await articlesCollection.find().toArray();
    res.json(articles);
  } catch (err) {
    res.status(500).send('Error retrieving articles');
  } finally {
    await client.close();
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
