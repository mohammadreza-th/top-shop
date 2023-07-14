
const getData = async () => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}");
  return data.json();
};

const ClientMovies = async () => {
    const data = await getData();
    return (
    <div>
      hello
      {data.data.map((movie, i) => (
        <div key={i}>{movie.title}</div>
      ))}
    </div>
  );
};

export default ClientMovies;
