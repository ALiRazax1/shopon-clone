export function MenuCard({menuImage,category}){
    return(
        <div className="text-center">
           <div className=""><img className="w-75" src={menuImage} alt="" /><p>{category}</p></div> 
        </div>
    )
}