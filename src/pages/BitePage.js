import {useState,useEffect} from 'react'
import{useParams,Link} from 'react-router-dom'

function BitePage(props){
const {id} = useParams()
const [getBite, setBite] = useState(props.results[id])
const [getRecipe, setRecipe] =useState(props.results[id].recipe.ingredients)



 useEffect(()=>{
    setTimeout(()=>{
    setBite(props.results[id])
    setRecipe(props.results[id].recipe.ingredients)
},100)
},[id,props.results])



const Directions = ()=>{
    
    return getRecipe?.map((item,index)=>{
 
    return(
        <div className= 'directions'>
            <>{item.text}</>
        </div>
    )}
)}




const loaded = ()=>{
    return(
        <div className='bite-card'>
            
        <div className='bite-image-title' >
            
            <img src={getBite.recipe.image} alt={getBite.recipe.label}/>
                 
        </div>
            <div className='bite-directions'>
                <Directions/>
            <a className='make-bite' target="_blank"rel="noreferrer" href={getBite.recipe.url}>Make Bite</a>
            </div>
        </div>
    )
};
const loading = ()=>{
    return(
    <h1>bite is loading ......</h1>
    )

};

return (
    <div className='bite-show'>
    <Link className='back' to='/findbite'>Back</Link>
    <div className='bite-container'>
    <p className="bite-name">{getBite.recipe.label}</p>
   
    {getBite ? loaded(): loading()}
   
    </div>
    </div>
)
}




export default BitePage