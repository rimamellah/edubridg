import { FaArrowRight } from "react-icons/fa";
export default function Header(){
    return(
    <header id="header">
  <nav className="navbar">
    <a href="#" className="logo" >
        EduBridge
    </a>
    <ul>
        <li>
              <a  href="#home" >
        Home
    </a>
        </li>
         <li>
              <a  href="#course">
        Product
    </a>
        </li>
             <li>
              <a href="#reviews" >
        Pricing
    </a>
        </li>
             <li>
              <a href="#join-us" >
        Contact
    </a>
        </li>
    </ul>
    <div className="account">
     <a href="#footer" className="login"> Login
    </a>
  <button  className="btn-join"> Join Us <FaArrowRight /></button>
    </div>
  </nav>
    </header>
    )
}