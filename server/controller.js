require('dotenv').config();
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


const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(`${process.env.AUTH_USERNAME}:${process.env.AUTH_PASSWORD}`));

const getComponent1 = async (req, res) => {
    const URL = "http://3.111.196.92:8020/api/v1/sample_assignment_api_1/";

    try {
      const response = await fetch(URL, {headers: headers});
      const data =  await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

}

const getComponent3 = async (req, res) => {
    const URL = "http://3.111.196.92:8020/api/v1/sample_assignment_api_3/";

    try {
      const response = await fetch(URL, {headers: headers});
      const data =  await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

}

const getComponent5 = async (req, res) => {
    const URL = "http://3.111.196.92:8020/api/v1/sample_assignment_api_5/";

    try {
      const response = await fetch(URL, {headers: headers});
      const data =  await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

}

const login = async (req, res) => {
    const URL = "http://3.111.196.92:8020/api/v1/login/";

    const bodyData = {
        "username": req.body.username,
        "email": "user@gmail.com",
        "password": req.body.password,
        "phone_number": "1234567890",
        "input_code": 0
    }

    const response = await fetch(URL, {
        method: 'POST', 
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData)
    })

    try {
        const data = await response.json();
    
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({err : "Internal Server Error"});
    }
}

module.exports = { getComponent2, getComponent4, getComponent6, getComponent1, getComponent3, getComponent5, login };