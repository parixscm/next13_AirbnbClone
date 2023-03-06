type nearbyData = {
  img: string;
  location: string;
  distance: string;
};

type liveAnywhereData = {
  img: string;
  title: string;
};

type SmallCardProps = {
  img: string;
  location: string;
  distance: string;
};

type MediumCardProps = {
  img: string;
  title: string;
};

type LargeCardProps = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

// /search/page.tsx
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

type InfoCardProps = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
