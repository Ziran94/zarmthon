const $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

let player1 = {
    player:1,
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
    player:2,
    name:'kitana',
    hp:100,
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

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className)
        $tag.classList.add(className);

    return $tag;
}

function changeHP(player, player2) {
    const $playerLife = document.querySelector('.player'+player.player + ' .life');

    player.hp -= Math.ceil(Math.random() * 20);
    player.hp = (player.hp <0) ? 0 : player.hp;

    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0){

        $arena.appendChild(playerWins(player2.name));

        $randomButton.disabled = true;
        $randomButton.style.visibility = 'hidden';
    }
}

function playerWins(name){

    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' wins';

    return $loseTitle;
}

$randomButton.addEventListener('click', function () {
    changeHP(player1,player2);
    changeHP(player2,player1);
})

function createPlayer(playerObj) {

    const $player = createElement('div', 'player'+playerObj.player);
    $player.addEventListener('click', playerObj.attack);

    /*Прогрессбар*/
    const $progressbar  = createElement('div','progressbar');
    $player.appendChild($progressbar);

    const $life  = createElement('div','life');

    if(playerObj.hp < 0)
        playerObj.hp = 0;

    $life.style.width = playerObj.hp + '%';
    $progressbar.appendChild($life);

    const $name  = createElement('div','name');
    $name.innerText = playerObj.name;
    $progressbar.appendChild($name);

    /*Персонаж*/
    const $character  = createElement('div','character');
    $player.appendChild($character);

    const $img  = createElement('img');
    $img.src = playerObj.img;
    $character.appendChild($img);

    return $player;
}
$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));