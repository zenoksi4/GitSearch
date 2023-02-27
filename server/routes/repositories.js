const express = require("express");
const { getRepo } = require("../controllers/repositories");
const router = express.Router();


router.get('/', getRepo)


module.exports = router;