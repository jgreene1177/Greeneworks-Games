// netlify/functions/steamProxy.js

const axios = require('axios');

exports.handler = async function(event, context) {
  try {
      
    const { gameId } = JSON.parse(event.body);
    
    const response = await axios.get('https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/', {
      params: {
        key: '440EB49F041A73365B2CD37D4CF39D4E',
        appid: gameId,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
