import React from 'react'
import './GameCard.scss'
import EndTurn from '../EndTurn/EndTurn'
import PlayerCard from '../PlayerCard/PlayerCard'

function GameCard (props){
    let playersKeys = Object.keys(props.rooms.players)


    return(
        <><div className='gameCard'>
            {/* map through the players and display them here  */}
            {playersKeys.map(player => 
                 {
                    let playerObject = props.rooms.players[player]
                    let character = playerObject.character
                    console.log(character)

                    return(            <PlayerCard player={player}  character={character} ></PlayerCard>
                        )
                })}
            
            
            </div></>
    )
}
export default GameCard