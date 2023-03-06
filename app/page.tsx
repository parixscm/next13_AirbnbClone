import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";

type nearbyData = {
  img: string;
  location: string;
  distance: string;
};

async function getNearbyData() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  return res.json();
}

export default async function HomePage() {
  const nearbyData: nearbyData[] = await getNearbyData();

  return (
    <div>
      <Banner />
      <main className="mx-auto px-8 max-w-7xl sm:px-16">
        {/* Explore Nearby */}
        <section className="pt-6">
          <h2 className="pb-5 font-semibold text-3xl sm:text-4xl">
            Explore Nearby
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {nearbyData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
