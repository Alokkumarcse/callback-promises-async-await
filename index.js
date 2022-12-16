//storing our stocks
let stocks = {
   fruits: ['apple', 'banana', 'mango', 'graps', 'strawberry', 'cucumber'],
   liquid:['water', 'ice'],
   holder: ['cone', 'cup', 'sticks', 'glass'],
   toppings: ['chocolate', 'peanuts', 'sprinkals'],
}

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