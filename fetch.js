// fetch.js
const axios = require('axios');

// Base URL of your API
const BASE_URL = 'http://localhost:3000';

// -----------------------------
// ACTIVITY 1: Basic API Fetching
// -----------------------------

// Fetch all users
async function fetchAllUsers() {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        console.log('All Users:');
        console.log(response.data);
    } catch (err) {
        console.error('Error fetching users:', err.message);
    }
}

// Fetch all products
async function fetchAllProducts() {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        console.log('All Products:');
        console.log(response.data);
    } catch (err) {
        console.error('Error fetching products:', err.message);
    }
}

// -----------------------------
// ACTIVITY 2: Dynamic Resource Fetching
// -----------------------------

// Fetch user by ID
async function fetchUserById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/users/${id}`);
        console.log(`User with ID ${id}:`);
        console.log(response.data);
    } catch (err) {
        console.error(`Error fetching user with ID ${id}:`, err.message);
    }
}

// Fetch product by ID
async function fetchProductById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        console.log(`Product with ID ${id}:`);
        console.log(response.data);
    } catch (err) {
        console.error(`Error fetching product with ID ${id}:`, err.message);
    }
}

// -----------------------------
// Run the functions
// -----------------------------
async function run() {
    console.log('--- Activity 1 ---');
    await fetchAllUsers();
    await fetchAllProducts();

    console.log('\n--- Activity 2 ---');
    await fetchUserById(3);       // Example: fetch Rens
    await fetchProductById(2);    // Example: fetch Mouse
}

run();
