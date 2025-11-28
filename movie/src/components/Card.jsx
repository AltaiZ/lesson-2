import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className="flex
        flex-col
        w-[267px]
        h-[607.125px]
        bg-[#2a2a2a]
        rounded-[10px]
        justify-between
        transition:-all 
        duration-200
        hover:-translate-y-2
        hover:-ring-4
        p-[10px]"
    >
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
      <p class="text-white text-lg font-bold">{data.original_title}</p>
      <p class="text-[#bbb]">{data.release_date}</p>
      <p class="text-white bg-[#667eea] w-[60px] rounded-[10px] text-center">
        ★ {data.vote_average.toPrecision(2)}
      </p>
      <span class="text-[#bbb] line-clamp-[3]">{data.overview}</span>
    </div>
  );
};

export default Card;
