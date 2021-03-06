// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(recordCollection, id, prop, value) {
    if(prop !== 'tracks' && value !== "") {
      recordCollection[id][prop] = value;
    }
    if(prop === 'tracks' && recordCollection[id][prop] === undefined) {
      recordCollection[id][prop] = [value];
    }
    if(prop === 'tracks') {
      let track = recordCollection[id][prop];
      track.push(value)
    }
    if(value === "") {
      delete recordCollection[id][prop]
    }
    
    return recordCollection;
  }
  
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');