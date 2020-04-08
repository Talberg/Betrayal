import React from 'react'   
import './TopDoor.scss'

function TopDoor(props){

    let player = props.rooms.players.player1.location === props.location
    console.log(player)
    function goUp(){
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let splitY = props.y.split('y')
        let Y = parseInt(splitY[1])
        let splitX = props.x.split('x')
        let X = parseInt(splitX[1])
        let newY =`y${Y-1}`
        const newRoom = (`x${X}${newY}`)
        console.log(props)
        let opened = props.rooms.GroundFloor[newRoom]
        
        console.log(newRoom)
        const setRooms = props.changeState

        const GroundFloor = props.rooms.GroundFloor
        const roomStuff = GroundFloor[newRoom]
        console.log(opened)
        
if (!opened.open){

    console.log('click:')
    randomGroundFloor(props)
}


        function randomGroundFloor(props) {


            let rArray = ['rl', 'rb', 'tr']
            let doorString = rArray[getRandomInt(3)]
           
            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let max = Object.keys(props.rooms.GroundFloorRooms).length-1
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let newRoomObject = index[Array[newRoomIndex]]
            console.log(` max :${max}`)
            console.log(`Array${Array}`)
            console.log(newRoomIndex)
            console.log(GroundFloor)
            console.log(newRoomObject)
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


    return (<> {player ? <><button disabled={false} onClick={goUp} className={`topDoor T${props.doors}`} ></button> </> : <></>}</>)
}

export default TopDoor