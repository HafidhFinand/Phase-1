static deleteData(table, id) {
  db.serialize(function() {
    db.run(`DELETE FROM ${table} WHERE id = ${id}`);
  });
  db.close();
}

static updateData(table, col, data, id) {
  db.serialize(function() {
    db.run(`UPDATE ${table} SET ${col} = "${data}" WHERE id = ${id}`);
  });
  db.close();
}
