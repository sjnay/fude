import {useState,useEffect} from 'react'
import{useParams,Link} from 'react-router-dom'

function BitePage(props){
    const {id} = useParams()
const [bite, setBite] = useState([props.bite[id]])



useEffect(()=>{
    setBite(bite)
},[])

console.log(bite[0].recipe.label)


const loaded = ()=>{
    return(
        <div>
            <Link to='/findbite'>Back</Link>
            <h1>{bite[0].recipe.label}</h1>
        </div>
)};
const loading = ()=>{
    return(
    <h1>Loading ......</h1>
    )

};
return bite ? loaded(): loading()
}




export default BitePage