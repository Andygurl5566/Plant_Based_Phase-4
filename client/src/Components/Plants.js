import {useEffect, useState} from "react"
import PlantCard from "./PlantCard" 

function Plants () {

    const [plantList, setPlants] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/plants')
            .then((r) => r.json())
            .then((plants) => {
                // console.log(users)
                setPlants(plants)
            })
    }, [])



    return ( 
        <div id="plantCardsDiv">
        <h1>your plants</h1>
        {plantList.map((plant) => {
            return (
                <div    >
                    <PlantCard plant={plant}/>
                </div>
            )})
            }
        
        </div>
    )
}

export default Plants