import { raeingData } from "../data";
import SectionHeader from "./SectionHeader";
import Review from "./Review";
export default function Reviews(){
    return(
       <section id="reviews">
        <div className="container">
            <SectionHeader title={"Each and every clint is important"} decription={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nesciunt ex veritatis quaerat rem porro."} />
       <div className="ratings">
        {raeingData.map((rating)=>{
          const{id,star,img ,decription ,name ,jop}=rating;  
         return <Review key={id} star={star} img={img} decription={decription} name={name} jop={jop}/>;
        })}
       
       </div>
       
       
        </div>

       </section>
    )
}