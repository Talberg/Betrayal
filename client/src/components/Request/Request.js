import React from 'react'   
import './Request.scss'
import API from '../../utils/API'


function Request(props){

//need to update friend list 
function AddFriend(props){
    
}



return( <div className={` request`} ><span className='friendRequest' >{props.username}</span>
       <button onClick={()=>API.addByEmail({myEmail:props.user.email,friendEmail:props.email})}   className='button'>ADD</button>
   </div>
   ) }
export default Request