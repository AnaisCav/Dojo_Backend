class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  findById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = AbstractManager;
