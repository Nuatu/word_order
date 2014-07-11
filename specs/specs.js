describe("wordOrder", function(){
  it("should take two words and return an array with the words separated and in the same order", function() {
  wordOrder("foo bar bar bar foo").should.eql(["bar", "foo"]);
  });

   it("should take a string with a word repeated and place that word before a third non-repeated word", function(){
     wordOrder("world hello hello food pizza").should.eql(["hello", "world", "food", "pizza"]);
   });

 it("should take a long string and sort by word repetitions", function(){
     wordOrder("world hello hello food pizza why why why why why does it it it taste").should.eql(["why", "it", "hello", "world", "food", "pizza", "does", "taste"]);
   });


});
