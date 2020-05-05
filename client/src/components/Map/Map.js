import React from 'react'
import './Map.scss'
import MasterFloorplan from '../MasterFloorplan/MasterFloorplan'
import GroundFloor from '../../pages/GroundFloor/GroundFloor'
import CharacterSelect from '../CharacterSelect/CharacterSelect'
import EndTurn from '../EndTurn/EndTurn'

function Map(props) {
    console.log(props.rooms.players)
    console.log('Maps.js props below')
    console.log(props)
    let player
    let playersObj = props.rooms.players
    let keyArray
   function ready (userEmail){
    player= userEmail
    
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

    function startGame (props){
        // change the game state here so that once all the players have selleced theier charaacter 

        props.changeState({
                ...props.rooms,
                allChosen:true
        })
        props.changeState({
            ...props.rooms, players:{
                ...props.rooms.players,
                player1:{
                    ...props.rooms.player1,
                    turn:true
                }
            }
        })
        

    }
    allReady()
    let playerReady = playersObj[player].ready

    return (<>
    
    {playerReady ? <><div className='map'><MasterFloorplan save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms}></MasterFloorplan><EndTurn save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms} ></EndTurn><GroundFloor/></div></> :
    <CharacterSelect save={props.save} user={props.user} changeState={props.changeState} rooms={props.rooms} ></CharacterSelect> }
    
    
    
    </>
    )
}
export default Map