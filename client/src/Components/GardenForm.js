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

    <button class="btn btn-primary"> <Link to="/gardens"> Back</Link></button> 
    {/* #Button is working, I just need to take the decoration off so you can see it  */}
 </form>   
        
        </>
    )

}

export default GardenForm