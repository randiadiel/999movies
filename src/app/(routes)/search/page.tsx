import Search from "@/modules/search";

const SearchRoute = ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  return <Search searchParams={searchParams} />;
};

export default SearchRoute;
