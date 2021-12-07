import { Form } from "react-bootstrap"
import {Link} from 'react-router-dom'

function GardenForm(){
    
    return(
        <>
         <form>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" />
    </div>

    <div class="form-group">
        <label for="plant_type">Location</label>
        <input type="text" class="form-control" id="location" />
    </div>



    <div class="form-check">
    
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
   <Link class="btn btn-primary" to="/gardens"> Back</Link>
   

 </form>   
        
        </>
    )

}

export default GardenForm