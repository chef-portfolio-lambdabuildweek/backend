const router = require("express").Router();

const Posts = require("./posts-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get(`/`, (req, res) => {
  Posts.getPost()
    
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error." });
    });
});

router.post("/create", (req, res) => {
  let post = req.body;

  Posts.add(post)
    .then(info => {
      res.status(201).json({
        ...info
      });
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;

  Posts.remove(id)
    .then(post => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({
        error: "Sorry, this item cannot be removed."
      });
    });
});

router.get("/:username", (req, res) => {
  let username = req.params.username;

  Posts.getByUsername(username)
    .then(post => {
      res.status(201).send(post);
    })
    .catch(err => {
      res.status(401).json({ error: "User does not exist." });
    });
});

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const action = req.body;

  Posts.update(id, action)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json({
        error: "The information could not be modified"
      });
    });
});

module.exports = router;
