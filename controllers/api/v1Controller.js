const { MongoClient } = require('mongodb');
const atlasUri = "mongodb+srv://freerhyme:Qwe123qwe@cluster0.nebai.mongodb.net/folsaves?retryWrites=true&w=majority"
const client = new MongoClient(atlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

const savePreset = async (req, res, next) => { 
      const savedata = req.body
      //Generate unique id for identifier with character length of 18
      savedata.key = Math.random().toString(36).substr(2, 25);
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

const getPresets = async (req, res) => { 
      const ctx = req.body.context;
      try {
            await client.connect();
            const db = client.db("folsaves");
            const collection = db.collection("savedata");
            const presets = await collection.find({context:ctx}).toArray();
            res.status(200).send({ status:200, data: presets });
      } catch (error) { 
            res.status(500).send({ status:500, message: 'Error fetching presets' });
      }
}

const getPresetById = async (req, res) => { 
      const key = req.body.key;
      try {
            await client.connect();
            const db = client.db("folsaves");
            const collection = db.collection("savedata");
            const preset = await collection.findOne({ key });
            res.status(200).send({ status:200, data: preset });
      } catch (error) { //
            res.status(500).send({ status:500, message: 'Error fetching preset' });
      }
}

module.exports = { savePreset, getPresets, getPresetById };