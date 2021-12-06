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
        <>
        <h1>your plants</h1>
        {plantList.map((plant) => {
            return (
                <div id="plantCardsDiv">
                    <PlantCard plant={plant}/>
                </div>
            )})
            }
        
        </>
    )
}

export default Plants