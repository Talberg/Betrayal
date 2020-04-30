import React from 'react'
import './RightDoor.scss'

function RightDoor(props) {
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
    // function set2() { }
    // function set2() { }
    // function set2() { }
    { playersObj.player1.email.toString() === props.user.user.email.toString() ? set1() :
        playersObj.player2.email.toString() === props.user.user.email.toString() ? set2() :
         playersObj.player3.email === props.user.user.email ? set3() : 
         playersObj.player4.email === props.user.user.email ? set4() : userLocation="nope"  }

 

   let player = props.location.toString() === userLocation.toString()

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
        else{
            moveRight(props)
        }

        function moveRight (props){

         
            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let max = Object.keys(props.rooms.GroundFloorRooms).length - 1
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let newRoomObject = index[Array[newRoomIndex]]
            //here
            let newPlayerLocation = { location: newRoom}
            console.log(props.rooms.players)
            // let key = userKey.email.split('.')[0]
            // console.log(key)
            setRooms({
                ...props.rooms, 

                //HERE is the PLAce that you need to make this more dynamic in usising the user!!!!!!
                players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
                // [...props.rooms.players],
            
              
            })


        }



        function randomGroundFloor(props) {

            let rArray2 = ['rl', 'bl', 'tl']
            let rArray3 = ['trl', 'tbl', 'rbl']
            let doorString2 = rArray2[getRandomInt(3)]
            let doorString3 = rArray3[getRandomInt(3)]

           
            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let max = Array.length-1
            let newRoomIndex = getRandomInt(max)
            let chosenRoom= Array[newRoomIndex].toString()
            let newRoomObject = index[Array[newRoomIndex]]
            let newRoomsArray = Array.filter(data=> data !== chosenRoom )
            console.log(newRoomObject)
            
 if(newRoomObject.doors === 1) {
    let newDoors = 'l'
   
    setRooms({
     ...props.rooms,
     GroundFloorRoomsArray:newRoomsArray,
      open: {
         ...props.rooms.open, [newRoom]: true
     },
     //here
     players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
     GroundFloor: {
         ...GroundFloor, [newRoom]: {
             ...roomStuff,
             open: true,
             numDoors: newRoomObject.doors,
             doors: newDoors,
             name: newRoomObject.name,
             entry: 'l'

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
     // here 
     players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
     GroundFloor: {
         ...GroundFloor, [newRoom]: {
             ...roomStuff,
             open: true,
             numDoors: newRoomObject.doors,
             doors: doorString2,
             name: newRoomObject.name,
             entry: 'l'

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



     //here also
     players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
     GroundFloor: {
         ...GroundFloor, [newRoom]: {
             ...roomStuff,
             open: true,
             numDoors: newRoomObject.doors,
             doors: doorString3,
             name: newRoomObject.name,
             entry: 'l'

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
     // here too 
     players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
     GroundFloor: {
         ...GroundFloor, [newRoom]: {
             ...roomStuff,
             open: true,
             numDoors: 4,
             doors: 'trbl',
             name: newRoomObject.name,
             entry: 'l'

         }
     },
     doors: { ...doors, [newRoom]: [doorString3] }
 })

}

            

        }






    }
    return (<>{player ? <><button disabled={false} onClick={goRight} className={`rightDoor R${props.doors}`} ></button> </> : <></>}</>)
}

export default RightDoor