
function Header (props){
    return (
   <header className='header'>
    <h1>showing results for: {props.search}</h1>
    <div>
        {props.input}
    </div>
    </header>
    
    )
}

export default Header