import Movie from "./Movie";
import { Outlet } from "react-router-dom";

function Home({movies}) {

  return (
    <div>
      <h1>home page</h1>
      <div className="container-fluid">
        <div className="row border">

          <div className="col-5 border p-3">
            {movies.map((movie,id)=>(
              <Movie key={id} data={movie}></Movie>
            ))}
          </div>
          <div className="col-5 mt-5 m-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
