//DOM Elements
const submit = document.getElementById("submit")
const submit2 = document.getElementById("submit2")
const percent = document.getElementById("percent")
const message = document.getElementById("message");
const translate = document.getElementById("google_translate_element")
const menu = document.getElementById("menu")
const loveGif = document.getElementById("love")
let dropUp = document.getElementById("dropup")
let instructButton = document.getElementById("dropup2")
let instructions = document.getElementById("instruct")

//Array to store Names
const newarr = []

//Styling
loveGif.style.display = "none"
instructions.style.display = "none"

//API key and API Host
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a814b05c93msh2cd39afebec73fap1d509cjsnb19622b7a4fa',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
};
//Event listeners
submit.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    const addComment = document.forms["comment-form"]
    event.preventDefault()
    var value = addComment.querySelector(`input[type="text"]`).value
    console.log(value)
    newarr.push(value)
    addComment.querySelector(`input[type="text"]`).value = ""

    //Second name form event listener
    submit2.addEventListener('click', function (event) {
        event.stopImmediatePropagation();
        const addComment = document.forms["comment-form2"]
        event.preventDefault()
        var text = addComment.querySelector(`input[type="text"]`).value
        console.log(text)
        newarr.push(text)
        addComment.querySelector(`input[type="text"]`).value = ""
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${text}&fname=${value}`, options)
            .then(response => response.json())
            .then(response => {
                percent.innerHTML = `Percentage Match: ${response.percentage}%`;
                message.innerHTML = `Compatibility Message: ${response.result}`
                if (response.percentage > 50) {
                    loveGif.style.display = "block"
                }
                else { loveGif.style.display = "none" }
            })
            .catch(err => console.error(err));
    })
})


//translate event listener
translate.addEventListener("click", first)
function first(e) {
    translate.style.color="pink"
    e.stopImmediatePropagation();
    translate.onclick = second;
}
function second(e) {
    e.stopImmediatePropagation();
    translate.onclick = first;
    translate.style.color="black"
   
}
//DropUp event listener
dropUp.addEventListener("click", () => {
    function outputNames() {
        for (let i = 0; i <= newarr.length - 1; i++) {
            console.log(newarr)
            let name = document.createElement("ul")
            let text = document.createElement("li")
            menu.appendChild(name)
            name.appendChild(text)
            text.innerText = newarr[i]
            text.style.borderRadius = "20px";
            text.style.height = "50px"
            text.style.backgroundColor = "pink"
            text.style.alignContent = "center"
        }
    }
    outputNames()
})

instructButton.addEventListener("click", last)
function last(e) {
    instructions.style.display = "block"
    e.stopImmediatePropagation();
    instructButton.onclick =
        setTimeout(() => {
            instructions.style.display = "none"
        }, 5000)
}