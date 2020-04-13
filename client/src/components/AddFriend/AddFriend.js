import React from 'react'
import Popup from 'reactjs-popup'


function FriendRequest (props){
    return(
        <Popup trigger={<button> Add Friend</button>} position="right center">
       <form>
      <input  type='text' placeholder="Email"></input><button onClick='hello'> SEND </button>
</form>
      </Popup>
    )
}
export default FriendRequest