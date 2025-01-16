import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2253;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const createPost = ({ title, completed, userId }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos?userId=${USER_ID}}`, {
    title,
    completed,
    userId,
  });
};

export const deletePost = (itemId: number) => {
  return client.delete(`/todos/${itemId}`);
};
// Add more methods here
