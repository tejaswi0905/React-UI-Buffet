import React from "react";
import Image from "next/image";

export interface MovieSearchCardProps {
  id: Number;
  title: String;
  releaseDate: String;
  image: String;
  voteAverage: Number;
}

export const MovieSearchCard = ({
  title,
  releaseDate,
  image,
  voteAverage,
}: MovieSearchCardProps) => {
  return (
    <div className="flex items-center w-[35rem] h-20 rounded-sm p-2 bg-gray-300 hover:bg-gray-400">
      <div className="flex-1 flex items-center justify-center text-center">
        <p className="truncate">{title}</p>
      </div>
      <div className="flex-1 flex items-center justify-center text-center">
        <p>{releaseDate}</p>
      </div>
      <div className="flex-1 flex items-center justify-center text-center">
        <p>{`${voteAverage}`}</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        {/* <Image
          src={image}
          alt={title}
          width={50}
          height={75}
          className="object-contain"
        /> */}
      </div>
    </div>
  );
};
