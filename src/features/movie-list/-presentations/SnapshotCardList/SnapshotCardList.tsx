import { SnapshotCard } from "../..";
import { MovieTVSnapshot } from "../../-models/types/movie";

interface SnapshotCardListProps {
  list: MovieTVSnapshot[];
}

const SnapshotCardList = (props: SnapshotCardListProps) => {
  const { list } = props;
  return (
    <>
      {list.map((movie) => (
        <SnapshotCard key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default SnapshotCardList;
