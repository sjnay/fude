
import{useState,useEffect} from 'react'



const URL = process.env.API_URL || 'https://api.edamam.com/api/recipes/v2?type=public&app_id=a65fce94&app_key=4dff9ac63074ea67a3c11227a7e44603&q=';



function SearchBite(){


const initialForm={
    querySearch:"banana", // will be props once home search is working
}




const [results, setResults] = useState([])
const [search,setSearch] = useState(initialForm.querySearch)
console.log(search)

const fetchBites = ()=>{
    fetch(URL+ `${search}`)
    .then((res)=>(res.json()))
    .then((json)=>{
        console.log(json)

        
    })




}
useEffect(fetchBites,[search])




return(
    <h1>hmm</h1>
   




)}

export default SearchBite