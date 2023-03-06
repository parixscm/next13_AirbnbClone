import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}: InfoCardProps) {
  return (
    <div className="px-2 py-7 pr-4 flex border-b cursor-pointer hover:opacity-80 hover:shadow-lg first:border-t transition duration-200 ease-out">
      <div className="relative w-40 h-24 flex-shrink-0 md:w-80 md:h-52">
        <Image
          fill
          src={img}
          style={{ objectFit: "cover" }}
          alt="pic"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="pt-2 w-10 border-b" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="pt-5 flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
