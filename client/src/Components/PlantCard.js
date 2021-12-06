import { Card } from "react-bootstrap"

function PlantCard({plant}) {
    return (
        <>
        
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img src="https://images.unsplash.com/photo-1604866830513-d54766457f45?ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDE5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                <Card.Title> {plant.name}</Card.Title>
                <Card.Subtitle>{plant.plant_type}</Card.Subtitle>
                <Card.Text>{plant.notes}</Card.Text>
                <button class ="crud">Edit</button>
                <button class ="crud">Delete</button>
            </Card.Body>
        {console.log(plant)}
        </Card>
        </>
    )
}

export default PlantCard