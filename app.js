 for (var i = 1 ;i <=10 ; i++){
     console.log(i)
 }

 var cities = ["karachi", "lahore", "islamabad", "Hyderabad", "quetta"];
 var userInput = prompt("Enter city name");
 var isFound = false;
 for (var i = 0; i < cities.length; i++) {
     // console.log(cities[i])
     if (userInput === cities[i]) {
        console.log("city found " + userInput)
         isFound = true
         break;
     }
 }
 if (isFound === false) {
     console.log("Not Found")
 }
 console.log(cities[i])



 for (var i = 0; i <= 20; i++) {
     if (i % 2 == 0) {
         console.log('Even Number ', i)
     }
 }


 for (var i = 0; i <= 20; i++) {
     if (i % 2 !== 0) {
         console.log('Odd Number ', i)
     }
 }


 var weekdays = ['Mon', 'Tue', 'Wed', 'Thurs']
 for (var i = 0; i < weekdays.length; i++) {
     console.log(weekdays[i])
 }


 for (var i = 0; i < 10; i++) {
     console.log('Hello World')
  }
 for (var i = 1; i <= 10; i++) {
     console.log(i * i)
}


 var numbers = [10, 5, 30, 53, 32, 499, 354]

 var largestNumber = 0
 for (var i = 0; i < numbers.length; i++) {
     if (numbers[i] > largestNumber) {
         largestNumber = numbers[i]
     }
     console.log(largestNumber)
 }


 var numbers = [10, 5, 30, 53, 32, 499, 354]

 var smallestNumber = 0
 for (var i = 0; i < numbers.length; i++) {
     if (numbers[i] > smallestNumber) {
        smallestNumber = numbers[i]
     }
     console.log(smallestNumber)
 }

