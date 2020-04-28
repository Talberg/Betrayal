import React from 'react'   
import './BottomDoor.scss'

function BottomDoor(props){
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
 let player2 = false
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function goDown(){
          
   

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
  let opened = props.rooms.GroundFloor[newRoom]
        console.log(doors)
   
        
        if (!opened.open) { randomGroundFloor(props)


        }
        else{
            moveDown(props)
        }
       
        function moveDown (props){
         
            const setRooms = props.changeState
            setRooms({
                ...props.rooms, 
                players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
            
              
            })


        }



        function randomGroundFloor(props) {

            let rArray2 = ['tl', 'tb', 'tr']
            let rArray3= ['trl', 'trb', 'tbl']
            let doorString2 = rArray2[getRandomInt(3)]
            let doorString3 = rArray3[getRandomInt(3)]

            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let max = Array.length
            let newRoomIndex = getRandomInt(max)
            let chosenRoom= Array[newRoomIndex].toString()
            let newRoomObject = index[Array[newRoomIndex]]
            let newRoomsArray = Array.filter(data=> data !== chosenRoom )
        
           
            console.log(` max :${max}`)
            console.log(`Array${Array}`)
            console.log(newRoomIndex)
            console.log(newRoomObject)



            
 if(newRoomObject.doors === 1) {
    let newDoors = 't'
   
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
             doors: newDoors,
             name: newRoomObject.name,
             entry: 't'
             ,card: newRoomObject.card

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
             entry: 't'
             ,card: newRoomObject.card,
             

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
             entry: 't'
             ,card: newRoomObject.card

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
             entry: 't'
             ,card: newRoomObject.card

         }
     },
     doors: { ...doors, [newRoom]: [doorString3] }
 })

}











        }







        
        
        
                
        
            }


    return (<>
    {player||player2 ? <><button disabled={false} onClick={goDown} className={`bottomDoor B${props.doors}`} ></button> </> : <></>}
    </>)
}

export default BottomDoor