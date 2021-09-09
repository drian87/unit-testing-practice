// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
  

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/
function encodeVowelWord(word) {
  let lowerWordCase = word.toLowerCase()
  let result =""
  
  let vowels =[`a`,`e`,`i`,`o`,`u`]
  let firstLetter = word[0]
  let restOfTheName= lowerWordCase

  let pigVowel =`${restOfTheName}-yay`
 
  if(vowels.includes(firstLetter)){
    result=pigVowel
  }
 
  

  return result

  // let lowerCaseWord = word.toLowerCase()
  // console.log(lowerCaseWord)
  // // return ""; // replace this!
}
console.log(encodeWord("is"))
// Write your unit tests here
console.assert(encodeVowelWord("eat") === "eat-yay","This failed")
console.assert(encodeVowelWord("omelet") === "omelet-yay","This failed")
console.assert(encodeVowelWord("are") === "are-yay","This failed")
console.assert(encodeVowelWord("egg") === "egg-yay","This failed")
console.assert(encodeVowelWord("hello") === "","This failed")

/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/
function encodeConsonantWord(word) {
  let lowerWordCase = word.toLowerCase()
  let result =""
  
  let vowels =[`a`,`e`,`i`,`o`,`u`]
  let pigConsonant =""
  let secondLetter = word[1]
  let restOfTheName= lowerWordCase

  let pigVowel = ""
    



    for (let index =0; index<restOfTheName.length ; index +=1){


      if(vowels.includes(word[index])){
        pigVowel = restOfTheName.slice(index)
        pigConsonant = `${pigVowel}-${result}ay`
        break
      }
        result += word[index]
      }
        
   
      pigConsonant = `${pigVowel}-${result}ay`
   return pigConsonant
 }
console.log(encodeConsonantWord("my"))
console.log(encodeConsonantWord("latin")==="atin-lay")
console.log(encodeConsonantWord("latin")==="y-may")
// Write your unit tests here()
console.assert(encodeConsonantWord("latin") === "atin-lay","This failed")
console.assert(encodeConsonantWord("banana") === "anana-bay","This failed")
console.assert(encodeConsonantWord("trash") === "ash-tray","This failed")
console.assert(encodeConsonantWord("happy") === "appy-hay","This failed")

/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {
  let result=""

  let vowels =[`a`,`e`,`i`,`o`,`u`]
   for( let index=0; index<vowels.length; index+=1){
     let vowel= vowels[index]
     if(vowels.includes(word[index])){
       result=encodeVowelWord(word)
      return result
     }else{
       result= encodeConsonantWord(word)
       return result
     }
    //  if(word.startsWith(vowel)){
    //   encodeVowelWord(word)
    
    //  }else{
    //   encodeConsonantWord(word)
    //  }
    
   }
 
}
// Write your unit tests here
console.assert(encodeWord("cheers") === "eers-chay","This failed")
console.assert(encodeWord("shesh") === "esh-shay","This failed")
console.assert(encodeWord("under") === "under-yay","This failed")
console.assert(encodeWord("island") === "island-yay","This failed")


/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/

function encodeText(text) {
  let result=""
  let sentence =""
  let sentenceArray=[]
  let joinSentence=""
  let textArray= text.split(" ")
  for (let index=0; index<textArray.length;index+=1){
   result= textArray[index]
   sentence= encodeWord(result)
  sentenceArray.push(sentence)
  //  sentenceArray+= `${sentence}` 
   
  }
   return sentenceArray.join(" ")
}


// Write your unit tests here 

console.assert(encodeText("Hello what is your name")==="ello-Hay at-whay is-yay our-yay ame-nay","This failed")
console.assert(encodeText("cheers is the name of the game")==="eers-chay is-yay e-thay ame-nay of-yay e-thay ame-gay","This failed")




