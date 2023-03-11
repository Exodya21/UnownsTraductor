import { unowns } from "./gif";


export function unownsFilter(query) {
    let unownsFiltredArray = [];
    let queryToArray = query.split("");

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