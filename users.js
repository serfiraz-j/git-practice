const users = ["Ayşe", "Mehmet"];

function listUsers() {
  return users;
}

function addUser(name) {
  users.push(name);
}

module.exports = { listUsers, addUser };   