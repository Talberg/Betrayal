import React from 'react'
import './RightDoor.scss'

function RightDoor(props) {
    let player = props.rooms.players.player1.location === props.location

    function goRight() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
       

        let splitX = props.x.split('x')
        console.log(splitX)
        let X = parseInt(splitX[1])
        let newX = `x${X + 1}`
        console.log(newX)
        const newRoom = (newX + props.y)

        console.log(newRoom)
        const setRooms = props.changeState
        const open = props.rooms.open
        const doors = props.rooms.doors
        const GroundFloor = props.rooms.GroundFloor
        const roomStuff = GroundFloor[newRoom]
        console.log(doors)
        let opened = props.rooms.GroundFloor[newRoom]


        if (!opened.open){
            console.log('click:')
            randomGroundFloor(props, newX)
        }



        function randomGroundFloor(props) {

            let rArray = ['rl', 'rb', 'tr']
            let doorString = rArray[getRandomInt(3)]

           
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
    return (<>{player ? <><button disabled={false} onClick={goRight} className={`rightDoor R${props.doors}`} ></button> </> : <></>}</>)
}

export default RightDoor