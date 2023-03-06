import Image from "next/image";

type MediumCardProps = {
  img: string;
  title: string;
};

function MediumCard({ img, title }: MediumCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image fill src={img} alt="place2" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-xl sm:text-2xl">{title}</h3>
    </div>
  );
}

export default MediumCard;
