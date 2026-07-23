import { useEffect, useState } from "react";
import baseUrl from "../../config/utils";
import axios from "axios";

const TableCategory = () => {
  const [data, setData] = useState([]);
//   const [input, setInput] = useState({ movieTitle: "", movieYear: "" });
  const [currentId, setCurrentId] = useState(null);

  const fetchData = () => {
    axios.get(`${baseUrl}/api/category`).then((res) => {
      setData(res.data);
      console.log(data);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (currentId) {
        await axios.put(`${baseUrl}/api/movie)${baseUrl}`, {
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
      <h1>TABLE CATEGORY</h1>
      
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
                  <td>{movie.nama_tb_category}</td>
                  <td>{movie.desc_tb_category}</td>
                  <td>
                    {" "}
                    <button
                      className="bt-del"
                      onClick={() => {
                        if (confirm("Apa Anda Yakin Menghapus File Ini ?")) {
                          handleDelete(movie.id_tb_category);
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

export default TableCategory;

