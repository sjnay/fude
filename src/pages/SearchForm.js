

import {useState,useEffect} from 'react'


function SearchForm(props){
const [inputSearch,setInputSearch]=useState([])
const [search, setSearch]=useState(props.search)
const [getResults, setResults] = useState()

console.log(props.search)
const onNewSearch=(e)=>{
    e.preventDefault()
    setInputSearch(e.target.value)
}

console.log(inputSearch)


const onSubmit =(e)=>{
    e.preventDefault()
    console.log('did not refresh')
    setSearch(inputSearch)
    e.target.type='hidden'
}




const fetchBites = ()=>{
    
    fetch(URL+`${search}`)
    .then((res)=>(res.json()))
    .then((json)=>{
        console.log(json)
       setResults(json.hits)
    })
}
useEffect(fetchBites,[search])

console.log(getResults)
return(
  

<div className='search'>
 
<h1>results for: {search}</h1>

<div className='form-container'>
    <form onSubmit={onSubmit}>
        <input
        type='text'
        name='querySearch'
        onChange={onNewSearch}
        />
        <button type='submit'>search</button>
        <button type='submit'>new search</button>
    </form>

</div>

</div>
)
}

export default SearchForm