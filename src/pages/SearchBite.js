
import {Link} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'
import SearchForm from './SearchForm'
import BitePage from './BitePage'




function SearchBite(props){
   
    const [getResults, setResults] = useState([])
    const [search,setSearch]=useState(props.search)
    console.log(props.search)
    console.log(search)
    useEffect(()=>{
       setSearch(props.search)
        setResults(props.results)
     
    })



const loaded =()=>{
        const resultBites = getResults.map((bite,id)=>{
        return(
        <div className='search-results'>
        <Link to ={`/findbite/${id}`} key={id} className='bite'>{bite.recipe.label}</Link>
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
   
       
     
    <div className='results-container'>
   
    {getResults ? loaded(): loading()}
   
    </div>
  
  
  
)
}


export default SearchBite