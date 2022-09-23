
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'



function SearchBite(props){
   
    const [getResults, setResults] = useState([])
    const [search,setSearch]=useState(props.search)
   
    
    useEffect(()=>{
       setSearch(props.search)
        setResults(props.results)
     
    },[props.search,props.results])



const loaded =()=>{
        const resultBites = getResults.map((bite,id)=>{
        return(
        <div className='search-results'>
        <Link to ={`/findbite/${id}`} key={id} className='bite'>{bite.recipe.label}</Link>
        <img src={bite.recipe.images.SMALL.url} alt='puppy'key={bite.recipe.url}/>
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
   
       <div className='results'>
     
    <div className='results-container'>
   
    {getResults ? loaded(): loading()}
   
    </div>
  
    </div>
  
)
}


export default SearchBite