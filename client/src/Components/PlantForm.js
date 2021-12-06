import { Form } from "react-bootstrap"
import {Link} from 'react-router-dom'


function PlantForm(){
    return(
<>

 <form>
    <div class="form-group">
        <label for="name">Plant Name</label>
        <input type="text" class="form-control" id="name" />
    </div>

    <div class="form-group">
        <label for="plant_type">Plant Type</label>
        <input type="text" class="form-control" id="type" />
    </div>

    <div class="form-group">
        <label for="species">Species</label>
        <input type="text" class="form-control" id="species" />
    </div>

    <div class="form-group">
        <label for="name">Description</label>
        <input type="text" class="form-control" id="description" />
    </div>

    <div class="form-group">
        <label for="name">Care Instructions </label>
        <input type="text" class="form-control" id="instructions" />
    </div>

    <div class="form-group">
        <label for="name">Notes </label>
        <input type="text" class="form-control" id="notes" placeholder="Notes"/>
    </div>

    <Form.Group controlId="formFile" className="mb-3">     
    <div class="form-group">
        <label for="name">Image </label>
        <input type="file" class="form-control" id="image" />
    </div>
    </Form.Group>
    
    <>
    <Form.Label>Neccessary Sunlight</Form.Label>
    <Form.Range />
    </>

    <div class="form-check">
    
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>

    <button class="btn btn-primary"> <Link to="/plants"> Back</Link></button> 
    {/* #Button is working, I just need to take the decoration off so you can see it  */}
 </form>   
        
</>
    )

}

export default PlantForm