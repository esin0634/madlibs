/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
    let wordsObject = rawStory.split(/[\s,.'\[\]]+/).filter(Boolean)
    debugger;
    
    let outputObject = []

    for (let i= 0 ; i < wordsObject.length ; i += 1){
        let currentWord = wordsObject[i]
        let currentPos = ""
        let element = {}
        if ((currentWord[currentWord.length-1]) === "]" ){
            if ((currentWord[currentWord.length-2]) === "n" ){
                currentPos = "noun"
            }
            if ((currentWord[currentWord.length-2]) === "v" ){
                currentPos = "verb"
            }
            if ((currentWord[currentWord.length-2]) === "a" ){
                currentPos = "adj"
            }
        }
        
        element.word = currentWord
        element.pos = currentPos
        outputObject.push(element)

    }

    console.log(outputObject)
    

  // Your code here.
//   return {}; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });
