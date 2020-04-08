import React from 'react'
import './LeftDoor.scss'
import { get } from 'mongoose';

function LeftDoor(props) {
    console.log(props.location)
    console.log(props.rooms.players.player1.location)
    //variable that will let the doors know if the player is in the room
    let player = props.rooms.players.player1.location === props.location

    console.log(player)
    //function that will get a random number that can be use as the index to grab a room by "random"
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    //function that will make the player move left and is called every time the left button is clicked
    function goLeft() {

        let splitX = props.x.split('x')
        let newX = `x${splitX[1] - 1}`
        //new coor of the room that the player is moving to 
        const newRoom = (newX + props.y)
        //accesses the new rooms values and puts them in the open variable 
        let opened = props.rooms.GroundFloor[newRoom]

        console.log(`opened.open: ${opened.open} `)

        //if the new room is not open then the get new 
        if (!opened.open) {
            console.log('click:')
            if (
                props.rooms.open[newRoom]
            ) {
                console.log('character needs to move to the Left when the button is pushed')

            }
            else { randomGroundFloor(props) }


        }
        else{
            console.log('move the player left')
        }



        function randomGroundFloor(props) {

            let rArray = ['rl', 'rb', 'tr']
            let doorString = rArray[getRandomInt(3)]

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
                doors: { ...doors, [newRoom]: [doorString] }
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