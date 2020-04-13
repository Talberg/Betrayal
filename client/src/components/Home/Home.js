import React from 'react'
import './Home.scss'
import AddFriend from '../AddFriend/AddFriend'

function Home(props){
    console.log(props)
return(<>{props.user.loggedIn ? <div className='home'>
<p>HELLO</p>
<AddFriend user={props.user} ></AddFriend>
</div> :<div className='home'><p>Goodbye</p></div> }</>)
}
export default Home