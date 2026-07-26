import axios from "axios";
import { useEffect, useState } from "react";
import "../../style.css";
import baseUrl from "../../config/utils";
import { Link,  useNavigate, useParams } from "react-router";

const FormCategory = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [input, setInput] = useState({
    categoryName: "",
    categoryDesc: "",
    categoryId: null,
  });
  const [currentId, setCurrentId] = useState(null);

  const fetchData = async () => {
    axios.get(`${baseUrl}/api/category/${id}`).then((res) => {
      let {
        id_tb_category: categoryId,
        desc_tb_category: categoryDesc,
        nama_tb_category: categoryName,
      } = res.data[0];
      setInput({ categoryId, categoryDesc, categoryName });
      console.log(res.data[0]);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (input.categoryId) {
        await axios.put(`${baseUrl}/api/category/${input.categoryId}`, {
          nama: input.categoryName,
          desc: input.categoryDesc,
        });
        setCurrentId(null);
      
      } else {
        await axios.post(`${baseUrl}/api/category`, {
          nama: input.categoryName,
          desc: input.categoryDesc,
        });
      }
      navigate("/category");
      setInput({
        categoryName: "",
        categoryDesc: "",
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/category/${id}`);
      fetchData();
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  const handleEdit = async (id) => {
    try {
      let respond = await axios.get(`${baseUrl}/api/category/${id}`);
      const movie = respond.data[0];
      if (!movie) {
        console.log("Movie tidak ditemukan");
        return;
      }
      setInput({
        movieTitle: movie.nama_tb_category,
        movieYear: movie.desc_tb_category,
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
      <h1>{id}</h1>
      <div className="div-input-movie">
        <form onSubmit={handleSubmit}>
          <label htmlFor="categoryName">Nama Category</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            placeholder="categoryName"
            onChange={handleChange}
            required
            value={input.categoryName}
            // value={input.movieTitle}
          />

          <label htmlFor="categoryDesc">Category Desc</label>
          <textarea
            id="categoryDesc"
            name="categoryDesc"
            value={input.categoryDesc}
            onChange={handleChange}
          ></textarea>

          <input type="submit" value={currentId ? "Update" : "Submit"} />

          <Link to="/category">Cancel</Link>
        </form>
      </div>
    </>
  );
};

export default FormCategory;
