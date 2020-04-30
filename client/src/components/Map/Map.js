import React from 'react'
import './Map.scss'
import MasterFloorplan from '../MasterFloorplan/MasterFloorplan'
import GroundFloor from '../../pages/GroundFloor/GroundFloor'
import CharacterSelect from '../CharacterSelect/CharacterSelect'

function Map(props) {
    console.log('Maps.js props below')
    console.log(props)

    function startGame (props){
        // change the game state here so that once all the players have selleced theier charaacter 

        props.changeState({
                ...props.rooms,
                allChosen:true
        })

    }

    return (<>
    
    {props.rooms.allChosen ? <><div className='map'><MasterFloorplan save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms}></MasterFloorplan><GroundFloor/></div></> :
    <CharacterSelect save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms} ></CharacterSelect> }
    
    
    
    </>
    )
}
export default Map