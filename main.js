const arenas = document.querySelector('div.arenas');

const Kitana = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['fans', 'wind\'s power'],
    attack: function () {
        console.log(this.name + ' Fight...')
    }
};
const Liukang = {
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['legs', 'hands', 'fireballs'],
    attack: function () {
        console.log(this.name + ' Fight...')
    }
};

function createPlayer(container, data) {
    const playerContainer = document.createElement('div');
    playerContainer.classList.add(container);
    const playerBar = document.createElement('div');
    playerBar.classList.add('progressbar');
    const playerLife = document.createElement('div');
    playerLife.classList.add('life');
    playerLife.style.width = data.hp + '%';
    const playerName = document.createElement('div');
    playerName.classList.add('name');
    playerName.innerText = data.name;
    const playerCharacter = document.createElement('div');
    playerCharacter.classList.add('character');
    const playerImg = document.createElement('img');
    playerImg.src = data.img;

    arenas.appendChild(playerContainer);
    playerContainer.appendChild(playerBar);
    playerBar.appendChild(playerLife);
    playerBar.appendChild(playerName);
    playerContainer.appendChild(playerCharacter);
    playerCharacter.appendChild(playerImg);

}

createPlayer('player1', Kitana);
createPlayer('player2', Liukang);