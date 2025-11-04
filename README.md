# shop_db_api
A Node.js + MySQL CRUD API for shop_db

## Author
**Laurence A. Ambo**  
Email: laurencesoyy@gmail.com  

## Class Info
Node.js Backend CRUD API  
- Required Functionalities:
  - POST – Create new data entries
  - PUT – Update existing records
  - DELETE – Remove data entries
- Class format:  
  - Afternoon classes: Individual activity  

---

## Database Setup

### 1. Database Name
`shop_db`

### 2. Tables

#### Users Table
```sql
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT NOT NULL
);
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);
INSERT INTO users (id, name, email, age) VALUES
(1, 'Alice', 'alice@email.com', 25),
(2, 'Rens', 'rens@gmail.com', 19),
(3, 'Karla', 'karla@email.com', 21),
(4, 'Diana', 'Diana@email.com', 19),
(5, 'Kathleen', 'Kath@email.com', 30);

INSERT INTO products (id, name, price, stock) VALUES
(1, 'Laptop', 55000.00, 10),
(2, 'Mouse', 350.00, 50),
(3, 'Phone', 10999.00, 100),
(4, 'Keyboard', 1200.00, 30),
(5, 'Headset', 2500.00, 25);


