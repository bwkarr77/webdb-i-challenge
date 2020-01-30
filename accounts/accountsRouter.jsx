const router = require("express").Router();

const db = require("../data/dbConfig.js");
const {
  getAll,
  createNew,
  getIndividual,
  deleteIndividual,
  updateIndividual
} = require("./accountsController.jsx");

router
  .route("/")
  .get(getAll)
  .post(createNew);

router
  .route("/:id")
  .get(getIndividual)
  .delete(deleteIndividual)
  .put(updateIndividual);

module.exports = router;
