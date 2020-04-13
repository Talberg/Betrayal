import React,{useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import Axios from 'axios'
import API from '../../utils/API'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


function FriendRequest (props){
  
const [user, setState]= useState({
    email:'',
    from:props.user.user,
})

 const handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        setState({...user,
          [name]: value
        });
      };


function sendRequest(props){
    
}

    return(
        <Popup trigger={<button> Add Friend</button>} position="right center">
       <form>
      <input name='email' value={user.email} onChange={handleInputChange} type='text' placeholder="Email"></input><a onClick={()=>API.sendRequestEmail(user)}> SEND </a>
</form>
      </Popup>
    )
}
export default FriendRequest