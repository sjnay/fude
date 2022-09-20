import {Link} from 'react-router-dom'

function Nav(){
   
    return (
    <nav className="nav">
       <p><Link to='/findbite'>my bites</Link></p>
       <p>  <Link to='/findbite'>find bite</Link></p>
      <p> <Link to='/findbite'>add bite</Link></p>
        
    </nav>
    

    
)}

export default Nav