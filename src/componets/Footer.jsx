import { CiFacebook } from "react-icons/ci";
import { FaTwitter,FaInstagram } from "react-icons/fa";
export default function Footer(){
    return(
      <footer id="footer">
        <div className="container">
            <div className="footer-row">
                <div className="col">
                    <h2>Get in Touch</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className="social">
                     <a href="#"><CiFacebook /></a>
                     <a href="#"><FaInstagram /></a>
                     <a href="#"><FaTwitter /></a> 
                    </div>
                </div>
                <div className="col">
                    <h2>Company Info</h2>
                    <ul>
                        <li><a href="#home">About Us</a></li>
                        <li><a  href="#course">Carrier</a></li>
                        <li><a href="#reviews">we are hiring</a></li>
                        <li><a href="#home">Blog</a></li>
                    </ul>
                </div>
                 <div className="col">
                    <h2>Features</h2>
                    <ul>
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>
                    <div className="col">
                    <h2>Resources</h2>
                    <ul>
                        <li>rima &amp; Mellah</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>api</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2025 | All right reserverd made by {" "}
                   <a href="https://rimamellah1324.com" target="_blank" rel="noopener noreferrer">
  <strong className="text-primary">Rima Mellah</strong>
</a>

                    </p>
            </div>
        </div>
      </footer>
    )
}