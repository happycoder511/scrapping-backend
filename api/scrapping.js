const express = require("express");
const router = express.Router();
const axios = require('axios');
router.post("/", async (req, res) => {
    console.log(req.body);
    return res.json({
        information: "success"
    })
})
module.exports = router;