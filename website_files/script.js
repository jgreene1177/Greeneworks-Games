// Mapping of Game IDs to Game Names
const gameNames = {
    '960090': 'Bloons TD 6',
	'1938090': 'Call of Duty',
	'1240440': 'Halo Infinite',
    // Add other game IDs and names as needed
};

const gameIDs = ['960090', '1938090', '1240440'];



document.addEventListener('DOMContentLoaded', function() {
    updateGameList();
});

function updateGameList() {

	const gameList = document.getElementById('game-list');
    gameList.innerHTML = ''; // Clear existing content
    
    gameIDs.forEach(gameId => {

    fetch('/.netlify/functions/steamProxy')
        .then(response => response.json())
        .then(data => {
            displayGame(gameId, data.response.player_count);
        })
        .catch(error => console.error('Error fetching data:', error));
}}

function displayGame(gameList, gameId, playerCount) {

    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');

    const title = document.createElement('span');
    title.classList.add('game-title');
    title.textContent = gameNames[gameId] || `Game ID: ${gameId}`; // Displaying Game Name

    const count = document.createElement('span');
    count.textContent = `Current Players: ${playerCount}`;

    gameItem.appendChild(title);
    gameItem.appendChild(count);
    gameList.appendChild(gameItem);
}
