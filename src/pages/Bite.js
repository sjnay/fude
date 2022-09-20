import {useState,useEffect} from 'react'
import{useParams,Link} from 'react-router-dom'

function BitePage(props){
const {id} = useParams()
const [getBite, setBite] = useState(null)
const [getRecipe, setRecipe] =useState(null)
console.log(props.bite)

 useEffect(()=>{
    setTimeout(()=>{
    setBite(props.bite[id])
    setRecipe(props.bite[id].recipe.ingredients)
},100)
})


const Ingr = ()=>{
    return getRecipe?.map((item,index)=>{
 
    return(
        <div className= 'recipe-items'>
            <>{item.food}</>
        </div>
    )}
)}


const loaded = ()=>{
    return(
        <div>
            <h1>{getBite.recipe.label}</h1>
            <img src={getBite.recipe.image} alt={getBite.recipe.label}/>
            <div className='recipe-items-container'>
            <Ingr/>
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