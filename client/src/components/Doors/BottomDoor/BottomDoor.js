import React from 'react'   
import './BottomDoor.scss'

function BottomDoor(props){

    function goUp(){
        let splitY = props.y.split('y')
        let Y = parseInt(splitY[1])
        let splitX = props.x.split('x')
        let X = parseInt(splitX[1])
        let newY =`y${Y+1}`
        const newRoom = (`x${X}${newY}`)
        
        console.log(newRoom)
        const setRooms = props.changeState
        const open = props.rooms.open
        const doors = props.rooms.doors
        console.log(doors)
        setRooms({open:{...open,[newRoom]:true },doors:{...doors}})
        
        
        
        
        
                
        
            }


    return (<><button onClick={goUp} className={`bottomDoor ${props.doors}B`} ></button></>)
}

export default BottomDoor