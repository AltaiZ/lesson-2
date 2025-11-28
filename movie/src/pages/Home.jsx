import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState(null);
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1"
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(data);
  return (
    <div className="w-full flex justify-center bg-gray-900  pt-10">
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] ">
      {data && data.results.map((movie) => <Card data={movie} />)}
    </div>
    </div>
  );
};

export default Home;
