document.getElementById('getJokeButton').addEventListener('click', fetchJoke);

async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const jokeData = await response.json();
    
    let joke;
    if (jokeData.type === 'single') {
        joke = jokeData.joke;
    } else {
        joke = `${jokeData.setup} ${jokeData.delivery}`;
    }
    
    // Display the joke
    document.getElementById('jokeDisplay').innerText = joke;
    
    // Call the function to update the character count
    updateCharacterCount(joke);
}

// Function to update the character count
function updateCharacterCount(joke) {
    const characterCount = joke.length;
    document.getElementById('characterCount').innerText = `Character count: ${characterCount}`;
}
