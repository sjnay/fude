import {Link} from 'react-router-dom'
function Header (){
    return (
   <header className='header'>
    <Link className='find-bite'to="/findbite">find bite</Link>
    </header>
    
    )
}

export default Header