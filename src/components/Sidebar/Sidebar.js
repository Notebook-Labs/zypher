import { FaHome, FaExchangeAlt, FaArrowTrendUp } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { BsFillBarChartFill, BsQuestionCircle } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import Zephyr from "img/Zephyr.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Zephyr} alt="logo" />
      </div>
      <div className="buttons">
        <button className="button">
          <FaHome />
          Home
        </button>
        <button className="button">
          <FaExchangeAlt />
          Buy/Sell
        </button>
        <button className="button">
          <BiTrendingUp />
          Trade
        </button>
        <button className="button">
          <BsFillBarChartFill />
          Earn
        </button>
        <button className="button">
          <FiCreditCard />
          Wallet
        </button>
      </div>
      <div className="help-button">
        <button className="button">
          <BsQuestionCircle />
          Help
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
