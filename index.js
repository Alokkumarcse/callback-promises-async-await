//storing our stocks
let stocks = {
   fruits: ['apple', 'banana', 'mango', 'graps', 'strawberry', 'cucumber'],
   liquid:['water', 'ice'],
   holder: ['cone', 'cup', 'sticks', 'glass'],
   toppings: ['chocolate', 'peanuts', 'sprinkals'],
}

/****************************************************************
//  order method 
let order = (fruitName, callProduction) => {
   console.log("order placed, Please call for production");
   // select fruits
   setTimeout(() => {
      console.log(`${stocks.fruits[fruitName]} has selected.` )
   }, 2000);
   //call for production
   callProduction();
}

// this is callback hell...to save us from callbacks, 
//Promises come to picture...

//  production method 
let production = () => {
   console.log("order received");

   setTimeout(() => {
      console.log("production started...")
      // fruits chopped
      setTimeout(() => {
         console.log("the fruit has been chopped.");
         //adding ice and water 
         setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`)
            // use machine
            setTimeout(() => {
               console.log("machine is started...")
               //choose container
               setTimeout(() => {
                  console.log(`${stocks.holder[0]} has selected.`)
                  // ice-cream filled into container
                  setTimeout(() => {
                     console.log(`${stocks.toppings[0]}`)
                     //serve the ice cream
                     setTimeout(() => {
                        console.log("ice-cream has served...");

                     }, 2000);

                  }, 2000);

               }, 1000);

            }, 1000);

         }, 2000)

      }, 2000)

   }, 0000);
}

// call order() to start production
order(0, production); 
*****************************************************/


/************************************************
// solving using promise

let isShopOpen = true;

// order() invoke promise 
let order = (time, work) => {
   // creating promise
   return new Promise( (resolve, reject) => {
      if(isShopOpen){
         setTimeout(() => {
            resolve(work());
         }, time);
      }else{
         reject(console.log("our shope is closed!")); 
      }
   })
}

// invoke order() and get promise result so apply then(),catch() and finaly()
order(2000, () => console.log(`${stocks.fruits[1]}`))
.then(() => {
   return order(0000, () => console.log("production has started"));
})
.then(() => {
   return order(2000, () => console.log("fruits was chopped"));
})
.then(() => {
   return order(3000, () => console.log(`${stocks.liquid[0]}`));
})
.then(()=> {
   return order(2000, () => console.log("machine started"));
})
.then(() => {
   return order(1000, () => console.log(`${stocks.holder[1]}`));
})
.then(()=> {
   return order(2000, () => console.log("ice cream filled"));
})
.then(() => {
   return order(3000, () => console.log("ice-cream has served."));
})
.catch(() => {
   console.log("customer returned")
})
.finally(() => {
   console.log("day ended, shop is closed");
});

************************************************************/

/*************************************************** */


// // creating promise like this
// let isShopOpen = ture;

// let order = () => {
//    return new Promise((resolve, reject) => {
//       if(isShopOpen){
//          resolve();
//       }else{
//          reject();
//       }
//    })
// }
// order()
// .then()
// .then()
// .catch()
// .finally()



// //  using async/ await to solve 

// let isShopOpen = true;

// async function order () {
//    try{
//       await abc;
//    }
//    catch(error){
//       console.log("abc doesn't exit", error);
//    }
//    finally{
//       console.log("run every time no matter what...");
//    }
//  }

//  order()
//  .then(()=> {console.log("Hello")})
//  .then(()=> {console.log("javascript")})
//  .catch((err) => {console.log(err)})
//  .finally(()=> {console.log("finally")}); 

// let isShopOpen = true;

// let toppingChoice = () => {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          resolve(console.log("what do you like ?"));
//       }, 2000);
//    });
// };

// async function  kitchen() {
//    console.log("work1 done");
//    console.log("work2 done");
//    console.log("work3 done");
//    // next work is hold bcz of await 
//    await toppingChoice();
//    console.log("work4 done after await executed");
//    console.log("work5 done after await");
// }

// kitchen();
// console.log("work is not held bcz of await");
// console.log("work is happening");


let isShopOpen = false;

function time(ms) {
   return new Promise ((resolve, reject) =>{
      if(isShopOpen){
         setTimeout(resolve, ms);
      }else{
         reject(console.log("shop has closed"));
      }
   });
}

async function kitchen(){
   try{
      await time(2000);
      console.log(`${stocks.fruits[1]}`);

      await time(0000);
      console.log('start production');

      await time(3000);
      console.log('fruits chopped');

      await time(1000);
      console.log('filled in container');
   }
   catch(err){
      console.log(err);
   }
   finally{
      console.log('finally always run');
   }
}

kitchen();