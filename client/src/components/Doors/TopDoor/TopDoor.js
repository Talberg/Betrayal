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

  
    randomGroundFloor(props)
}
else{
moveUp(props)
    
}
function moveUp (props){
         
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


            let rArray2 = ['bl', 'tb', 'rb']
            let rArray3 = ['rbl', 'tbl', 'trb']
            let doorString2 = rArray2[getRandomInt(3)]
            let doorString3= rArray3[getRandomInt(3)]
           
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


            if(newRoomObject.doors === 1) {
                let newDoors = 'b'
               
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
                         entry: 'b',
                         card:newRoomObject.card
            
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
                         entry: 'b',
                         card:newRoomObject.card
            
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
                         entry: 'b',
                         card:newRoomObject.card
            
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
                         entry: 'b',
                         card:newRoomObject.card
            
                     }
                 },
                 doors: { ...doors, [newRoom]: [doorString3] }
             })
            
            }









         

        }
        
        
        
        
        
                
        
            }


    return (<> {player ? <><button disabled={false} onClick={goUp} className={`topDoor T${props.doors}`} ></button> </> : <></>}</>)
}

export default TopDoor