import { FaStar , FaBookOpen ,FaChevronRight} from "react-icons/fa";
import { IoAlarmOutline } from "react-icons/io5";

export default function Course({img ,title ,rating ,decription ,sales ,price ,discount ,duration ,lessons,department}){
    return(
       <div className="course" id="card">
        <span className="sale">Sale</span>
        <img src={img} alt={title} />
        <div className="content">
            <div className="course-feild">
                <p className="department">{department}</p>
                <p className="rating"><FaStar /> {rating}</p>

            </div>
            <h3>{title}</h3>
            <p className="decription">
                {decription}
            </p>
            <p className="sales">
                {sales}
                </p>
                <p className="price">
                    <del>{price}</del>
                    <span className="text-secondary">{discount}</span>
                </p>
                <div className="course-info">
                    <p><IoAlarmOutline /> {duration}</p>
                    <p><FaBookOpen /> {lessons}</p>
                </div>
                                    <a href="#" className="btn-learn">Learn More <FaChevronRight/> </a>

        </div>
       </div>
    )
}