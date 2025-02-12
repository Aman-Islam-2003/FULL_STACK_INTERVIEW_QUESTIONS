const obj = {
  name: "aman",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

obj.greet();

//promise
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("success"), 1000)
}).then((result)=>console.log(result))