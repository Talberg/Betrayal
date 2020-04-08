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
            setRooms({
                ...props.rooms, 
                players:{player1:{location:newRoom}},
            
              
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
            let max = Object.keys(props.rooms.GroundFloorRooms).length
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let newRoomObject = index[Array[newRoomIndex]]
            console.log(newRoomObject)
            
 if(newRoomObject.doors === 1) {
    let newDoors = 'l'
   
    setRooms({
     ...props.rooms, open: {
         ...props.rooms.open, [newRoom]: true
     },
     players:{player1:{location:newRoom}},
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
     ...props.rooms, open: {
         ...props.rooms.open, [newRoom]: true
     },
     players:{player1:{location:newRoom}},
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
     ...props.rooms, open: {
         ...props.rooms.open, [newRoom]: true
     },
     players:{player1:{location:newRoom}},
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
     ...props.rooms, open: {
         ...props.rooms.open, [newRoom]: true
     },
     players:{player1:{location:newRoom}},
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