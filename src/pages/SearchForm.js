import { DataContext } from 'data/DataContext'
import {Routes,Route,Outlet,Link} from 'react-router-dom'
import {useState,useContext,useEffect} from 'react'
import SearchBite from './SearchBite'


function SearchForm(){
    const [inputSearch,setInputSearch]=useState(null)
    const [search, setSearch]=useState(null)
    
    const onNewSearch=(e)=>{
        e.preventDefault(search)
    console.log(e.target.value)
        setInputSearch(e.target.value)
    
    }
    console.log(inputSearch)
    
    const submitSearch=(e,input)=>{
        e.preventDefault(search)
        e.target.value=inputSearch
        setSearch(inputSearch)
    }
    console.log(search)

return(
        
    
    <div className='body'>
       
    
    <div className='search'>
     
    <h1>Search for: {search}</h1>
    <form onSubmit={submitSearch}>
    <input
    type='text'
    name='querySearch'
    onChange={onNewSearch}
    />
    <button type='submit'>submit</button>
    </form>
    </div>
    </div>
    

    
    
   
    
    
    )
    }

    export default SearchForm