const scissors = document.querySelector('.scissors-container')
const paper = document.querySelector('.paper-container')
const rock = document.querySelector('.rock-container')
const info = document.querySelector('.info')
const game = document.querySelector('.main-game')
const score = document.querySelector('#score')
const again = document.querySelector('.again')
const clearScore = document.querySelector('.clear-score')
let poll = [1, 2, 3]  
const randomIndex = Math.floor(Math.random() * poll.length)
const random = poll[randomIndex]  


function createScissors(){
    const newScissorsContainer = document.createElement('button')
    newScissorsContainer.classList.add('scissors-container')
    newScissorsContainer.classList.add('container')
    const newScissorsImg = document.createElement('img')
    newScissorsImg.src = 'images/icon-scissors.svg'

    
    game.appendChild(newScissorsContainer)
    newScissorsContainer.appendChild(newScissorsImg)
}

function createPaper(){
    const newPaperContainer = document.createElement('button')
    newPaperContainer.classList.add('paper-container')
    newPaperContainer.classList.add('container')
    const newPaperImg = document.createElement('img')
    newPaperImg.src = 'images/icon-paper.svg'

    
    game.appendChild(newPaperContainer)
    newPaperContainer.appendChild(newPaperImg)
}

function createRock(){
    const newRockContainer = document.createElement('button')
    newRockContainer.classList.add('rock-container')
    newRockContainer.classList.add('container')
    const newRockImg = document.createElement('img')
    newRockImg.src = 'images/icon-rock.svg'

    
    game.appendChild(newRockContainer)
    newRockContainer.appendChild(newRockImg)
}



scissors.addEventListener('click',()=>{
    game.style.background = 'none'
    scissors.style.right = '200px'
    again.classList.remove('hidden')
    console.log(random)
    if(random === 1){
        console.log('u tied')
        createScissors()
        rock.classList.add('hidden')
        info.innerHTML = 'U TIED'
    }
    if(random === 2){
        paper.style.left = '200px'
        rock.classList.add('hidden')
        info.innerHTML = 'U WON'
        score.innerHTML = parseInt(score.innerHTML) + 1
        localStorage.setItem('scoreTotal', score.innerHTML)
    }
    if(random === 3){
        rock.style.bottom = '200px'
        rock.style.left = '200px'
        info.innerHTML = 'U LOST'
    }
})

paper.addEventListener('click',()=>{
    game.style.background = 'none'
    again.classList.remove('hidden')
    if(random === 1){
        console.log('u tied')   
        rock.classList.add('hidden')
        info.innerHTML = 'U LOST'
    }
    if(random === 2){
        createPaper()
        scissors.classList.add('hidden')
        paper.style.left = '200px'
        rock.classList.add('hidden')
        info.innerHTML = 'U TIED'
    }
    if(random === 3){
        rock.style.bottom = '200px'
        rock.style.left = '200px'
        info.innerHTML = 'U WON'
        scissors.classList.add('hidden')
        score.innerHTML = parseInt(score.innerHTML) + 1
        localStorage.setItem('scoreTotal', score.innerHTML)
    }
})

rock.addEventListener('click',()=>{
    game.style.background = 'none'
    rock.style.bottom = '210px'
    rock.style.left = '-30px'
    again.classList.remove('hidden')
    if(random === 1){
        paper.classList.add('hidden')
        info.innerHTML = 'U WON'
        score.innerHTML = parseInt(score.innerHTML) + 1
        localStorage.setItem('scoreTotal', score.innerHTML)
    }
    if(random === 2){
        paper.style.left = '200px'
        info.innerHTML = 'U LOST'
        scissors.classList.add('hidden')
    }
    if(random === 3){   
        paper.classList.add('hidden')
        scissors.classList.add('hidden')
        info.innerHTML = 'U TIED'
        rock.style.left = '85px'
    }
})

again.addEventListener('click',() =>{
    location.reload()
})

const scoreTotal = localStorage.getItem('scoreTotal')
if(scoreTotal){
    score.innerHTML = scoreTotal
}

clearScore.addEventListener('click', () =>{
    score.innerHTML = '0'
    localStorage.clear(scoreTotal)
})
