import { cardData } from "../data";
import Card from "./Card";

export default function Home(){
    return(
      <section id="home">
       
        <div className="container">
          {/*HOME HEDER*/}   
            <div className="home-header">
                <span>
    Jouin Us
                </span>
                <h1>Lorem ipsum dolor
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus porro deserunt quo asperiores labore illum expedita corrupti voluptas reiciendis facilis.</p>
            <button href="#" className="btn btn-red"> Get Quote Now</button>
                        <button href="#" className="btn btn-transparent">Lern More</button>
            </div>
            {/*===HOME HEDER*/} 
            {/* Card container*/}
            <div className="card-container">
                {cardData.map((card)=>{
     return <Card key={card.id} title={card.title} bgColor={card.bgColor} color={card.color} description={card.description} img={card.img}/>
})}
            </div>
            {/*===card conrainer====*/}
        </div>
               

      </section>  
    )
}