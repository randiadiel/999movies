import sty from "./GenreChip.module.css";

interface GenreChipProps {
  name: string;
  backgroundColor?: string;
}

const GenreChip = (props: GenreChipProps) => {
  const { name, backgroundColor = "yellow" } = props;
  return (
    <div style={{ background: backgroundColor }} className={sty.chipContainer}>
      {name}
    </div>
  );
};

export default GenreChip;
