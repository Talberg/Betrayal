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
//add in more players until there is enough for 6 players 
// { playersObj.player1.email.toString() === props.user.user.email.toString() ? ready('player1') :
//     playersObj.player2.email.toString() === props.user.user.email.toString() ? ready('player2'):
//      playersObj.player3.email === props.user.user.email ? ready('player3') : 
//      playersObj.player4.email === props.user.user.email ? ready('player4') : nope ="nope"  }



     //make a function that will check if all the players are ready with a map through the keys 

     function allReady(){
         let keyArray = Object.keys(props.rooms.players)
         keyArray.map(player=>{
            let playerEmail = playersObj[player].email
            let userEmail= props.user.user.email 
            if(playerEmail=== userEmail){
                ready(player)
            }


           return(console.log(playersObj[player]))
         })
     }


     

function saveCharacter(event){

    let character = event.target.value

    // could map the CharacterArray and if the character === then set a variable to 
    event.preventDefault() 
    let newCharacterArray = [...props.rooms.CharacterArray]

    //make sure all the characters 
    switch(character){
        // eslint-disable-next-line no-lone-blocks
        
        case 'Character1': {
            
    newCharacterArray[0] = {
        Character1: {
            color:'use on letter',
            speed : 3,
            might:3,
            sanity:3,
            knowledge: 3,
            about:'small descriptions of the character will be here ',
            age:15,
            birthday: 'not real sure ',
            hobbies:['thinngs','more things'],
            fears:'spoops',
            chosen:true
        },
        
        
        
    }
    props.changeState({
        ...props.rooms,
      CharacterArray:newCharacterArray

       , players:{
            ...props.rooms.players,
            //if the players email is === the 
            [player]:{...props.rooms.players[player],
                        ready:true}
            
        }

    })
    console.log(newCharacterArray)
    break}
    // eslint-disable-next-line no-lone-blocks
    case 'Character2' :{
        newCharacterArray[1] = {
            Character2: {
                color:'use on letter',
                speed : 3,
                might:3,
                sanity:3,
                knowledge: 3,
                about:'small descriptions of the character will be here ',
                age:15,
                birthday: 'not real sure ',
                hobbies:['thinngs','more things'],
                fears:'spoops',
                chosen:true
            }
        }
        props.changeState({
            ...props.rooms,
          CharacterArray:newCharacterArray
    
           , players:{
                ...props.rooms.players,
                //if the players email is === the 
                [player]:{...props.rooms.players[player],
                            ready:true}
                
            }
    
        })
        console.log(newCharacterArray)
        break
    }
    case 'Character3' :{
        newCharacterArray[2] = {
            Character2: {
                color:'use on letter',
                speed : 3,
                might:3,
                sanity:3,
                knowledge: 3,
                about:'small descriptions of the character will be here ',
                age:15,
                birthday: 'not real sure ',
                hobbies:['thinngs','more things'],
                fears:'spoops',
                chosen:true
            }
        }
        props.changeState({
            ...props.rooms,
          CharacterArray:newCharacterArray
    
           , players:{
                ...props.rooms.players,
                //if the players email is === the 
                [player]:{...props.rooms.players[player],
                            ready:true}
                
            }
    
        })
        console.log(newCharacterArray)
        break
    }
    default: {break}
        
    }




  
    let characterObj ={ ...props.rooms.CharacterArray}
    console.log(newCharacterArray)
    console.log(characterObj)
    console.log({...props.rooms.CharacterArray[character]})
    let playerObj = {...props.rooms.players[player]}
    console.log()

    console.log(character)
    console.log(player)

   
   
    
    


    //save the character and set the ready on that player and the chosen on that character to true and false respectively 






    props.changeState({
        ...props.rooms,
     

      players:{
            ...props.rooms.players,
            //if the players email is === the 
            [player]:{...props.rooms.players[player],
                        ready:true}
            
        }

    })
}

allReady()


    // eslint-disable-next-line no-lone-blocks
    return(<>
    {
        props.rooms.CharacterArray.map(character => {

            console.log( character.speed)
            let characterName = Object.keys(character)[0]
            let characterObj = Object.values(character)[0]
            console.log(characterObj.chosen)

            if (!characterObj.chosen){
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
            }
          
        })
    }
   </> )
}

 export default CharacterCard
