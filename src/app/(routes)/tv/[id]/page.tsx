interface TVDetailParams {
  id: number;
}

interface TVDetailProps {
  params: TVDetailParams;
}

const TVDetail = (props: TVDetailProps) => {
  const { params } = props;
  return <div>My Post: {params.id}</div>;
};

export default TVDetail;
