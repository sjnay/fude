import { DataContext } from "data/DataContext"
import SearchBite from "pages/SearchBite"

import BitePage from "pages/Bite"
import {Routes,Route,Outlet,Link} from 'react-router-dom'
import{useState,useEffect,useContext} from 'react'




function Search(props){
    const [inputSearch,setInputSearch]=useState(null)
const [search, setSearch]=useState(null)

const onNewSearch=(e)=>{
    e.preventDefault()
console.log(e.target.value)
    setInputSearch(e.target.value)

}
console.log(inputSearch)

const submitSearch=(e)=>{
    e.preventDefault(search)
    setSearch(inputSearch)
}
console.log(search)



return(
    <div>




<div className='body'>
   
<h1>Search for: {search}</h1>
<div className='search'>
 
<h1>search input</h1>
<form onSubmit={submitSearch}>
<input
type='text'
name='querySearch'
onChange={onNewSearch}
/>
<button type='submit'>submit</button>
</form>
<DataContext.Provider value={search}>
    <SearchBite/>
</DataContext.Provider>

</div>
</div>
</div>

)
}


function Body(props){

    console.log(props)
    
    
    return(
       
       
       
       <div className='body'>
   
       
           
       
        <Routes>
            <Route exact path='/' element={<Search />}/>
            <Route exact path='/findbite' element={<Search/>}/>
            <Route exact path='findbite/:id' element={<BitePage/>}/>
        </Routes>
        
       
       
    
    </div>
   
    )}
    

export default Body