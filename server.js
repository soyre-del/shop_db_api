// app.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Initialize express app
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'laurence',
  database: 'shop_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to MySQL database (shop_db)');
  }
});

// ---------------------------------------------------
// ACTIVITY 4: GET METHODS
// ---------------------------------------------------

// Get all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0] || { message: 'User not found' });
  });
});

// Get all products
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get product by ID
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM products WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0] || { message: 'Product not found' });
  });
});

// ---------------------------------------------------
// ACTIVITY 5: POST METHODS
// ---------------------------------------------------

app.post('/users', (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) return res.status(400).json({ error: 'Missing fields' });

  db.query('INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
    [name, email, age],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: '✅ User added successfully', id: result.insertId });
    });
});

app.post('/products', (req, res) => {
  const { name, price, stock } = req.body;
  if (!name || !price || !stock) return res.status(400).json({ error: 'Missing fields' });

  db.query('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)',
    [name, price, stock],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: '✅ Product added successfully', id: result.insertId });
    });
});

// ---------------------------------------------------
// ACTIVITY 6: PUT METHODS
// ---------------------------------------------------

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  db.query('UPDATE users SET name=?, email=?, age=? WHERE id=?',
    [name, email, age, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: '✅ User updated successfully' });
    });
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  db.query('UPDATE products SET name=?, price=?, stock=? WHERE id=?',
    [name, price, stock, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: '✅ Product updated successfully' });
    });
});

// ---------------------------------------------------
// ACTIVITY 7: DELETE METHODS
// ---------------------------------------------------

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: '🗑️ User deleted successfully' });
  });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM products WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: '🗑️ Product deleted successfully' });
  });
});

// ---------------------------------------------------
// SERVER START
// ---------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
