import {useState,useEffect} from 'react'
import{useParams,Link} from 'react-router-dom'

function BitePage(props){
const {id} = useParams()
const [getBite, setBite] = useState(props.results[id])
const [getRecipe, setRecipe] =useState(props.results[id].recipe.ingredients)
console.log(props.results[id])


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
        <div>
            <h1>{getBite.recipe.label}</h1>
            <img src={getBite.recipe.image} alt={getBite.recipe.label}/>
            
            <div className='directions-container'>
                <Directions/>
            <a target="_blank"href={getBite.recipe.url}>Make Bite</a>
            </div>
            
        </div>
    )
};
const loading = ()=>{
    return(
    <h1>Loading ......</h1>
    )

};

return (
    
   
    <div>
    <Link to='/findbite'>Back</Link>
    {getBite ? loaded(): loading()}
   
    </div>
)
}




export default BitePage