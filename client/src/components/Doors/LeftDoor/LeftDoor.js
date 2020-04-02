import React from 'react'   
import './LeftDoor.scss'

function LeftDoor(props){
    console.log(props.x)
    function goLeft(){
let splitX = props.x.split('x')

let newX =`x${splitX[1]-1}`
const newRoom = (newX+props.y)

console.log(newRoom)
const setRooms = props.changeState
const open = props.rooms.open
const doors = props.rooms.doors
console.log(doors)
setRooms({open:{...open,[newRoom]:true },doors:{...doors}})





        

    }
    return (<><button onClick={goLeft} className={`leftDoor ${props.doors}L`} ></button></>)
}

export default LeftDoor