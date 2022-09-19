
import{useState,useEffect} from 'react'
const URL = process.env.API_URL || 'https://api.edamam.com/api/recipes/v2?type=public&app_id=a65fce94&app_key=4dff9ac63074ea67a3c11227a7e44603&q=';



function SearchBite(props){





const resultBites = props.results.map((bite,index)=>{
    return(
        <div>
        <p key={index} className='bite'>{bite.recipe.label} </p>
        <img src={bite.recipe.image} alt='puppy'/>
        </div>
    )
})


return(
    <div className='search-results'>
        <h1>Results for: </h1>
            {resultBites}
           
            
    </div>
     
   


     

)}

export default SearchBite