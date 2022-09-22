import {Link} from 'react-router-dom'

function Nav(){
   
    return (
    <nav className="nav">
        <Link to='/findbite'>my bites</Link>
        <Link to='/findbite'>find bite</Link>
        <Link to='/findbite'>add bite</Link>
        
    </nav>
    

    
)}

export default Nav