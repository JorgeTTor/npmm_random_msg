const messages = [
    "'La verdad solo se puede encontrar en un lugar: el código.' - Robert C. Martin",
    "'Eres el IDE que me Autocompleta'",
    "'Aim for the moon, if you miss, you mat hit a star.' - W. Clement Stone",
    "'Weeks of programming can save you hours of planning.' -Unknown",
    "'Hola Mundo'",
    "'Real knowledge is to know the extent of one's ignorance'. -Confucious",
    "'To Iterate is human, to recurse is divine.' -Peter Deutch",
    "Live",
    "'First learn computer science and all theory. Next Developr a programing style. Then forget all that and just hack.'-George Carrette "

];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);

}

module.exports =  { randomMsg };
