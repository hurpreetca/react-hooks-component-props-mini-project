export function minutesToRead(minutes) {
  if (minutes < 30) {
    const coffeCount = Math.ceil(minutes / 5);
    return `•${"☕️".repeat(coffeCount)} ${minutes} min read`;
  } else {
    const bentoCount = Math.ceil(minutes / 10);
    return `•${"🍱".repeat(bentoCount)} ${minutes} min read`;
  }
}
