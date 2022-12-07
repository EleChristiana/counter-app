 
 //document.getElementById("count-el").innerText = 5;
 //grab the count-el element, store it in countEl variable
 let countEl = document.getElementById(count-el)
 console.log(countEl)
 //Grab the save -el paragraph and store it in a countEl variable


 let saveEL= document.getElementById ("save-el")
 counsole.log (saveEL)
let count=0


function increment(){
    count = count + 1
    // set countEl's innerText to count
    countEl.innerText = count
}

function save(){
    //creat a variable that contains both the count and dash separator, i.e."12-"
    let countStr = count = + "-"
    //Render the variable in saveEl using innerText
    //saveEl.innerText += countStr; // This will totally removde the previous entries
    //saveEl.innerText += countStr; // This will be let use textContent which shows the
    // content of all element  

}