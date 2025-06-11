const firstRow = prompt("Enter first row")
const secondRow = prompt("Enter second row")
const thirdRow = prompt("Enter third row")

if ((firstRow === "" || secondRow === "" || thirdRow === "")) {
    alert("Some of your row's are empty")
} else if ((firstRow === null || secondRow === null || thirdRow === null)) {
    alert("You cancel some of questions - See you next time:-)")

} else if (firstRow.trim() === "" || secondRow.trim() === "" || thirdRow.trim() === "") {
    alert("Some of your row's have only spaces")
} else {
    alert(`Your first row: ${firstRow}, Your second row: ${secondRow}, Your third row: ${thirdRow}`)
}
