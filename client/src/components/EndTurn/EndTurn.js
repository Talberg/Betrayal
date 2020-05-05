import React from 'react'
import './EndTurn.scss'

function EndTurn (props){
    let playerKey
    let playersObj = props.rooms.players
    let keyArray
    let nextPlayer 
    
    
   function ready (userEmail){
    playerKey= userEmail
    
    
   
       }
       
    function allReady(){
          keyArray = Object.keys(props.rooms.players)
          console.log(keyArray[playerKey])
       let i = 1
        keyArray.map(player=>{
            i++

           let playerEmail = playersObj[player].email
           let userEmail= props.user.user.email 
           if(playerEmail=== userEmail){
               ready(player)
               nextPlayer = `player${i}`

           }

           


          return(console.log(playersObj[player]))
        })
    }
    allReady()
    console.log(keyArray)
    console.log(keyArray)
    console.log(nextPlayer)


    //this is where the next players turn value must turn to true and my turn value goes to false 
    function endTurn(){
        //validation that checks to see if there is something at the next spot on the obj 

        if ( props.rooms.players[nextPlayer]){
              props.changeState(
            {
                ...props.rooms,
                players:{...props.rooms.players,
                  [playerKey]: {...props.rooms.players[playerKey], 
                turn:false},
            [nextPlayer]:{...props.rooms.players[nextPlayer],
            turn:true}  }
            }
        )
        }
        else{
            props.changeState(
                {
                    ...props.rooms,
                    players:{...props.rooms.players,
                      [playerKey]: {...props.rooms.players[playerKey], 
                    turn:false},
                player1:{...props.rooms.players.player1,
                turn:true}  }
                }
            )

        }

        //
      
    }
    

    return(<button onClick={endTurn} className='endTurn'>ENDTURN</button>)

}

export default EndTurn