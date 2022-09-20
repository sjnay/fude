


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