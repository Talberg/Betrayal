import React from 'react'
import './RoomName.scss'

function RoomName(props){
console.log(props.name)    


return(<input className={`roomName ${props.x}N ${props.y}N `}  value={props.name}></input>)
}

export default RoomName