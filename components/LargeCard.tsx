import Image from "next/image";

function LargeCard({ img, title, description, buttonText }: LargeCardProps) {
  return (
    <section className="py-16 relative cursor-pointer">
      <div className="min-w-[300px] h-96 relative">
        <Image
          fill
          src={img}
          alt="lg"
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="w-64 mb-3 text-3xl sm:text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="mt-5 px-4 py-2 bg-gray-900 rounded-lg text-sm text-white">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
