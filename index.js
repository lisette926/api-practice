async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value;
        // need to use backticks in order to work
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not fetch pokemon");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    
    }
    catch(error){
        console.error(error);
    }

}
