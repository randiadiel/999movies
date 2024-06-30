import { ReactNode } from "react";
import sty from "./CenterNotice.module.css";

interface CenterNoticeProps {
  title: ReactNode;
}

const CenterNotice = (props: CenterNoticeProps) => {
  const { title } = props;
  return <div className={sty.centerNoticeContainer}>{title}</div>;
};

export default CenterNotice;
