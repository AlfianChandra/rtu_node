const savePreset = (req, res) => { 
      console.log(req.body)
      res.json({ status:200}) //Test
}

module.exports = { savePreset };