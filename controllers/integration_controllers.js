const db = require('../db');

const getMesseges = (req, res) => {
    const query = `SELECT * FROM messeges WHERE stuID=? AND insID=?`;
    const data = [req.params.stuID, req.params.insID];
     db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}

const newMesseges = (req, res) => {
    const { stuID, insID, message, sender } = req.body;
    const query = 'INSERT INTO messeges (stuID, insID, message, sender,created_at) VALUES (?,?,?,?,?)';
    const data = [stuID, insID, message, sender, new Date];
    db.query(query, data, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
}

module.exports = {
    newMesseges,
    getMesseges,
};

