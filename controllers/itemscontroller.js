import Item from '../models/items.js';

// Get all items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get item by ID
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) res.json(item);
    else res.status(404).json({ message: 'Item not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new item
export const createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update item
export const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (item) res.json(item);
    else res.status(404).json({ message: 'Item not found' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete item
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (item) res.json({ message: 'Item deleted' });
    else res.status(404).json({ message: 'Item not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
