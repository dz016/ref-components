import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import styles from "./Discordtailwind.module.css";

const discordTailwind = () => {
  return (
    <>
      <div className=" flex flex-col  h-screen w-16 bg-primary fixed top-0 left-0 text-white shadow-xl shadow-gray-900 gap-1">
        <SideBarIcon icon={<FaFire size="28" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<FaPoo size="20" />} />
      </div>
    </>
  );
};

const SideBarIcon = ({
  icon,
  text = "tooltip 💡",
}: {
  icon: any;
  text?: string;
}) => (
  <>
    <div className={`${styles.sidebarIcon} group`}>
      {icon}
      <span className={`${styles.tooltip} group-hover:scale-100`}>{text}</span>
    </div>
  </>
);

export default discordTailwind;
