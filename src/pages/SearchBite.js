import {Link} from 'react-router-dom'
import {useState} from 'react'


function SearchBite(props){
    const [search,setSearch]=useState(props.search)
    

const resultBites = props.results.map((bite,id)=>{
    return(
        <div className='search-results'>
        <a href ={`/findbite/${id}`} key={id} className='bite'>{bite.recipe.label}</a>
        <img src={bite.recipe.images.THUMBNAIL.url} alt='puppy'/>
        </div>
    )})


return  (
    <div className='search-body'>
    <div>
    <input
    type='text'
    value={search}
    name='searchValue'
    />
    </div>

    <div className='results-container'>
     {resultBites}
    </div>
    </div>
  
)

}


export default SearchBite