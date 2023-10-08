"use client";

import React, { useEffect, useState, useCallback } from "react";
import Card, { Movie } from "@/components/Card";
import Header from "@/components/Header";
import { getMovies } from "@/services/ApiCall";
import Image from "next/image";
import loader from "@/public/loader.svg";
import Loader from "@/components/Loader";

const MovieLayout: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const getAllMovies = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getMovies();
      console.log(data);

      setMovies(data);
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <div className="w-full flex flex-col bg-black px-4 h-full mb-10 py-[6px]">
      <Header />
      {loading ? (
        <div className="w-[300px] h-[calc(100vh-150px)] flex justify-center items-center animate-spin mx-auto">
          <Loader />
        </div>
      ) : error ? (
        <div className="w-full h-[calc(100vh-150px)] flex justify-center items-center">
          <p className="text-red-500 text-2xl">{error}</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center mt-5 w-full gap-5 md:gap-8 ">
          {movies.map((movie) => (
            <Card
              key={movie?.episode_id}
              title={movie.title}
              opening_crawl={movie?.opening_crawl}
              release_date={movie.release_date}
              episode_id={movie.episode_id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieLayout;
