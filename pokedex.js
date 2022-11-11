const fetchPokemon = async() => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    //para buscarlo
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    //fetch consulta apis da una respuesta(res)
    let data = await fetch(url).then((res) => {
        //si el estatus del resultado es diferente de 200
        if (res.status != "200") {
            console.log(res);
            //ponme un gitf de un pokemon tiste
            pokeImage("giphy.gif");
        }    else {
            return res.json();
        }
    });

    //Si da respuesta entonces
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            //sacar la informacion
            let pokeInfo=data.abilities;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            console.log(pokeImg);
        }
    };

//nueva funcion
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}



//nueva ,vector con las habilidades
const pokeData=(abilites)=>
{

    const PokeAbilities=document.getElementById("abilities");

    //vector que solo tendra los puros nombres
    //map=recorre
    const abilitiesName=abilites.map((item)=>item.ability.name);
   PokeAbilities.innerHTML=abilitiesName;
}



