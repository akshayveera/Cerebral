const pool = require('./db');

const getComponent2 = (req, res) => {

    const query = 'SELECT * FROM component2';
    sendDataFromDB(query, res);
    
}

const getComponent4 = (req, res) => {
    
    const query = 'SELECT * FROM component4';
    sendDataFromDB(query, res);
}

const getComponent6 = (req, res) => {
    
    const query = 'SELECT * FROM component6';
    sendDataFromDB(query, res);

}

const sendDataFromDB = (query, res) => {
    pool.query(query, (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).json({error : 'Internal Server Error'});
        } else {
            res.status(200).json(data);
        }
    })
}

module.exports = { getComponent2, getComponent4, getComponent6 };