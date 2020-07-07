// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
function printKata(kataNumber, object) {

    const detailsElement = document.createElement('details')
    main.append(detailsElement)

    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)

    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// KATA1
const activeUser = users.filter(user => user.isActive === true)
printKata(1, activeUser)

//KATA2 
const onlyEmails = users.map(user => user.email)
printKata(2, onlyEmails)

//KATA3
const ovationCheck = users.some(user => user.company < "Ovation")
printKata(3, ovationCheck)

//KATA4
const over38 = users.find(user => user.age > 38)

printKata(4, over38)

//KATA5
const activeOver38 = () => {
    users.find(user => user.isActive === true)
    users.filter(user => user.age > 38)
}
printKata(5, activeOver38)

//KATA6
