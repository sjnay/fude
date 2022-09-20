import {Link} from 'react-router-dom'

function SearchHome(){


 
    return(
        <form>
<label>
        <input 
        type='text'
        name='search'
        placeholder="search for bites"
       
        /> 
</label>
      <Link to="/findbite"> <button className="material-symbols-outlined" type='submit'>search</button></Link> 
        </form>
    )
}

export default SearchHome