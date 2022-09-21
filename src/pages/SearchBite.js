import {DataContext} from "data/DataContext"
import {Link} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'

const URL = process.env.API_URL || 'https://api.edamam.com/api/recipes/v2?type=public&app_id=a65fce94&app_key=4dff9ac63074ea67a3c11227a7e44603&q='


function SearchBite(props){
   const searchResults = useContext(DataContext)
    const [getResults, setResults] = useState([])
    const [search,setSearch] = useState(searchResults)
    
 

const fetchBites = ()=>{
    fetch(URL+`${searchResults}`)
    .then((res)=>(res.json()))
    .then((json)=>{
        console.log(json)
       
        setResults(json.hits)
        
        
    })
}
useEffect(fetchBites,[searchResults])





 
       
    const loaded =()=>{
        const resultBites = getResults.map((bite,id)=>{
        return(
        <div className='search-results'>
        <a href ={`/findbite/${id}`} key={id} className='bite'>{bite.recipe.label}</a>
        <img src={bite.recipe.images.THUMBNAIL.url} alt='puppy'key={bite.recipe.url}/>
        </div>
    )
})
return resultBites
    }



const loading = ()=>{
    return(
    <h1>Loading ......</h1>
    )

};


return  (
    <div className='search-body'>
        
       
    <div className='results-container'>
   
    {search ? loaded(): loading()}
    
    </div>
    </div>
  
)
}


export default SearchBite