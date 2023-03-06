import Image from "next/image";

type CardProps = {
  img: string;
  location: string;
  distance: string;
};

function SmallCard({ img, location, distance }: CardProps) {
  return (
    <div className="m-2 mt-5 flex items-center space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200">
      <div className="w-16 h-16 relative">
        <Image fill src={img} alt="place" className="rounded-lg ease-out" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
