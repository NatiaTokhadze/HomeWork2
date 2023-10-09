// task1
let users = [{ name: 'Temo', age: 25 }, { name: 'Lasha', age: 21 }, { name: 'Ana', age: 28 }]
function getMinAge(users) {
    let age = users[0].age;
    for (i = 1; i < users.length; i++) {
        if (users[i].age < age) {
            age = users[i].age
        }
        return age
    }
}
let youngestuser = getMinAge(users);
console.log(youngestuser);


// Task2

const user =
{
    name: "Apple",
    lastname: "Michurini",

    parameters:
    {
        Height: 14,
        weight: 1
    },
    city: "Gori"
}

user.parameters.Height = 14

function getNewObject2(user) {
    const newObject = {
        ...user,
        parameters: {
            ...arguments.parameters
        },
    }
    return newObject
}

console.log(getNewObject2(user))

// test
function randomNumber() {
    return parseInt(Math.random() * 10) + 1
}

let result = randomNumber()
while (result !== 3) {
    result = randomNumber()
    console.log(result)
}




// task3
function play(a, b) {
    let resultOne = 0
    let resultTwo = 0
    let count = 0

    while (true) {
        count++

        resultOne = parseInt(Math.random() * 7 + 1)
        resultTwo = parseInt(Math.random() * 7 + 1)

        if (resultOne == 3 && resultTwo == 3) {
            // no winner, continue loop

        }
        else {
            if (resultOne == 3) {
                console.log("resultOne: " + resultOne + " count:" + count)
                return a;

            }
            if (resultTwo == 3) {
                console.log("resultTwo: " + resultTwo + " count:" + count)
                return b;

            }
        }
    }
}

let winner = play("gio", "luka")
console.log("The winner is: " + winner)
