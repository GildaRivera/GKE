const sql = require("./connection");
const http = require("http");
// constructor
const User = function(user) {
    this.name = user.name
    this.role = user.role
    this.email=user.email
    this.password = user.password

};
User.create = (newUser, result) => {
  
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      return result(err, null);
    }
    return result(null, { id: res.insertId, ...newUser});
  });
};
User.findById = (id, result) => {
  sql.query(`SELECT * FROM user WHERE id = ${id}`, (err, res) => {
    if (err) {
      return result(err, null);
    }
    if (res.length) {
      return result(null, res[0]);
    }
    // not found User with the id
 
    result({ kind: "not_found" }, null);
  });
};
User.getAll = (result) => {
  let query = "SELECT * FROM user";
  sql.query(query, (err, res) => {
    if (err) {
     return result(null, err);
    }
   
   return  result(null, res);
  });
};
User.login = (email, result) => {
  sql.query("SELECT * FROM user WHERE email = ?",[email] , (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res)
  });
};
User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE user SET name = ?, role = ?, email = ?, password=? WHERE id = ?",
    [user.name, user.role, user.email, user.password, id],
    (err, res) => {
      if (err) {
        return result(null, err);
      }
      if (res.affectedRows == 0) {
        return result({ kind: "not_found" }, null);
      }
      return result(null, { id: id, ...user });
    }
  );
};
User.remove = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
    if (err) {
     return result(null, err);
    }
    if (res.affectedRows == 0) {
     return result({ kind: "not_found" }, null);

    }
    return result(null, res);
  });
};

module.exports = User;