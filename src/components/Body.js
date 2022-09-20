import { DataContext } from "data/DataContext"
import SearchBite from "pages/SearchBite"
import SearchHome from "pages/SearchHome"
import BitePage from "pages/Bite"
import {Routes,Route,Outlet} from 'react-router-dom'
import{useState,useEffect} from 'react'
const URL = process.env.API_URL || 'https://api.edamam.com/api/recipes/v2?type=public&app_id=a65fce94&app_key=4dff9ac63074ea67a3c11227a7e44603&q=';





function Body(){
    
   
const initialForm={
    querySearch:"taco", // will be props once home search is working
}



const [getResults, setResults] = useState([])
const [bite, setBite] = useState([])
const [search,setSearch] = useState(initialForm.querySearch)

const fetchBites = ()=>{
    fetch(URL+`${search}`)
    .then((res)=>(res.json()))
    .then((json)=>{
        console.log(json)
    setResults(json.hits)
    setBite(json.hits)
    setSearch(search)
    console.log(json.hits)
    })
}
useEffect(fetchBites,[search])


    return (
    <div className='body'>
    
    <DataContext.Provider value={search}>

    <Routes>
    <Route exact path='/' element={<SearchHome/>}/>
    <Route exact path='/findbite' element={<SearchBite search={search} results={getResults} />}/>
    <Route exact path='/findbite/:id' element={<BitePage bite={bite}/>}/>
    </Routes>
    
    </DataContext.Provider>

    </div>
)}

export default Body