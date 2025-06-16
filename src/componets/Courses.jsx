import { coursesData } from "../data"
import Course from "./Course"
import SectionHeader from "./SectionHeader"
export default function Courses(){
    return(
     <section id="courses">
        <div className="container">
            <SectionHeader title="Make Onliune Edection acessible" decription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, qui obcaecati? Rerum, impedit! Corrupti, autem! Nulla quidem, magnam eaque, sit in a esse molestiae odio at libero doloribus molestias placeat.
"/>
<div className="courses-contianer">

          {coursesData.map((courses) =>{
        const{department,decription,discount,duration,img,id,lessons,price,rating,sales,title}=courses;
        return <Course key={id} 
img={img}
title={title}
 rating={rating}
decription={decription}
sales={sales}
price={price}
discount={discount}
 duration={duration}
 lessons={lessons}
 department={department}
/>
    })}  
 
    


     
</div>
        </div>
     </section>
    )
}