import Banner from "../components/Banner";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

type nearbyData = {
  img: string;
  location: string;
  distance: string;
};

type liveAnywhereData = {
  img: string;
  title: string;
};

async function getNearbyData() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  return res.json();
}

async function getLiveAnywhereData() {
  const res = await fetch("https://www.jsonkeeper.com/b/VHHT");
  return res.json();
}

export default async function HomePage() {
  const nearbyData: nearbyData[] = await getNearbyData();
  const liveAnywhereData: liveAnywhereData[] = await getLiveAnywhereData();

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

        {/* Live Anywhere */}
        <section>
          <h2 className="py-8 text-3xl font-semibold sm:text-4xl">
            Live Anywhere
          </h2>
          <div className="p-3 -ml-3 flex space-x-3 overflow-scroll scrollbar-hide">
            {liveAnywhereData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* Large Card */}
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}
