export function toTurnPartitions(arr) {
  [].forEach.call(arr, element => {
    if (!hasClass(element, 'guessedPartition')) {
      element.style.filter = 'contrast(0%)';
      setTimeout(() => {
        element.style.filter = 'contrast(100%)';
      }, 6000);
    }
  });
}
