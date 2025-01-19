const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, // Ensures the pool waits for available connections
    connectionLimit: 10,      // Maximum number of connections in the pool
    queueLimit: 0             // No limit on queued connection requests
});

// Test the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    } else {
        console.log('Database connected');
        connection.release(); // Release the connection back to the pool
    }
});

module.exports = pool;
