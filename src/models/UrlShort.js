const mongoose = require("mongoose");

const ShortUrlSchema = new mongoose.Schema({
    longUrl: String,
    shortUrl: String,
})

const UrlShort = mongoose.model("UrlShort", ShortUrlSchema, 'short_url')

module.exports = UrlShort