function daysToReachTop(hillHeight, climbDistance, slideDistance) {
  let totalDistance = 0;
  let days = 0;

  while (totalDistance < hillHeight) {
    totalDistance += climbDistance;
    days++;

    if (totalDistance >= hillHeight) {
      return days;
    }

    totalDistance -= slideDistance;
  }

  return days;
}

const hillHeight = 100;
const climbDistance = 50;
const slideDistance = 30;

const days = daysToReachTop(hillHeight, climbDistance, slideDistance);
console.log(`Черепашке потребуется ${days} дней, чтобы залезть на вершину холма.`);
// Ответ: 4
