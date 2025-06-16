export default function SectionHeader({title, decription}){
    return(
      <div className="section-header">
        <span className="text-primary">Practic Advice</span>
        <h2>{title}</h2>
        <p>{decription}</p>
      </div>
    )
}