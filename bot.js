const question = document.getElementById("question")
const answer = document.getElementById("answer")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")


let init = 0


const botSay = (data) => {
    return [
        "Im dausBot here, what is your name?",
        `Hello ${data?.nama}. How old are you?`,
        `I see.. ${data?.umur} is still a young age hehe. What is your hobby?`,
        `Wow, me too. ${data?.hobi} is also my hobby. Whats your job?`,
        `Nice, i hope to work as ${data?.kerja} too. Ok till we meet again ya?`
    ]
}

question.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (answer.value.length <1) return alert("Fill in the answer first")

    init++
    if (init===1) {
        botDelay({nama: answer.value})
    }else if (init===2){
        botDelay({umur: answer.value})
    }else if (init===3){
        botDelay({hobi: answer.value})
    }else if (init==4){
        botDelay({kerja: answer.value})
    }else if (init===5){
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(userAnswer) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        question.innerHTML = botSay(userAnswer)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    userData.push(answer.value)
    answer.value = ""
}

function finishing() {
    question.innerHTML = `Thank you ${userData[0]} for using me, we can play ${userData[2]} together later`
    answer.value = "You are welcome!"
}

function botEnd() {
    alert("Thank you, the window will be reloaded")
    window.location.reload()
}