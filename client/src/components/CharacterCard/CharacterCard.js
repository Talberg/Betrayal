import React from 'react'
import './CharacterCard.scss'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

function CharacterCard(props) {
    let nope
    let player
 let playersObj = props.rooms.players
function ready (userEmail){
 player= userEmail
 console.log(player)
    }

{ playersObj.player1.email.toString() === props.user.user.email.toString() ? ready('player1') :
    playersObj.player2.email.toString() === props.user.user.email.toString() ? ready('player2'):
     playersObj.player3.email === props.user.user.email ? ready('player3') : 
     playersObj.player4.email === props.user.user.email ? ready('player4') : nope ="nope"  }


     

function saveCharacter(event){
    event.preventDefault() 
    let character = event.target.value
    let characterObj ={ ...props.rooms.CharacterArray}
    console.log(characterObj[character])
    console.log(characterObj)
    console.log({...props.rooms.CharacterArray[character]})
    let playerObj = {...props.rooms.players[player]}
    console.log()

    console.log(character)
    console.log(player)

   
   
    
    


    //save the character and set the ready on that player and the chosen on that character to true and false respectively 






    props.changeState({
        ...props.rooms,
        CharacterArray:{...props.rooms.CharacterArray, 
                [character]:{...props.rooms.CharacterArray[character], chosen:true}
                        },

        players:{
            ...props.rooms.players,
            //if the players email is === the 
            [player]:{...props.rooms.players[player],
                        ready:true}
            
        }

    })
}




    // eslint-disable-next-line no-lone-blocks
    return(<>
    {
        props.rooms.CharacterArray.map(character => {
            console.log( character.speed)
            let characterName = Object.keys(character)[0]
            let characterObj = Object.values(character)[0]
            console.log(characterObj)
            return (
<>  <br></br>
                    <hr></hr>
                <div>
                   
                   
                    <Card className='card'>

                        <CardBody className="characterCard" >
                            <CardTitle><h3>{characterName}</h3></CardTitle>
                            <hr></hr>
                            <CardText><h5>:{characterObj.about}</h5></CardText>

                            <hr></hr>
                            <h3>Stats</h3>
                            <hr></hr>
                            <CardText>Speed:{characterObj.speed}</CardText>
                            <CardText>Might:{characterObj.might}</CardText>
                            <CardText>Knowledge:{characterObj.knowledge}</CardText>
                            <Button value={characterName} onClick={saveCharacter}>Select This Character</Button>
                        </CardBody>
                    </Card>
                </div>


                </>
            )
        })
    }
   </> )
}

 export default CharacterCard
