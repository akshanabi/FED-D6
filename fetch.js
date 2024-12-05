const LoadStarwarsPeople = async() =>
{
    try{
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log("===============This is the data of the person 1 in Starwars =============");
        console.log(data);
    }
    catch(error){
        console.log('ohno error', error);
    }
}
LoadStarwarsPeople();