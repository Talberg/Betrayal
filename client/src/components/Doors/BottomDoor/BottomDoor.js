import React from 'react'   
import './BottomDoor.scss'

function BottomDoor(props){
 let player = props.rooms.players.player1.location === props.location
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
            let newRoomDoorNum= newRoomObject.doors
            if (newRoomDoorNum=== 1){

            }
            else if(newRoomDoorNum=== 2){

            }
            else if(newRoomDoorNum=== 3){

            }
            else if(newRoomDoorNum=== 4){

            }
           
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
                        numDoors: newRoomObject.doors,
                        doors: doorString,
                        name: newRoomObject.name,
                        entry: 't'

                    }
                },
                doors: { ...doors, [newRoom]: [doorString] }
            })

        }







        
        
        
                
        
            }


    return (<>
    {player ? <><button disabled={false} onClick={goDown} className={`bottomDoor B${props.doors}`} ></button> </> : <></>}
    </>)
}

export default BottomDoor