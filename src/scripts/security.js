const validations = "qwertyuiopasdfghjklzxcvbnm?! "
// const validations = "qwertyuiopasdfghjklzxcvbnm?!"

let sinDiacriticos = (function(){
    let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
         a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
        re = new RegExp('['+de+']' , 'ug');

    return texto =>
        texto.replace(
            re, 
            match => a.charAt(de.indexOf(match))
        );
})();

export function security(query) {

    query = sinDiacriticos(query);
    console.log(query);
    query = query.toLowerCase();

    let queryToArray = query.split("");
    let queryValidated = "";

    queryToArray.forEach( char => {
        if ( validations.includes(char) ) // ? console.log(true, char) : console.log(false, char)
            queryValidated += char
    })

    console.log(queryValidated)
    return queryValidated.toUpperCase()
}
