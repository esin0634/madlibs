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
  const regex = /(\w+\[\w+\]|\w+|\W)/g;
  let wordsObject = rawStory.match(regex).filter((item) => item.trim() !== "");
  // console.log(wordsObject);

  let outputObject = [];

  for (let i = 0; i < wordsObject.length; i += 1) {
    let currentWord = wordsObject[i];
    let currentPos = "";
    let element = {};
    if (currentWord[currentWord.length - 1] === "]") {
      if (currentWord[currentWord.length - 2] === "n") {
        currentPos = "noun";
      }
      if (currentWord[currentWord.length - 2] === "v") {
        currentPos = "verb";
      }
      if (currentWord[currentWord.length - 2] === "a") {
        currentPos = "adj";
      }

      element.word = currentWord.slice(0, -3);
      element.pos = currentPos;
      outputObject.push(element);
    } else {
      element.word = currentWord;
      outputObject.push(element);
    }
  }

  return outputObject;
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
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
    const paragraph = document.createElement("p");
    container.appendChild(paragraph);

    let storyInput = processedStory;
    for (let index = 0; index < storyInput.length; index++) {
      const element = storyInput[index];
      if (element.pos) {
        const input = document.createElement("input");
        input.classList.add("user-input");
        input.placeholder = element.pos;
        paragraph.appendChild(input);
      } else {
        const text = document.createElement("span");
        text.textContent = ` ${element.word} `;
        paragraph.appendChild(text);
      }
    }

    const inputObj = document.querySelectorAll(".user-input");
    let textValue = "";
    for (const input of inputObj) {
      input.addEventListener("input", (e) => {
        textValue = input.value;
        console.log(textValue);
      });
    }

    // console.log(storyInput);
    // console.log(processedStory);
  });
