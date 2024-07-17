const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('notesboxx');
    return db;

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return null;
  }
}

module.exports = main;