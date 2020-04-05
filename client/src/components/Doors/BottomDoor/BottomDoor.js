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
        const GroundFloor = props.rooms.GroundFloor
        const roomStuff = GroundFloor[newRoom]

        console.log(doors)
        setRooms({GroundFloor:{...GroundFloor,[newRoom]:{...roomStuff,open:true} },doors:{...doors}})
        
        
        
        
        
                
        
            }


    return (<><button onClick={goUp} className={`bottomDoor B${props.doors}`} ></button></>)
}

export default BottomDoor