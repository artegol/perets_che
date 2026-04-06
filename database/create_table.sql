CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    nickname VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE menu_items (
    menu_item_id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    available BOOLEAN DEFAULT TRUE,
    photo_path VARCHAR(500)
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    order_status ENUM('new','confirmed','ready','completed','cancelled') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    pickup_time TIMESTAMP,
    ready_at TIMESTAMP,
    total_cost DECIMAL(10, 2) NOT NULL CHECK (total_cost >= 0),
    payment_status VARCHAR(50) DEFAULT 'unpaid'
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    menu_item_id INTEGER NOT NULL,
    name_snapshot VARCHAR(200) NOT NULL,
    price_snapshot DECIMAL(10, 2) NOT NULL CHECK (price_snapshot >= 0),
    amount INTEGER NOT NULL CHECK (amount > 0)
);