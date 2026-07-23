import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home";
import CrudAxios from "../pages/CrudAxios";
import NoMatch from "../pages/NoMatch";
import TableCategory from "../pages/Category/TableCategory";
// import FormCategory from "../pages/Category/FormCategory";


const MainRouter = () => {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="crudAxios" element={<CrudAxios />} />
            <Route path="Category" element={<TableCategory />} />
            <Route path="category/create" element={<FormCategory />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainRouter;
