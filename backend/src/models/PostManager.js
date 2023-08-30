const AbstractManager = require("./AbstractManager");

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "post" });
  }

  insert(post) {
    return this.database.query(
      `INSERT INTO ${this.table} (content, author, title) VALUES (?, ?, ?)`,
      [post.content, post.author, post.title]
    );
  }

  update(post) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ?, author = ?, title = ?`,
      [post.content, post.author, post.title, post.id]
    );
  }
}

module.exports = PostManager;
