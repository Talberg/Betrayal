import React from 'react'
import './TopDoor.scss'

function TopDoor(props) {

    let playerKey
    let playersObj = props.rooms.players
    let keyArray
    
   function ready (userEmail){
    playerKey= userEmail
    
    console.log(player)
       }
       
    function allReady(){
          keyArray = Object.keys(props.rooms.players)
       
        keyArray.map(player=>{
           let playerEmail = playersObj[player].email
           let userEmail= props.user.user.email 
           if(playerEmail=== userEmail){
               ready(player)
       
           }


          return(console.log(playersObj[player]))
        })
    }
    allReady()





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
    function set4() {
        userLocation = playersObj.player4.location
        playerNum = 'player4'
        playerStuff = playersObj.player4
    }


    { playersObj.player1.email.toString() === props.user.user.email.toString() ? set1() :
         playersObj.player2.email.toString() === props.user.user.email.toString() ? set2() :
          playersObj.player3.email === props.user.user.email ? set3() : 
          playersObj.player4.email === props.user.user.email ? set4() : userLocation="nope"  }

    if (playersObj.player2) {


    }
    if (playersObj.player3) {


    }
    if (playersObj.player4) {


    }




    //     props.rooms.players.map(player=>{
    //         let Email= player
    //         console.log(Email)

    //        {Email.email===props.user.user.email ? userLocation=Email.location  : userLocation='no user here'  }
    //     //    {player.email===props.user.user.email ? }
    //    })
    let player = props.location.toString() === userLocation.toString()
    console.log(props.location)
    console.log(userLocation)
    console.log(player)
    function goUp() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let splitY = props.y.split('y')
        let Y = parseInt(splitY[1])
        let splitX = props.x.split('x')
        let X = parseInt(splitX[1])
        let newY = `y${Y - 1}`
        const newRoom = (`x${X}${newY}`)
        console.log(props)
        let opened = props.rooms.GroundFloor[newRoom]

        console.log(newRoom)
        const setRooms = props.changeState

        const GroundFloor = props.rooms.GroundFloor
        const roomStuff = GroundFloor[newRoom]
        console.log(opened)

        if (!opened.open) {


            randomGroundFloor(props)
        }
        else {
            moveUp(props)

        }
        function moveUp(props) {

            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            let newRoomIndex = getRandomInt(max)
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let max =Array.length-1
            let newRoomObject = index[Array[newRoomIndex]]
            setRooms({
                ...props.rooms,
                //here
                players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },


            })


        }


        function randomGroundFloor(props) {


            let rArray2 = ['bl', 'tb', 'rb']
            let rArray3 = ['rbl', 'tbl', 'trb']
            let doorString2 = rArray2[getRandomInt(3)]
            let doorString3 = rArray3[getRandomInt(3)]

            const setRooms = props.changeState
            const doors = props.rooms.doors
            const GroundFloor = props.rooms.GroundFloor
            const roomStuff = GroundFloor[newRoom]
            // let max = Object.keys(props.rooms.GroundFloorRooms).length - 1
            let index = props.rooms.GroundFloorRooms
            let Array = props.rooms.GroundFloorRoomsArray
            let max = Array.length
            let newRoomIndex = getRandomInt(max)
            let chosenRoom = Array[newRoomIndex].toString()
            let newRoomObject = index[Array[newRoomIndex]]
            let newRoomsArray = Array.filter(data => data !== chosenRoom)
            console.log(newRoomsArray)
            console.log(chosenRoom)
            console.log(`Array${Array}`)
            console.log(newRoomIndex)
            console.log(GroundFloor)
            console.log(newRoomObject)
            console.log(newRoomObject)


            if (newRoomObject.doors === 1) {
                let newDoors = 'b'

                setRooms({
                    ...props.rooms,
                    GroundFloorRoomsArray: newRoomsArray,
                    open: {
                        ...props.rooms.open, [newRoom]: true
                    },

                    //// HERE
                    players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
                    GroundFloor: {
                        ...GroundFloor, [newRoom]: {
                            ...roomStuff,
                            open: true,
                            numDoors: newRoomObject.doors,
                            doors: newDoors,
                            name: newRoomObject.name,
                            entry: 'b',
                            card: newRoomObject.card

                        }
                    },
                    doors: { ...doors, [newRoom]: [newDoors] }
                })
            }
            else if (newRoomObject.doors === 2) {

                setRooms({
                    ...props.rooms,
                    GroundFloorRoomsArray: newRoomsArray,
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
                            doors: doorString2,
                            name: newRoomObject.name,
                            entry: 'b',
                            card: newRoomObject.card

                        }
                    },
                    doors: { ...doors, [newRoom]: [doorString2] }
                })
            }
            else if (newRoomObject.doors === 3) {



                setRooms({
                    ...props.rooms,
                    GroundFloorRoomsArray: newRoomsArray,
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
                            doors: doorString3,
                            name: newRoomObject.name,
                            entry: 'b',
                            card: newRoomObject.card

                        }
                    },
                    doors: { ...doors, [newRoom]: [doorString3] }
                })
            }
            else {
                setRooms({
                    ...props.rooms,
                    GroundFloorRoomsArray: newRoomsArray,
                    open: {
                        ...props.rooms.open, [newRoom]: true
                    },
                    //here
                    players: { ...playersObj, [playerNum]: { ...playerStuff, location: newRoom } },
                    GroundFloor: {
                        ...GroundFloor, [newRoom]: {
                            ...roomStuff,
                            open: true,
                            numDoors: 4,
                            doors: 'trbl',
                            name: newRoomObject.name,
                            entry: 'b',
                            card: newRoomObject.card

                        }
                    },
                    doors: { ...doors, [newRoom]: [doorString3] }
                })

            }











        }







    }


    return (<> {player ? playersObj[playerKey].turn ?   <><button disabled={false} onClick={goUp} className={`topDoor T${props.doors}`} ></button> </> : <></ >: <></>}</>)
}

export default TopDoor