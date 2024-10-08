
CREATE DATABASE  WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
USE DATABASE process.env.POSTGRES_DATABASE;

CREATE TABLE People (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT
);


CREATE TABLE Staff (
    staff_id SERIAL PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    position VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE,
    experience TEXT
);


CREATE TABLE Admin (
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(50)
);


CREATE TABLE Rooms (
    room_id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL
);


CREATE TABLE Booking (
    booking_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "User"(user_id),
    staff_id INT REFERENCES Staff(staff_id),
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL
);


CREATE TABLE Booking_Room (
    booking_room_id SERIAL PRIMARY KEY,
    booking_id INT REFERENCES Booking(booking_id),
    room_id INT REFERENCES Rooms(room_id)
);


CREATE TABLE Payment (
    payment_id SERIAL PRIMARY KEY,
    booking_id INT REFERENCES Booking(booking_id),
    payment_method VARCHAR(50) NOT NULL,
    amount_paid DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) NOT NULL
);


CREATE TABLE Admin_Panel (
    panel_id SERIAL PRIMARY KEY,
    admin_id INT REFERENCES Admin(admin_id),
    actions TEXT
);


ALTER TABLE Booking ADD CONSTRAINT fk_staff_id FOREIGN KEY (staff_id) REFERENCES Staff(staff_id);
ALTER TABLE Admin_Panel ADD CONSTRAINT fk_admin_id FOREIGN KEY (admin_id) REFERENCES Admin(admin_id);
ALTER TABLE "User" ADD COLUMN admin BOOLEAN DEFAULT false;
