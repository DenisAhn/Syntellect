function countHandshakes(people) {
  let handshakes = 0;
  for (let i = 1; i < people; i++) {
    handshakes += i;
  }
  return handshakes;
}

const totalPeople = 10;
const totalHandshakes = countHandshakes(totalPeople);
console.log(`Для ${totalPeople} человек потребуется ${totalHandshakes} рукопожатий.`);
// Ответ: 45
