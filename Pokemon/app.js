
// Further Study

const pokemonURL = 'http://pokeapi.co/api/v2';
let pokemon = undefined;
axios.get(`${pokemonURL}/pokemon/21`)
.then(res=>{
    console.log(res.data);
    pokemon = res.data.name;
    return axios.get(res.data.species.url);
})
.then(res=>{
    console.log(res.data);
    const description = res.data.flavor_text_entries.find(entry=> entry.language.name==='en');
    console.log(pokemon, description.flavor_text);
})