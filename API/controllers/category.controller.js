const Category = require('../models/category.model');

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    next(error);  // Sending the error to the next middleware for centralized error handling
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: 'Category name is required!' });
    }
    const category = await Category.create({ name });
    res.status(201).json({ success: true, message: 'Category created successfully!', category });
  } catch (error) {
    next(error);  // Sending the error to the next middleware for centralized error handling
  }
};
