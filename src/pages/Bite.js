import {useState,useEffect} from 'react'
import{useParams,Link} from 'react-router-dom'

function BitePage(props){

const [bite, setBite] = useState([])
const {id} = useParams()
console.log(props.bite[id])

useEffect(()=>{
    setBite(props.bite[id])
},[id])
console.log(bite.recipe)

const loaded = ()=>{
    return(
    
    <div>
    <h1>{bite.recipe.label}</h1>
    <img src={bite.recipe.image} alt={bite.recipe.label}></img>
    </div>
)}
const loading = ()=>{
    <h1>Loading ......</h1>
}
return (
    <div>
    <Link to='/findbite'>Back</Link>
    {bite ? loaded(): loading()}
    </div>
)}

export default BitePage