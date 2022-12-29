const router = require("express").Router();
const Category = require("../models/category");

// GET /categories
router.get("/", (req, res) => {
  Category.find()
    .then((categories) => {
      res.json(categories);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

// GET /categories/:id
router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then((category) => {
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({
          message: "Category not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

// POST /categories
router.post("/", (req, res) => {
  // Create a new category
  const category = new Category({
    name: req.body.name,
  });

  // Save the category to the database
  category
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

// PUT /categories/:id
router.put("/:id", (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((category) => {
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({
          message: "Category not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

// DELETE /categories/:id
router.delete("/:id", (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((category) => {
      if (category) {
        res.json({
          message: "Category deleted successfully",
        });
      } else {
        res.status(404).json({
          message: "Category not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
});

module.exports = router;
