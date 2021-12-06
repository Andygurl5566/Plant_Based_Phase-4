import {useEffect, useState} from "react"
import GardenCard from "./GardenCard" 
function Gardens () {

    const [GardenList, setGardens] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/gardens')
            .then((r) => r.json())
            .then((gardens) => {
                // console.log(Gardens)
                setGardens(gardens)
            })
    }, [])



    return ( 
        <div id="gardenCardsDiv">
        <h1>your gardens</h1>
        {GardenList.map((garden) => {
            return (
                <div id="GardenCardsDiv">
                    <GardenCard 
                    garden={garden}
                    />
                </div>
            )})
            }
        
        </div>
    )
}

export default Gardens