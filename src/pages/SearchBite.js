import {DataContext} from "data/DataContext"
import {Link} from 'react-router-dom'
import {useState,useEffect,useContext} from 'react'




function SearchBite(props){
   
    const [getResults, setResults] = useState([])
    
    useEffect(()=>{
       
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
    <div className='search-body'>
       
       
    <div className='results-container'>
   
    {getResults ? loaded(): loading()}
    
    </div>
    </div>
  
)
}


export default SearchBite