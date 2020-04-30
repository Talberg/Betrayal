import React from 'react'
import './LeftDoor.scss'
import { get } from 'mongoose';


function LeftDoor(props) {
    
    let playersObj = props.rooms.players
    //make the game read the loacation ove the user by matching the user to the player opject 
    let userLocation = ""
    let playerNum
    let playerStuff
    function set1() {
        userLocation = playersObj.player1.location
        playerNum = 'player1'
        playerStuff = playersObj.player1
    }
    function set2() {
        userLocation = playersObj.player2.location
        playerNum = 'player2'
        playerStuff = playersObj.player2
    }
    function set3() {
        userLocation = playersObj.player3.location
        playerNum = 'player3'
        playerStuff = playersObj.player3
    }
    function set4() { userLocation = playersObj.player4.location
         playerNum = 'player4' 
          playerStuff = playersObj.player4 }
    function set2() { }
    function set2() { }
    function set2() { }

    { playersObj.player1.email.toString() === props.user.user.email.toString() ? set1() :
        playersObj.player2.email.toString() === props.user.user.email.toString() ? set2() :
         playersObj.player3.email === props.user.user.email ? set3() : 
         playersObj.player4.email === props.user.user.email ? set4() : userLocation="nope"  }


   let player = props.location.toString() === userLocation.toString()

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
           randomGroundFloor(props)


        }
        else{
           
            moveLeft(props)
        }

        function moveLeft (props){
         
            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let max = Object.keys(props.rooms.GroundFloorRooms).length - 1
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let newRoomObject = index[Array[newRoomIndex]]
            setRooms({
                ...props.rooms, 
                players: {...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
            
              
            })


        }

        function randomGroundFloor(props) {

            let rArray2 = ['rl', 'rb', 'tr']
            let rArray3 = ['trl', 'trb', 'rbl']
            let doorString2 = rArray2[getRandomInt(3)]
            let doorString3 = rArray3[getRandomInt(3)]

            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let max = Array.length -1
            let newRoomIndex = getRandomInt(max)
            let chosenRoom= Array[newRoomIndex].toString()
            let newRoomObject = index[Array[newRoomIndex]]
            let newRoomsArray = Array.filter(data=> data !== chosenRoom )
            console.log(` max :${max}`)
            console.log(`Array${Array}`)
            console.log(newRoomIndex)
            console.log(newRoomObject)


            // setRooms({
            //     ...props.rooms,
            //     GroundFloorRoomsArray:newRoomsArray,
            //      open: {
            //         ...props.rooms.open, [newRoom]: true
            //     },
            //     players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
            //     GroundFloor: {
            //         ...GroundFloor, [newRoom]: {
            //             ...roomStuff,
            //             open: true,
            //             numDoors: 4,
            //             doors: 'trbl',
            //             name: newRoomObject.name,
            //             entry: 't'
           
            //         }
            //     },
            //     doors: { ...doors, [newRoom]: [doorString3] }
            // })

 if(newRoomObject.doors === 1) {
       let newDoors = 'r'
      
       setRooms({
        ...props.rooms,
        GroundFloorRoomsArray:newRoomsArray, open: {
            ...props.rooms.open, [newRoom]: true
        },
        players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
        GroundFloor: {
            ...GroundFloor, [newRoom]: {
                ...roomStuff,
                open: true,
                numDoors: newRoomObject.doors,
                doors: newDoors,
                name: newRoomObject.name,
                entry: 'r'

            }
        },
        doors: { ...doors, [newRoom]: [newDoors] }
    })
   }
   else if (newRoomObject.doors=== 2){
       
    setRooms({
        ...props.rooms,
        GroundFloorRoomsArray:newRoomsArray,
         open: {
            ...props.rooms.open, [newRoom]: true
        },
        players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
        GroundFloor: {
            ...GroundFloor, [newRoom]: {
                ...roomStuff,
                open: true,
                numDoors: newRoomObject.doors,
                doors: doorString2,
                name: newRoomObject.name,
                entry: 'r'

            }
        },
        doors: { ...doors, [newRoom]: [doorString2] }
    })
   }
   else if ( newRoomObject.doors===3){

    

    setRooms({
        ...props.rooms,
        GroundFloorRoomsArray:newRoomsArray,
         open: {
            ...props.rooms.open, [newRoom]: true
        },
        players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
        GroundFloor: {
            ...GroundFloor, [newRoom]: {
                ...roomStuff,
                open: true,
                numDoors: newRoomObject.doors,
                doors: doorString3,
                name: newRoomObject.name,
                entry: 'r'

            }
        },
        doors: { ...doors, [newRoom]: [doorString3] }
    })
   }
   else{
    setRooms({
        ...props.rooms, 
        GroundFloorRoomsArray:newRoomsArray,
         open: {
            ...props.rooms.open, [newRoom]: true
        },
        players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
        GroundFloor: {
            ...GroundFloor, [newRoom]: {
                ...roomStuff,
                open: true,
                numDoors: 4,
                doors: 'trbl',
                name: newRoomObject.name,
                entry: 'r'

            }
        },
        doors: { ...doors, [newRoom]: [doorString3] }
    })

   }










            // setRooms({
            //     ...props.rooms, open: {
            //         ...props.rooms.open, [newRoom]: true
            //     },
            //     players:{player1:{location:newRoom}},
            //     GroundFloor: {
            //         ...GroundFloor, [newRoom]: {
            //             ...roomStuff,
            //             open: true,
            //             numDoors: newRoomObject.doors,
            //             doors: doorString3,
            //             name: newRoomObject.name,
            //             entry: 'r'

            //         }
            //     },
            //     doors: { ...doors, [newRoom]: [doorString3] }
            // })

        }






    }
    return (

        <>

            {player ? <><button disabled={false} onClick={goLeft} className={`leftDoor L${props.doors}`} ></button> </> : <></>}
        </>


    )
}

export default LeftDoor