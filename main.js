const $arena = document.querySelector('.arenas');

let player1 = {
    name:'scorpion',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:[
        'Нож'
    ],
    attack:function () {
        console.log(this.name + ' fight...')
    }
}

const player2 = {
    name:'kitana',
    hp:50,
    img:'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon:[
        'НеНож'
    ],
    attack:function () {
        console.log(this.name + ' fight...')
    }
}

player1.attack();
player2.attack();

function createPlayer(player, playerObj) {

    const $player = document.createElement('div');
    $player.classList.add(player);
    $player.addEventListener('click', playerObj.attack);
    $arena.appendChild($player);

    /*Прогрессбар*/
    const $progressbar  = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $life  = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerObj.hp + '%';
    $progressbar.appendChild($life);

    const $name  = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObj.name;
    $progressbar.appendChild($name);

    /*Персонаж*/
    const $character  = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $img  = document.createElement('img');
    $img.src = playerObj.img;
    $character.appendChild($img);

}

createPlayer('player1', player1);
createPlayer('player2', player2);