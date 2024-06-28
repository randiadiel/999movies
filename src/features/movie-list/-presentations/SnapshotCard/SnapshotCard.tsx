import Image, { ImageProps } from "next/image";

type SnapshotCardProps = ImageProps;

const SnapshotCard = (props: SnapshotCardProps) => {
  const imageProps = props;
  return (
    <div>
      <Image {...imageProps} alt={imageProps.alt} />
    </div>
  );
};

export default SnapshotCard;
