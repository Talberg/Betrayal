import React from 'react'
import './Home.scss'
import AddFriend from '../AddFriend/AddFriend'
import RequestBox from '../RequestBox/RequestBox'

function Home(props){
    console.log(props)
return(<>{props.user.loggedIn ? <div className='home'>
<p>HEllO : {props.user.user.username}</p>
<AddFriend user={props.user} ></AddFriend>
<RequestBox user={props.user.user}></RequestBox>

</div> :<div className='home'><p>Add in a link to the sign up page here</p></div> }</>)
}
export default Home