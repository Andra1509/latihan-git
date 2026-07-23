import axios from "axios";
import { useEffect, useState } from "react";
import "../style.css";
import baseUrl from "../config/utils";

const CrudAxios = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ movieTitle: "", movieYear: "" });
  const [currentId, setCurrentId] = useState(null);

  const fetchData = () => {
    axios.get(`${baseUrl}/api/movie`).then((res) => {
      setData(res.data);
      // console.log(data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (currentId) {
        await axios.put(`${baseUrl}/api/movie)${currentId}`, {
          title: input.movieTitle,
          year: input.movieYear,
        });

        setCurrentId(null);
      } else {
        await axios.post(`${baseUrl}/api/movie`, {
          title: input.movieTitle,
          year: input.movieYear,
        });
      }

      setInput({
        movieTitle: "",
        movieYear: 0,
      });

      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: name === "movieYear" ? Number(value) : value,
    }));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/movie/${id}`);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleEdit = async (id) => {
    try {
      let respond = await axios.get(`${baseUrl}/api/movie/${id}`);
      const movie = respond.data[0];
      if (!movie) {
        console.log("Movie tidak ditemukan");
        return;
      }
      setInput({
        movieTitle: movie.title_tb_movie,
        movieYear: movie.year_tb_movie,
      });
      setCurrentId(id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Daftar Movie</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="movieTitle">Movie title</label>
          <input
            type="text"
            id="movieTitle"
            name="movieTitle"
            placeholder="Movie Title"
            onChange={handleChange}
            value={input.movieTitle}
            required
          />

          <label htmlFor="movieYear">Movie Year</label>
          <input
            type="number"
            id="movieYear"
            name="movieYear"
            placeholder="Movie Year"
            onChange={handleChange}
            value={input.movieYear}
            required
          />

          <input type="submit" value={currentId ? "Update" : "Submit"} />
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
            {data.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{movie.title_tb_movie}</td>
                  <td>{movie.year_tb_movie}</td>
                  <td>
                    {" "}
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                          handleDelete(movie.id_tb_movie);
                        }
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="bt-edit"
                      onClick={() => {
                        handleEdit(movie.id_tb_movie);
                      }}
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
