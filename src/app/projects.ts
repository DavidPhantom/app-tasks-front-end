import {Project} from "./project";
import {TODOS_DATA} from "./todos";

export const PROJECTS_DATA: Project[] = [
  {id: 1, title: 'Семья', todos: TODOS_DATA[0]},
  {id: 2, title: 'Работа', todos: TODOS_DATA[1]},
  {id: 3, title: 'Прочее', todos: TODOS_DATA[2]},
];
