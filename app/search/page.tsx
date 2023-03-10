import { format } from "date-fns";
import { getSearchResults } from "../../lib/getData";
import InfoCard from "../../components/InfoCard";
import { PageProps } from "../../.next/types/app/search/page";

async function SearchPage({ searchParams }: PageProps) {
  const { location, startDate, endDate, numOfGuests } = searchParams;

  // 포맷팅 이후 날짜
  // const formattedStartDate = startDate
  //   ? format(new Date(startDate), "MM/dd/yy")
  //   : "";
  // const formattedEndDate = endDate ? format(new Date(endDate), "MM/dd/yy") : "";
  const formattedStartDate =
    startDate && format(new Date(startDate), "MM/dd/yyyy");
  const formattedEndDate = endDate && format(new Date(endDate), "MM/dd/yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const searchResults: InfoCardProps[] = await getSearchResults();

  return (
    <div>
      <main className="flex">
        {/* Menu */}
        <section className="pt-14 px-6 flex-grow">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>
          <div className="mb-5 hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filterBtn">Cancellation Flexibility</p>
            <p className="filterBtn">Type of Place</p>
            <p className="filterBtn">Price</p>
            <p className="filterBtn">Rooms and Beds</p>
            <p className="filterBtn">More filters</p>
          </div>

          {/* InfoCard */}
          <div className="flex flex-col">
            {searchResults?.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SearchPage;
