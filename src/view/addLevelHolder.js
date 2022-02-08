import { getId } from '../utils';

export function addLevelHolder(containerId) {
  let container = getId(containerId);
  let holder = document.createElement('div');
  holder.id = 'level-holder';
  container.appendChild(holder);
}
