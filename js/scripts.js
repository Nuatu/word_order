var itsInArray = function (singleArray, multiArray) {
  var indexPosition;
  for(var j = 0; j<multiArray.length; j++) {
    if(multiArray[j][0] === singleArray[0]) {
      indexPosition = j;
    }
  };
  return indexPosition;
};

var sorter = function(wordGroups) {
  var finalArray = [];
  wordGroups = wordGroups.sort(function(a,b){
    return b.length-a.length;
  });
  wordGroups.forEach(function(k) {
    finalArray.push(k[0]);
  });
  return finalArray;
};

var wordOrder = function(text){
  var words = text.split(" ");
  var wordGrouping = [];

  words.forEach(function(i){
    var wordHolder = [];
    wordHolder.push(i);
    var index = itsInArray(wordHolder, wordGrouping);

    if (index >= 0) {
      wordGrouping[index].push(i);
      } else {
        wordGrouping.push(wordHolder);
      }

  });
  console.log(wordGrouping[0] + wordGrouping[1]);
  return sorter(wordGrouping);

};




var string = "world hello hello";
