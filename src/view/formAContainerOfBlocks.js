import { createColorBlocks, shuffle } from '../utils';

function createPartitions(rows, columns, container, blockClass) {
  const count = rows * columns;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  for (let i = 0; i < count; i++) {
    const partition = document.createElement('div');
    partition.className = blockClass;
    container.appendChild(partition);
  }
  return rows * columns;
}

function fillBlocksInContainer(arr, container) {
  const childs = container.childNodes;
  [].forEach.call(childs, (element, index) => {
    if (Object.prototype.hasOwnProperty.call(arr[index], 'color')) {
      element.style.backgroundColor = arr[index].color;
    }
  });
}

export function formAContainerOfBlocks(
  rows,
  columns,
  containerId,
  blockClass,
  colorConf
) {
  const blocksContainer = document.getElementById(containerId);
  const count = createPartitions(rows, columns, blocksContainer, blockClass);
  const arr = createColorBlocks(count, colorConf);
  const shuffleArr = shuffle(arr);
  fillBlocksInContainer(shuffleArr, blocksContainer, colorConf);
}
