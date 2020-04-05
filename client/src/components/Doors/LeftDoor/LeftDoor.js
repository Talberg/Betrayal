import React from 'react'
import './LeftDoor.scss'
import { get } from 'mongoose';

function LeftDoor(props) {
    console.log(props.location)
    console.log(props.rooms.players.player1.location)
    let player = props.rooms.players.player1.location === props.location

    console.log(player)
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function goLeft() {
        let splitX = props.x.split('x')
        let newX = `x${splitX[1] - 1}`
        const newRoom = (newX + props.y)
        let opened = props.rooms.GroundFloor[newRoom]

        console.log(`opened.open: ${opened.open} `)


        if (!opened.open) {
            console.log('click:')
            if (
                props.rooms.open[newRoom]
            ) {
                console.log('character needs to move to the Left when the button is pushed')

            }
            else { randomGroundFloor(props, newX) }


        }



        function randomGroundFloor(props) {


            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let max = Object.keys(props.rooms.GroundFloorRooms).length - 1
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let newRoomObject = index[Array[newRoomIndex]]
            console.log(` max :${max}`)
            console.log(`Array${Array}`)
            console.log(newRoomIndex)
            console.log(newRoomObject)











            setRooms({
                ...props.rooms, open: {
                    ...props.rooms.open, [newRoom]: true
                },
                players:{player1:{location:newRoom}},
                GroundFloor: {
                    ...GroundFloor, [newRoom]: {
                        ...roomStuff,
                        open: true,
                        doors: newRoomObject.doors,
                        name: newRoomObject.name,
                        entry: 'r'
                    }
                },
                doors: { ...doors }
            })

        }







    }
    return (

        <>

            {player ? <><button disabled={false} onClick={goLeft} className={`leftDoor L${props.doors}`} ></button> </> : <></>}
        </>


    )
}

export default LeftDoor