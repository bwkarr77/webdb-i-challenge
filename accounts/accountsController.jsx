const controller = require("../data/dbConfig.js");
const {
  validAccount,
  error500,
  error400,
  success200
} = require("./accountsMiddle.jsx");
console.log("controllers");
//
//  KEEPING CONTROLLER METHODS GENERIC TO MAKE IT REUSABLE FOR ALL
//

// ================================
//            GET, ALL
// ================================
// @desc    GET all accounts
// @route   GET to /api/accounts
exports.getAll = (req, res, next) => {
  console.log("getAll");
  controller("accounts")
    .then(allReturns => {
      console.log("getAll", allReturns);
      res
        .status(200) //success
        .json(allReturns);
    })
    .catch(e => {
      res
        .status(500) //server error
        .json({ error: "error in getAllIndividual" });
    });
};
// ================================
//            GET, ID
// ================================
// @desc    GET account with :id
// @route   GET to /api/accounts/:id
exports.getIndividual = (req, res, next) => {
  console.log("getIndividual");
  controller("accounts")
    // .get()
    .where({ id: req.params.id })
    .first()
    .then(individual => {
      console.log("getIndividual", individual);
      if (individual) {
        res
          .status(200) //success
          .json(individual);
      } else {
        error400("Account not found");
      }
    })
    .catch(e => {
      res
        .status(500) //server error
        .json({ error: "error in getIndividual" });
    });
};

// ================================
//            POST
// ================================
// @desc    POST/CREATE new account
// @route   POST to /api/accounts
exports.createNew = (req, res, next) => {
  if (validAccount(req.body)) {
    console.log("addNew: ", req.body);
    controller("accounts")
      .insert(req.body, "id")
      .then(([id]) => id)
      .then(id => {
        controller("accounts")
          .where({ id })
          .first()
          .then(account => {
            res
              .status(201) //success
              .json(account);
          });
      })
      .catch(e => {
        res
          .status(500) //server error
          .json({ error: "error in addNew" });
      });
  } else {
    res
      .status(400) //error
      .json({ message: "Entered information is not valid" });
  }
};

// ================================
//            DELETE
// ================================
// @desc    DELETE account with :id
// @route   DELETE to /api/account/:id
exports.deleteIndividual = (req, res, next) => {
  console.log("deleteIndividual: ", req.body);
  controller("accounts")
    .where({ id: req.params.id })
    .del()
    .then(unit => {
      res
        .status(200) //success
        .json({ message: `Project ID of ${req.params.id} was deleted` });
    })
    .catch(e => {
      console.log("deleteIndividual err: ", e);
      res
        .status(500) //server error
        .json({ errorMessage: "Error in deleteIndividual" });
    });
};

// ================================
//            PUT
// ================================
// @desc    UPDATE account with :id
// @route   PUT to /api/account/:id
exports.updateIndividual = (req, res, next) => {
  console.log("updateIndividual: ", req.body);
  controller("accounts")
    .where({ id: req.params.id })
    .update(req.body)
    .then(unit => {
      if (unit) {
        res
          .status(200) //success
          .json({
            message: `Project ID of ${req.params.id} was updated.`,
            changes: req.body
          });
      } else {
        res
          .status(404)
          .json({ message: `Cannot locate ID of ${req.params.id} to update` });
      }
    })
    .catch(e => {
      console.log("updateIndividual err: ", e);
      res
        .status(500) //server error
        .json({ errorMessage: "Error in updateIndividual" });
    });
};
