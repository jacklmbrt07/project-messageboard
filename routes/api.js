"use strict";

const mongodb = require("mongodb");
const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const postSchema = new mongoose.Schema({
    text: { type: String, required: true },
    created_on: Date,
    bumped_on: Date,
    reported: Boolean,
    delete_password: String,
    replies: [String],
  });

  app.route("/api/threads/:board");

  app.route("/api/replies/:board");
};
