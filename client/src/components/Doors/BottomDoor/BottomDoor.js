import React from 'react'   
import './BottomDoor.scss'

function BottomDoor(props){
    //need this to be more dynamic. should 
 let player = props.rooms.players.player1.location === props.location
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
                players:{player1:{location:newRoom}},
            
              
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
            let max = Object.keys(props.rooms.GroundFloorRooms).length - 1
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let newRoomObject = index[Array[newRoomIndex]]
            let newRoomDoorNum= newRoomObject.doors
        
           
            console.log(` max :${max}`)
            console.log(`Array${Array}`)
            console.log(newRoomIndex)
            console.log(newRoomObject)



            
 if(newRoomObject.doors === 1) {
    let newDoors = 't'
   
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
             entry: 't'
             ,card: newRoomObject.card

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
             entry: 't'
             ,card: newRoomObject.card,
             

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
             entry: 't'
             ,card: newRoomObject.card

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