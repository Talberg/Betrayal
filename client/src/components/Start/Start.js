import React from 'react'
import './Start.scss'
import LeftDoor from '../Doors/LeftDoor/LeftDoor'
import Room from '../Room/Room'

function Start (props){
    return (<><Room open={props.open}   doors='l' coor='x7y5' color='red' x='x7' y='y5'> </Room>  </>)
}

export default Start 