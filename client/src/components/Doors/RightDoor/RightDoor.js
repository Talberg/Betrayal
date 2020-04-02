import React from 'react'   
import './RightDoor.scss'

function RightDoor(props){

    function goRight(){
        let splitX = props.x.split('x')
        console.log(splitX)
        let X = parseInt(splitX[1])
        let newX = `x${X+1}`
        console.log(newX)
        const newRoom = (newX+props.y)
        
        console.log(newRoom)
        const setRooms = props.changeState
        const open = props.rooms.open
        const doors = props.rooms.doors
        console.log(doors)
        setRooms({open:{...open,[newRoom]:true },doors:{...doors}})
        
        
        
        
        
                
        
            }
    return (<><button onClick={goRight} className={`rightDoor ${props.doors}R`} ></button></>)
}

export default RightDoor