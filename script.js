
let saveEl = document.getElementById("save-el")



let countEl = document.getElementById("count-El")

console.log(saveEl)



let count = 0

function increment(){
let countstr = count + " - "

saveEl.innerText += countstr

    count = count+1 
    countEl.innerText = count
    //console.log(count)
}


function save(){
    console.log("count")
    countEl.textContent = 0
    count = 0

}
save() 
