const savePreset = (req, res) => { 
      console.log(req.body)
      res.json(req.body)
}

module.exports = { savePreset };