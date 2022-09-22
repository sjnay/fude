import Header from "./Header"
import SearchBite from "pages/SearchBite"
import SearchForm from "pages/SearchForm"
import BitePage from "pages/BitePage"
import {Routes,Route,Outlet,Link} from 'react-router-dom'
import{useState,useEffect} from 'react'
import ComingSoon from "pages/ComingSoon"
const URL = process.env.API_URL || 'https://api.edamam.com/api/recipes/v2?type=public&app_id=a65fce94&app_key=4dff9ac63074ea67a3c11227a7e44603&q='




function Body(){
    
    const [inputSearch,setInputSearch]=useState("chicken")
    const [search, setSearch]=useState([])
    const [getResults, setResults] = useState()
    
    
    const onNewSearch=(e)=>{
        e.preventDefault()
        setInputSearch(e.target.value)
        console.log(e.target.type)
    }

    
    
   
    const onSubmit =(e)=>{
        e.preventDefault()
        console.log('did not refresh')
        setSearch(inputSearch)
       
    }

   
   
const fetchBites = ()=>{
        
        fetch(URL+`${search}`)
        .then((res)=>(res.json()))
        .then((json)=>{
            console.log(json)
           setResults(json.hits)
        })
    }
    useEffect(fetchBites,[search])
    
   

        return(
    <div>
   <div className='form-container'>
        <form onSubmit={onSubmit} >
            <input
            type='text'
            name='querySearch'
            onChange={onNewSearch}
            
            />
            <button type='submit'>search</button>
            
        </form>
    </div>
   
  

   
        <div>
    <Header search={search}  />
       
       
     <Routes>
            <Route exact path='/findbite' element={<SearchBite search={search} results={getResults}/>}/>
            <Route exact path='/findbite/:id' element={<BitePage search={search}results={getResults} />}/>
            <Route exact path='*' element={<ComingSoon/>}/>
    </Routes>
    </div>
    </div>
  
   
   
    )}
    
    
export default Body