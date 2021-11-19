const calculateAgeIntoDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7
    console.log(ageInDogYears)

    return ageInDogYears
}

const dogAge = calculateAgeIntoDogYears(45)
console.log(dogAge)

//Best in Show Function
const bestInShow = (dogBreed) => {
    const doges = `My favorite dog breed is ${dogBreed}.`
    if ((dogBreed === `meow`) || (dogBreed === `Meow`)) {
        return `I like cats.`
    }   else 
            return doges  
}

const myFavorite = bestInShow("meow")
console.log(myFavorite)

//Addition Function
const add = (num1, num2, num3) => {
    const addString = `The sum of ${num1}, ${num2} and ${num3} is ${num1 + num2 + num3}.`
    return addString
}

const result1 = add(7, 8, 15)
console.log(result1)


//Self-Driving Cars Function
const selfDrivingCars = (direction, mph) => {
    const movement = `The car is moving ${direction} at ${mph} mph.`
    return movement
}

const result2 = selfDrivingCars("forwards", 45)
console.log(result2)

//Evens or Odds Function
const evenOrOdd = (num1) => {
    if (num1 % 2 == 0) {
        return `The number ${num1} is even.`
    }  else 
            return `The number ${num1} is odd.` 
}

console.log(evenOrOdd(876))

//Double Functions Function
const function1 = () => {

}

const function2 = () => {

}