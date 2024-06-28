import Image, { ImageProps } from "next/image";

type SnapshotCardProps = ImageProps;

const SnapshotCard = (props: SnapshotCardProps) => {
  const imageProps = props;
  return <Image {...imageProps} alt={imageProps.alt} />;
};

export default SnapshotCard;
