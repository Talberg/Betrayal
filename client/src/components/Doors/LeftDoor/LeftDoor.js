import React from 'react'
import './LeftDoor.scss'
import { get } from 'mongoose';

function LeftDoor(props) {
    console.log(props.x)
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function goLeft() {
        let splitX = props.x.split('x')
        let newX = `x${splitX[1] - 1}`
        const newRoom = (newX + props.y)
        let opened = props.rooms.GroundFloor[newRoom]
        

        console.log(opened.open)

        if (!opened.open){
            randomGroundFloor(props, newX)
        }



        function randomGroundFloor(props) {

           
            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let max = Object.keys(props.rooms.GroundFloorRooms).length
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let newRoomObject = index[Array[newRoomIndex]]
            console.log(newRoomObject)











            setRooms({
                ...props.rooms, GroundFloor: {
                    ...GroundFloor, [newRoom]: {
                        ...roomStuff,
                        open: true,
                        doors: newRoomObject.doors,
                        name: newRoomObject.name,
                        entry:'r'
                    }
                }, doors: { ...doors }
            })

        }







    }
    return (<><button onClick={goLeft} className={`leftDoor L${props.doors}`} ></button></>)
}

export default LeftDoor