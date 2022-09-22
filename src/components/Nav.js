import {Link} from 'react-router-dom'

function Nav(){
   
    return (
        
    <nav className="nav">

        
        <div className="fude">
             hi fudE
        </div>

        <div className='links'>
        <Link to='/findbite'>findbitE </Link>
        <Link to='/mybites'>mybitEs </Link>
        <Link to='/addbite'>addbitE </Link>
        </div>
       
    </nav>
    

    
)}

export default Nav