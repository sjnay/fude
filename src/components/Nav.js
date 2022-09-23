import {Link} from 'react-router-dom'

function Nav(){
   
    return (
        
    <nav className="nav">

        
        <div className="fude">
             hi füde
        </div>

        <div className='links'>
        <Link to='/findbite'>findbite </Link>
        <Link to='/mybites'>mybites </Link>
        <Link to='/addbite'>addbite </Link>
        </div>
       
    </nav>
    

    
)}

export default Nav