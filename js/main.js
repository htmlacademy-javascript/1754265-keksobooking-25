function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}  // Результат: целое число из диапазона "от...до" (источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
getRandomNumber(6, 8);

function getRandomResult(min, max, maxNumber = 0) {
  if (min > max || min < 0 || max <= 0) {
    return ('Неверный диапазон!');
  }

  const numberDegree = 10 ** maxNumber;
  const result = ((Math.random() * (max - min) + min) * numberDegree) / numberDegree;
  return +result.toFixed(maxNumber);
} // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой" (источник: https://qna.habr.com/q/999157)
getRandomResult(6, 6, 9);
