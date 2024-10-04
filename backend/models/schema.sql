-- Create User table
CREATE TABLE "User" (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT
);

-- Create Staff table
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

-- Create Admin table
CREATE TABLE Admin (
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(50)
);

-- Create Rooms table
CREATE TABLE Rooms (
    room_id SERIAL PRIMARY KEY,
    type VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL
);

-- Create Booking table
CREATE TABLE Booking (
    booking_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "User"(user_id),
    staff_id INT REFERENCES Staff(staff_id),
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL
);

-- Create Booking_Room junction table
CREATE TABLE Booking_Room (
    booking_room_id SERIAL PRIMARY KEY,
    booking_id INT REFERENCES Booking(booking_id),
    room_id INT REFERENCES Rooms(room_id)
);

-- Create Payment table
CREATE TABLE Payment (
    payment_id SERIAL PRIMARY KEY,
    booking_id INT REFERENCES Booking(booking_id),
    payment_method VARCHAR(50) NOT NULL,
    amount_paid DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) NOT NULL
);

-- Create Admin_Panel table
CREATE TABLE Admin_Panel (
    panel_id SERIAL PRIMARY KEY,
    admin_id INT REFERENCES Admin(admin_id),
    actions TEXT
);

-- Add foreign key constraints
ALTER TABLE Booking ADD CONSTRAINT fk_staff_id FOREIGN KEY (staff_id) REFERENCES Staff(staff_id);
ALTER TABLE Admin_Panel ADD CONSTRAINT fk_admin_id FOREIGN KEY (admin_id) REFERENCES Admin(admin_id);