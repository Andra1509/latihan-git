import axios from "axios";
import { use, useEffect, useState } from "react";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ movieTitle: "", movieYear: "" });
  const [editId, setEditId] = useState(null); // null = mode tambah, ada isi = mode edit

  const fetchData = () => {
    axios.get("http://localhost:3000/api/movie").then((res) => {
      setData(res.data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        // Mode edit: update movie yang sedang dipilih
        await axios.put(`http://localhost:3000/api/movie/${editId}`, {
          title: input.movieTitle,
          year: input.movieYear,
        });
        setEditId(null);
      } else {
        // Mode tambah: buat movie baru seperti biasa
        await axios.post("http://localhost:3000/api/movie", {
          title: input.movieTitle,
          year: input.movieYear,
        });
      }
      setInput({ movieTitle: "", movieYear: "" });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/movie/${id}`);
      fetchData();
    } catch (err) {
      alert(err);
    }
  };

  const handleEdit = (item) => {
    // Datanya sudah ada di state `data` (dari fetchData), jadi tinggal
    // dipakai langsung untuk isi form -- tidak perlu request GET lagi.
    setInput({
      movieTitle: item.title_tb_movie,
      movieYear: item.year_tb_movie,
    });
    setEditId(item.id_tb_movie);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setInput({ movieTitle: "", movieYear: "" });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>CURD AXIOS</h1>
      <div className="div_input_movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="movieTitle">Movie Title</label>
          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            placeholder="Input Your Movie Title.."
            value={input.movieTitle}
            onChange={handleChange}
            required
          />

          <label htmlFor="movieYear">Movie Year</label>
          <input
            type="number"
            id="movieYear"
            name="movieYear"
            placeholder="Input Movie Year.."
            value={input.movieYear}
            onChange={handleChange}
            required
          />

          <input type="submit" value={editId ? "Update" : "Submit"} />
          {editId && (
            <button type="button" onClick={handleCancelEdit}>
              Batal
            </button>
          )}
        </form>
      </div>
      <div className="div-table-movie">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id_tb_movie}>
                  <td>{index + 1}</td>
                  <td>{item.title_tb_movie}</td>
                  <td>{item.year_tb_movie}</td>
                  <td>
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                          handleDelete(item.id_tb_movie);
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bt-edit"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default CrudAxios;
