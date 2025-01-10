const user = {
    username: "sam",
    age: 22,
    welcomeMessage: function(){
      console.log(`${this.username}, Welcome to the website`)
      console.log(this)// points to  the current context
    }
}

user.welcomeMessage()
user.username = "david"
user.welcomeMessage()

console.log(this)// logs {} but in browser logs window object

//this of normal ftn points to the immediate parent
//this keyword value in arrow ftn comes from its parent ftn
