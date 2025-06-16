export default function Review({star,img ,decription ,name ,jop}){
    return(
<div className="rating" id="card">
    <span className="star">{star}
    </span>
    <p className="decription">{decription}</p>
    <div className="person">
        <img src={img} alt={name} />
        <div>
            <h3 className="text-primary">{name}</h3>
            <p>{jop}</p>
        </div>
    </div>
</div>
    )
}