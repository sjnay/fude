import {Link} from 'react-router-dom'


function SearchBite(props){

const resultBites = props.results.map((bite,id)=>{
    return(
        <div className='search-results'>
        <a href ={`/findbite/${id}`} key={id} className='bite'>{bite.recipe.label}</a>
        <img src={bite.recipe.image} alt='puppy'/>
        </div>
    )
}

)
return resultBites

}


export default SearchBite