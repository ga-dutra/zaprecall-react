import "./style.css";
import logo from "../../../assets/img/logo-zaprecall.png";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="ZapRecall logo" />
      <h1>ZapRecall</h1>
    </div>
  );
}
