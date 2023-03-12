import { unowns } from "./gif";
import whitespace from "./asets/unown-whitespace.png";


export function unownsFilter(query) {
    let whites = {
        char : " ",
        name : " ",
        img : whitespace
    }
    let unownsFiltredArray = [];
    let queryToArray = query.split("");

    if (unowns.length === 28) unowns.push(whites)

    console.log(queryToArray);

    queryToArray.forEach( char => {
        unownsFiltredArray.push(
            getUnown(char)
        )
    })

    console.log(unownsFiltredArray);
    return unownsFiltredArray
}

const getUnown = (char) => {
    return unowns.find(unown => unown.char === char)
}