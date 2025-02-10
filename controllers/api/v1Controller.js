const savePreset = (req, res) => { 
      console.log(req.body)
      res.json({ status:200})
}

module.exports = { savePreset };