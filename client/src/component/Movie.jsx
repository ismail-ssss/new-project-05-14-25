import { useState } from "react";
function Movie({  movies }) {
  const [selected, setSelected] = useState("");
  const [watched, setWatched] = useState([]);

  let handleWatched = (movie) => {
    setWatched([...watched, movie]);
    setSelected(null);
  };
  return (
    <>
      <section className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            {movies.map((p, id) => (
              <div
                className="row mb-3"
                key={id}
                onClick={() => setSelected(p)}
              >
                <div className="col-md-5 me-5">
                  <img src={p.images} alt="no img found" height={"200px"} />
                </div>
                <div className="col-md">
                  <h5>{p.title}</h5>
                  <h6>{p.title}</h6>
                  <h3>category: {p.category}</h3>
                  <span>Price : {p.price}</span><br />
                  <span>Rating : {p.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {selected ? (
              <div className="row mb-3" key={selected.id}>
                <div className="col-md-5">
                  <img
                    src={selected.images}
                    alt="no img found"
                    height={"200px"}
                  />
                </div>
                <div className="col-md">
                  <h1>{selected.title}</h1>
                  <h4>{selected.brand}</h4>
                  <h3>category : {selected.category}</h3>
                  <span>price : {selected.price}</span> <br />
                  <span>Rating : {selected.rating}</span> <br />
                  <span>stock : {selected.stock}</span> <br />
                  <span>description : {selected.description}</span> <br />
                  <button
                    className="btn btn-success mt-3"
                    onClick={() => handleWatched(selected)}
                  >
                    Add to Watched
                  </button>
                  <button className="btn btn-danger mt-3 ms-2">Close</button>
                </div>
              </div>
            ) : (
              watched.map((p) => (
                <div className="row mb-3" key={p.id}>
                  <div className="col-md-5">
                    <img
                      src={p.images}
                      alt="no img found"
                      height={"200px"}
                    />
                  </div>
                  <div className="col-md">
                    <h1>{p.title}</h1>
                    <h3>category: {p.category}</h3>
                    <span>price : {p.price}</span> <br />
                  <span>Rating : {p.rating}</span> <br />
                  <span>stock : {p.stock}</span> <br />
                  <span>description : {p.description}</span> <br />
                    <p className="text-danger lead">You are already watched</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Movie;
