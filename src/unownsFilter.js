import { unowns } from "./gif";


export function unownsFilter(query) {
    let unownsFiltredArray = [];
    let queryToArray = query.split("");

    console.log(queryToArray);

    queryToArray.forEach( char => {
        unownsFiltredArray.push( unowns.filter( unown =>  unown.char.toLocaleLowerCase() === char ) )
    })

    console.log(unownsFiltredArray);
    return unownsFiltredArray
}