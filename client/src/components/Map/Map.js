import React from 'react'
import './Map.scss'
import MasterFloorplan from '../MasterFloorplan/MasterFloorplan'
import GroundFloor from '../../pages/GroundFloor/GroundFloor'

function Map(props) {
    console.log('Maps.js props below')
    console.log(props)
    return (<><div className='map'>
        
        <MasterFloorplan user={props.user} changeState={props.changeState} rooms={props.rooms}></MasterFloorplan><GroundFloor/>



    </div></>)
}
export default Map