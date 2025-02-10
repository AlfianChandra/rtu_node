const { MongoClient } = require('mongodb');
const atlasUri = "mongodb+srv://freerhyme:Qwe123qwe@cluster0.nebai.mongodb.net/folsaves?retryWrites=true&w=majority"
const client = new MongoClient(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

const savePreset = async (req, res) => { 
      const savedata = req.body
      //Generate unique id for identifier with character length of 18
      savedata.key = Math.random().toString(36).substr(2, 18);
      try {
            await client.connect();
            const db = client.db("folsaves");
            const collection = db.collection("savedata");
            await collection.insertOne(savedata);
            res.status(200).send({ status:200, message: 'Preset saved' });
      } catch (error) {
            res.status(500).send({ status:500, message: 'Error saving preset' });
      } finally { 
            await client.close();
      }
}

module.exports = { savePreset };