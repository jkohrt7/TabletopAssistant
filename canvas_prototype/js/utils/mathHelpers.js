export function roundToMultipleOf(number, multiple) {
  return multiple * Math.round(number/multiple);
}