document.addEventListener('DOMContentLoaded', function() {
    updateGameList();
});

function updateGameList() {
    // Example for a specific game - replace with actual game ID
    const gameId = '960090'; // This is an example Game ID (for Team Fortress 2)

    fetch(`/netlify/functions/steamProxy.js`)
        .then(response => response.json())
        .then(data => {
            // Assuming 'player_count' is the field in the response
            displayGame(gameId, data.response.player_count);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayGame(gameId, playerCount) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = ''; // Clear existing content

    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');

    const title = document.createElement('span');
    title.classList.add('game-title');
    title.textContent = `Game ID: ${gameId}`; // Displaying Game ID for demonstration

    const count = document.createElement('span');
    count.textContent = `Current Players: ${playerCount}`;

    gameItem.appendChild(title);
    gameItem.appendChild(count);
    gameList.appendChild(gameItem);
}
