const router = require("express").Router();

const Posts = require("./posts-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get(`/post`, (req, res) => {
  Posts.getPost()
    .where({ public: 1 })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "There was an error." });
    });
});

router.post("/post/create", (req, res) => {
  let user = req.body;

  Posts.add(user)
    .then(info => {
      res.status(201).json({
        ...info
      });
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

router.delete("/post/delete/:id", (req, res) => {
  let id = req.params.id;

  Posts.remove(id)
    .then(users => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({
        error: "Sorry, this item cannot be removed."
      });
    });
});

router.get("/post/:username", (req, res) => {
  let username = req.params.username;

  Posts.getByUsername(username)
    .then(posts => {
      res.status(201).send(posts);
    })
    .catch(err => {
      res.status(401).json({ error: "User does not exist." });
    });
});

router.put("/post/update/:id", (req, res) => {
  const id = req.params.id;
  const actionbod = req.body;

  Posts.update(id, actionbod)
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
