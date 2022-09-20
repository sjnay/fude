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

console.log(getRecipe[0].food)
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
            <div>
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
    {getBite ? loaded(): loading()}
    <Link to='/findbite'>Back</Link>
    </div>
)
}




export default BitePage