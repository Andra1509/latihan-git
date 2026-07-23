import "./App.css";
import CrudAxios from "./pages/CrudAxios";
import MainLayout from "./layout/mainLayout";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import MainRouter from "./router/MainRouter";

export default function App() {
  return (
    <>
      <MainRouter></MainRouter>
    </>
  );
}
