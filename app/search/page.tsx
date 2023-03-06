import { format } from "date-fns";

type ParamsProps = {};

type SearchParamsProps = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};

type Props = {
  params: ParamsProps;
  searchParams: SearchParamsProps;
};

async function SearchPage({ searchParams }: Props) {
  const { location, startDate, endDate, numOfGuests } = searchParams;
  // 포맷팅 이후 날짜
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

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
        </section>

        {/* Map */}
      </main>
    </div>
  );
}

export default SearchPage;
