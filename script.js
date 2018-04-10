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

/* INDIVIDUAL EXERCISE 6 */

PrintNumber([3,7,9,2,6],5)

function PrintNumber(arr,number){
    var newArr = []
    for (let n of arr){
        if (n < number){
            newArr.push(n)
            }
    }
    alert(newArr)

}

