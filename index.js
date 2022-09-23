//Trianglify animation for background gradient
const submit = document.getElementById("submit")
const submit2 = document.getElementById("submit2")
const percent = document.getElementById("percent")
const message = document.getElementById("message");
const translate = document.getElementById("google_translate_element")
const newarr = []
const menu = document.getElementById("menu")
const loveGif = document.getElementById("love")
loveGif.style.display = "none"

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a814b05c93msh2cd39afebec73fap1d509cjsnb19622b7a4fa',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
};
submit.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    const addComment = document.forms["comment-form"]
    event.preventDefault()
    var value = addComment.querySelector(`input[type="text"]`).value
    console.log(value)
    newarr.push(value)
    addComment.querySelector(`input[type="text"]`).value = ""

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
                percent.innerHTML = `Percentage Match: ${response.percentage}`;
                message.innerHTML = `Compatibility Message: ${response.result}`
                if (response.percentage > 50) {
                    loveGif.style.display = "block"
                }
                else { loveGif.style.display = "none" }
            })
            .catch(err => console.error(err));

    })
})
console.log(newarr)

let dropUp = document.getElementById("dropup")
translate.addEventListener("click", () => {
    function first(e) {
        translate.innerHTML = ""
        e.stopImmediatePropagation();
        translate.onclick = second;
    }
    function second(e) {
        e.stopImmediatePropagation();
        translate.onclick = first;
        translate.innerHTML = "Translate"

    }

})

dropUp.addEventListener("click", () => {
    function fetch20Times() {
        for (let i = 0; i <= newarr.length-1; i++) {
            console.log(newarr)
            let name = document.createElement("ul")
           name.style.backgroundColor="transparent"
            let text=document.createElement("li")
            menu.appendChild(name)
            name.appendChild(text)
            text.innerText = newarr[i]
            text.style.borderRadius = "70px";
            text.style.height = "50px"
          text.style.backgroundColor="pink"
          text.style.alignContent="center"
        }
    }
    fetch20Times()

})
