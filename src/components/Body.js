import SearchBite from "pages/SearchBite"
import SearchHome from "pages/SearchHome"
import {Routes,Route,Outlet} from 'react-router-dom'
import{useState,useEffect} from 'react'
const URL = process.env.API_URL || 'https://api.edamam.com/api/recipes/v2?type=public&app_id=a65fce94&app_key=4dff9ac63074ea67a3c11227a7e44603&q=';




function Body(){

const initialForm={
    querySearch:"taco", // will be props once home search is working
}

const [results, setResults] = useState([])
const [search,setSearch] = useState(initialForm.querySearch)
const [more,setMore]=useState([])



const fetchBites = ()=>{
    fetch(URL+`${search}`)
    .then((res)=>(res.json()))
    .then((json)=>{
       setMore(json._links.next)
        setResults(json.hits)

    })
}
useEffect(fetchBites,[search])


    return (
    <div className='body'>
    <h1>Dis my Body</h1>
    

    <Routes>
    <Route exact path='/' element={<SearchHome/>}/>
    <Route exact path='/findbite' element={<SearchBite results={results} />}/>
    </Routes>

    </div>
)}

export default Body