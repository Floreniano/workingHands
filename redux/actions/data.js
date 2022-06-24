import { SET_DATA } from '../types';
import { fetchItems } from './fetch';

export function updateData() {
  return fetchItems('events', 'GET', SET_DATA);
}
