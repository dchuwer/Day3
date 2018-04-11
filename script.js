/* Partner Exercise 2 

ConvertWeight(35)

function ConvertWeight(weight) {
    
    pound = weight * 2.20462
    console.log ("The weight in pounds is :" + pound )

}

*/


/* PARTNER EXERCISE 3 

ConvertWeight(35,"poun")

function ConvertWeight(weight,unit) {
    if (unit != "kilo" && unit != "pounds"){
        console.log("Invalid Unit")
        return
    }
    else{
    if (unit === "kilo")
       newWeight = weight * 2.20462
    else
       newWeight = weight / 2.20462

    console.log ("The weight in :"+ unit + " is :" +newWeight  )

    }



}

*/

/* INDIVIDUAL EXERCISE 1
var age = calcAge(2017, 1989)

function calcAge(laterYear, earlierYear) {
    return laterYear-earlierYear;
    
}

*/

/* INDIVIDUAL EXERCISE 2 
var age = calcAge(1989)

function calcAge(birthYear) {
    var d = new Date();
    var year = d.getFullYear();
    var probYear1 = year-birthYear+3;
    var probYear2 = year-birthYear+4;
    
    alert("May be your age is : " + probYear1 + " or " + probYear2)
    
}
*/

/* INDIVIDUAL EXERCISE 3 

prime(7)

function prime(number){
    var numberIsPrime = true;
    for (var i = 2 ; i < number; i++){
        if (number%i == 0){
            numberIsPrime = false
            return numberIsPrime
        }
    }
    return numberIsPrime
  
}

*/

/* INDIVIDUAL EXERCISE 4 

Average([2,8,4,6])
function Average(arrNumber){
    var sumArr = 0
    for (let numb of arrNumber){
        sumArr +=numb

    }
    var averageNumber = sumArr/arrNumber.length;

    alert('The Average is :' + averageNumber)
}

*/

/* INDIVIDUAL EXERCISE 5 

CompareNumber([3,7,9,2,6],10)

function CompareNumber(arr,number){
    var inside = false
    for (let n of arr){
        if (n === number){
            inside = true
            return inside
        }
    }
    return inside

}

*/

/* INDIVIDUAL EXERCISE 6 

PrintNumber([3,7,9,2,6],5)

function PrintNumber(arr,number){
   
    var newArr = []
    for (let n of arr){
        if (n < number){
            newArr.push(n)
            }
    }
    return arr.filter()
    alert(newArr)

}


var arr = [3,7,9,2,6]
var numb = 5

var lessArr = (arr,numb) => { arr.filter(check) }

function check(n){
 return numb < arr

}

*/

/* INDIVIDUAL EXERCISE 1 */
/*
var reservations = {
    'Bob': { claimed: false },
    'Ted': { claimed: true }
  }
  
  var name2 = ""
  var name = prompt('Please enter the name for your reservation');
  name = changeNameFirstUpper(name)
  
  function changeNameFirstUpper(string) 
{
    string = string.toLowerCase()

    return string.charAt(0).toUpperCase() + string.slice(1,string.length)
}

  
  
  
  var claimReservation = function () {
    if (reservations[name])
       console.log("have a reservation")
    else {
        
        reservations[name]= {claimed:true}
        alert("New Reservation to: " + name)
        }
      

    console.log(reservations)

  
  }
  
  claimReservation();
    
*/



/* Partner Exercise 1 
var person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        hungry = false;
        alert('Im no longer hungry!');
      }
    }
  }
  
  person.feed();
  */
 /* Partner Exercise 2

  var pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  var garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);

  */

  /* Partner Exercise 3
 var pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  var airplane = {
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    },
    fuel: 0

  };
  
 
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Can it fly now? ' + airplane.fly());

  */

  /* Partner Exercise 4
 var tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },
    stealCoins: function (number) {
        this.coinCount -= number
    }
  };
  
  tipJar.tip();
  console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);

  */

  /* Partner Exercise 5

  var revealSecret = function () {
    return this.secret;
  };
  
  var shoutIt = function (person, func) {
    person.revealItAll = func;
    var result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  var avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  var narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);

  */

  /* Partner Exercise 5 */

/*  Is not the same as described in the slide .. print all Object
  var obj = {
    x: 9,
    consoleLogThis: function () {
      console.log(this)
    }
  }
  
  obj.consoleLogThis();

  */
/* Exercise 1 */

 var coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: { price: 10, beansRequirement: 3},
      americano: { price: 5, beansRequirement: 5},
      doubleShot: { price: 15, beansRequirement: 7},
      frenchPress: { price: 12, beansRequirement: 6},
    },

    buyDrink: function(typeCoffe) {
      this.money += this.drinkRequirements[typeCoffe]["price"]
      /* this.beans -= this.drinkRequirements[typeCoffe]["beansRequirement"] */
      this.makeDrink(typeCoffe)

      }
    ,



    makeDrink: function (drinkType) {
      // TODO: Finish this method
      var listDrink = Object.keys(this.drinkRequirements);
      var existDrink = listDrink.indexOf(drinkType);
      /*
      if (existDrink >= 0){
         this.beans -=  this.drinkRequirements[drinkType]
         if (this.beans > 0)
            alert("Doing the drink: " + drinkType + " Now you have: " + this.beans + " beans")
         else
         {
             alert("You dont have enough beans !")
             this.beans +=  this.drinkRequirements[drinkType]
         }
       
      }
      else
         alert("Drink : " + drinkType + " not exist in our list")
*/

        existDrink >= 0 ? (
            this.beans -=  this.drinkRequirements[drinkType]["beansRequirement"],
            this.beans > 0 ?
               alert("Doing the drink: " + drinkType + " Now you have: " + this.beans + " beans")
            :
            (
                alert("You dont have enough beans !"),
                this.beans +=  this.drinkRequirements[drinkType]["beansRequirement"]
            )            
        )
        :
            alert("Drink : " + drinkType + " not exist in our list")
    
    },

    money: 200,

    buySupplies: function () {
           var beansValue = 30
           var qtyBeans = 100
           if (this.money > beansValue) {
              this.beans += qtyBeans
              this.money -= beansValue
           }
           else
           alert("You dont have enough money to buy beans")

    }
 }


 coffeeShop.buyDrink("americano")
/*

  coffeeShop.buySupplies()
  
  coffeeShop.makeDrink("latte");
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered");
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress");
  */