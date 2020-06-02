import axios from "axios";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    console.log(signupInfo)
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  // api that gets a random Chuck Norris Joke
  ChuckNorris: function() {
    return axios.get("https://api.icndb.com/jokes/random");
  },
  //sends request from home page by updating the user that is  passed through then up date the request with the senders user data, if yes then the user data is addeec to the friends list 
  sendRequestEmail : function(friendEmail){
    
    console.log(friendEmail)
    return axios.post("/api/users/request",friendEmail)
  },
  addByEmail : function(friendEmail){
    
    console.log(friendEmail)
    return axios.post("/api/users/addFriend",friendEmail)
  },
  removeFromRequest: function(data){
    console.log(data)
    return( axios.post("/api/users/removeFromRequest",data))
  },
  newGame : function(data){
    console.log(data)
    return(axios.post("/api/games/newGame", data))
  },
  loadGame(data){
    console.log(data)
    return(axios.get(`/api/games${data}`))
  },
  saveGame(id,data){
    console.log (data)
    let newID = id.split('/')[1]
    return(axios.post(`/api/games${id}`, data))
  },
  roll(multiplier){
    //roll x number of dice then return the 
    let die = [0,1,2,0,1,2]
    let rollArray = []
    let rollTotal= rollArray.reduce((a, b) => a + b, 0)
    

    function rolldie() {
      let index=  Math.floor(Math.random() * Math.floor(6));
      return die[index]
    }
    // for loop that will run as many times as the mulitplier

    for (let i=0; i>= multiplier; i++){
      console.log(i)
     let roll =  rolldie()
     rollArray.push(roll)
      
    }
    console.log(rollTotal)
  },
  loseKnowledge(mulitplier,rooms,player){
    

  }
  


};