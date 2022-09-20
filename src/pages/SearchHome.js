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
        <button className="material-symbols-outlined" type='submit'>search</button>
        </form>
    )
}

export default SearchHome