const connectionPool = require("../config/db.js");

const readCategory = (req, res) => {
  let queryText = `SELECT * FROM db_movies.tb_category`;

  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err);
      return err;
    }
    res.json(data);
  });
};

const readCategoryById = (req, res) => {
  let { id } = req.params;
  let queryText = `SELECT * FROM db_movies.tb_category WHERE id_tb_category = ${id}`;

  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.log(err);
      return err;
    }
    res.json(data);
  });
};

const createCategory = (req, res) => {
  let { nama, desc } = req.body;

  let queryText = `
    INSERT INTO tb_category(nama_tb_category, desc_tb_category)
    VALUES ('${nama}', '${desc}')
  `;

  connectionPool.query(queryText, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Gagal menambah data",
      });
    }

    res.json({
      message: "Data berhasil ditambahkan",
      result,
    });
  });
};

const updateCategory = (req, res) => {
  let { nama, desc } = req.body;
  let { id } = req.params;
  let queryText = `UPDATE tb_category
SET nama_tb_category = "${nama}",  desc_tb_category = "${desc}"
WHERE id_tb_category = ${id}`;

  connectionPool.query(queryText, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.json({ mesage: "anda berhasil" });
  });
};

const deleteCategory = (req, res) => {
  let { id } = req.params;
  let queryText = `DELETE FROM tb_category WHERE id_tb_category = ${id}`;

  connectionPool.query(queryText, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    res.json({ mesage: "berhasil di hapus" });
  });
};

module.exports = {
  readCategory,
  readCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
