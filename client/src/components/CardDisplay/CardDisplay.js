import React from 'react'
import './CardDisplay.scss'
import API from '../../utils/API'

function CardDisplay(props){
    let currentCard = props.rooms.currentCard
    let closedCard = {...props.rooms.currentCard , display:'hidden'}
    function closeCard (){
        //map through all the players and check if the email is the same 
        let playerKeys =Object.keys(props.rooms.players)

        // player trait - or + player
        // do a currentCard.action.map()
        currentCard.action.map(action =>{
            console.log(action)
            if (action === 'item'){
                console.log('made it to the item')
            }
            
          
        }

        )
        

        


        console.log(props.user.user.email)
        playerKeys.map( player=>{
            if (props.user.user.email === props.rooms.players[player].email) {
                console.log(true)
                let playerObj = props.rooms.players[player]
                 //if there is a function on the card then it should run here and then 
                let itemFunction = currentCard.action
                console.log(itemFunction)
                let newItemArray = props.rooms.players[player].item
                newItemArray.push(currentCard)
                console.log(newItemArray)
                // here is where the item will be put into the players array 
                props.changeState(
                    {
                        ...props.rooms,
                        currentCard :closedCard,
                        players: {...props.rooms.players , 
                            [player] : {...props.rooms.players[player],  item:newItemArray   } }

                    }
                )
            }
        }

             
        )
        
        props.changeState(
            {...props.rooms,
            currentCard :closedCard,}
        )
    }
    console.log(currentCard)
    return(<div className={`cardDisplay ${currentCard.display}`} >
        <div className='cardType'>
            <h2> {currentCard.type} </h2>
        </div>
        <hr></hr>
        <div className='cardTitle'>
            <h2> {currentCard.title} </h2>
        </div>
        <div className='cardFlavorText'>
<p>{currentCard.flavorText}</p>
        </div>
        <div className='cardDescription'>
<p>{currentCard.description}</p>
        </div>
        <div className='rollButton'> 
        <button>Roll</button>
        </div>
        <div className='acceptButton'>
            <button onClick={closeCard}>ACCEPT</button>
        </div>
    </div>)
}



export default CardDisplay