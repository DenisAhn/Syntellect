function removeDuplicates(inputString) {
  const words = inputString.split(",");
  const uniqueWords = [...new Set(words)];
  return uniqueWords.join(",");
}

const inputString = "кошка,собака,лошадь,корова,кошка,собака,";
const resultString = removeDuplicates(inputString);
console.log(resultString);
// Ответ: кошка,собака,лошадь,корова
