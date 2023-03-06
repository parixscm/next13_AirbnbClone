import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        fill
        style={{ objectFit: "cover" }}
        src="https://links.papareact.com/0fm"
        alt="banner"
      />
      <div className="w-full absolute top-1/2 text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="my-3 px-10 py-4 bg-white shadow-md rounded-full text-purple-500 font-bold hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
