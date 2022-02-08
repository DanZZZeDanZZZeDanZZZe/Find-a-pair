import { getId } from '../utils';

export function addLevelHolder(containerId) {
  const container = getId(containerId);
  const holder = document.createElement('div');
  holder.id = 'level-holder';
  container.appendChild(holder);
}
