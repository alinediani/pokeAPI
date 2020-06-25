/*2.1 - Tarefa básica:
Seu programa deve:
2.1.1 - Pedir ao usuário que defina um pokémon que ele gostaria de saber mais informações
sobre. Essa escolha pode ser feita através do input do ID do Pokémon ou pelo nome.
2.1.2 - Fazer o display do nome do Pokémon, seu tipo e também sua lista de habilidades (na
tela do terminal)
2.1.3 - Se o usuário quiser salvar esse pokémon em sua pokedex local para consultar mais
tarde, ele pode fazê-lo. Aqui, os dados devem ficar armazenados na máquina, em um arquivo
.json. Você escolherá a estrutura mais adequada.
*/
const rs=require('readline-sync')
const ax=require('axios')
var fs=require('fs')
var pokemon=rs.question('Qual pokemon você gostaria de ter informações?')
var pokedividido={}
var caminho='pokedex.json'
function pokedex(){
    ax.get('https://pokeapi.co/api/v2/pokemon/'
        +pokemon)
    .then(function(response){
        console.log(response.data.abilities)
        console.log(response.data.types)
        pokedividido.nome=response.data.name
        pokedividido.types=response.data.types
        pokedividido.abilities=response.data.abilities
        
       
        var pokemonSer=JSON.stringify(pokedividido)
        var pergunta=rs.question('Você gostaria de salvar em sua pokedex?')
        if(pergunta=='sim'){
         fs.writeFileSync(caminho,pokemonSer)
        }
    })
    .catch(function(error){
        console.log(error)
        })
}
pokedex()