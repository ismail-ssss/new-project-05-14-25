import Movie from "./Movie";
import { Outlet } from "react-router-dom";

function Home({movies}) {

  return (
    <div>
      <h1>home page</h1>
      <div className="container-fluid">
        <h1>home</h1>
      </div>
    </div>
  );
}

export default Home;
