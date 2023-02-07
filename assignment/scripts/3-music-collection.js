console.log('***** Music Collection *****')

let collection = [];

function addToCollection(musicTitle, musicArtist, musicYearPublished) {
    let music = {
        title: musicTitle,
        artist: musicArtist,
        yearPublished: musicYearPublished,
    }
    collection.push(music);
    return music; 
}

function showCollection(array) {
    console.log(`Collection is ${array.length} albums total.`);
    for(let item in array){
        console.log(`[${item}]. ${array[item].title} by ${array[item].artist}, published in ${array[item].yearPublished}`);
    }
}

function findByArtist(artistName) {
    let results = [];
    for(let item of collection){
        if(item.artist === artistName){
            results.push(item);
        }
    }
    return results;
}

console.log(addToCollection('Test', 'Tester', 2023));
console.log(addToCollection('Alien Pop III',"Snail's house", 2019));
console.log(addToCollection('Apricot Princess', 'Rex Orange County', 2017));
console.log(addToCollection('Groove Continental: Side A', 'Yung Bae', 2022));
console.log(addToCollection('Ballads 1', 'Joji', 2018));
console.log(addToCollection('Illusions of the Heart', 'Seycara Orchestral', 2020));
console.log(addToCollection('Test2', 'Tester', 2024));
console.log(collection);

showCollection(collection);

console.log(`Test - checking if artist "Joji" exists in collection:`, findByArtist('Joji'));
console.log(`Test - checking if artist "Tester" exists in collection:`, findByArtist('Tester'));
console.log(`Test - checking if artist "Nobody" exists in collection:`, findByArtist('Nobody'));