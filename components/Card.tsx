import Link from "next/link";
import React from "react";
import { getDate } from "@/utils/getDate";
import { truncateWords } from "@/utils/truncateWords";

import bg from "@/public/bg-image.jpg";

export interface Movie {
  episode_id: number;
  title: string;
  release_date: string;
  opening_crawl: string;
}

const Card = ({ title, release_date, opening_crawl }: Movie) => {
  return (
    <div className="w-full max-w-[360px]  flex flex-col flex-shrink-0 px-4 py-5 justify-center items-center shadow-2xl rounded-lg hover:shadow-custom  transition-all bg-image ">
      <div className="w-full mb-3">
        <h1 className="text-xl text-white font-semibold font-sans custom-font">
          {title}
        </h1>
        <p className="text-[rgb(157,157,157)] text-sm ">
          {getDate(release_date)}
        </p>
      </div>
      <p className=" text-white mb-3  font-openSans text-[14px] sm:text-base">
        {truncateWords(opening_crawl)}
      </p>
      <div className="w-full self-start border-t-[1.5px] border-t-[rgb(142,46,46)] pt-2">
        <Link href="/" className="w-full self-start text-[rgb(255,232,31)] ">
          More Info
        </Link>
      </div>
    </div>
  );
};

export default Card;
