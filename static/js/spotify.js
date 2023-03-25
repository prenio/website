//Spotify
//Displays information from my personal Spotify account
//Uses the Spotify API
//Created by Pierce Renio


const APIController = (function()  {
    
    const clientId = '';
    const clientSecret ='';

    // Private methods
    const _getToken = async () => {

        const result = await fetch('https://acounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic' + btoa(clientId + ":" + clientSecret)
            },
            body: 'grant-type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

})();