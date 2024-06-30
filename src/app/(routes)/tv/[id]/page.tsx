import TVDetailServer from "@/modules/tv-detail";

interface TVDetailParams {
  id: number;
}

interface TVDetailProps {
  params: TVDetailParams;
}

const TVDetailPage = (props: TVDetailProps) => {
  const { params } = props;
  return <TVDetailServer id={params.id} />;
};

export default TVDetailPage;
