const generateId = ((id = 0) => () => id += 1)();

class User {
  static #all = [];

  constructor(name) {
    this.name = name;
    this.id = generateId();

    User.#all.push(this);
  }

  static create(name) {
    return new User(name);
  }

  static list() {
    return User.#all;
  }

  static find(id) {
    return User.#all.find((user) => user.id === Number(id)) || null;
  }

  static update(id, name) {
    const user = this.find(id);
    if (!user) return null;
    user.name = name;
    return user;
  }

  static destroy(id) {
    const userIndex = User.#all.findIndex((user) => user.id === Number(id));
    if (userIndex === -1) return false;

    User.#all.splice(userIndex, 1);
    return true;
  }

}

module.exports = User;