export class TodoItem {

  todoId: number;
  text: string;
  priorityLevel: number = 1;
  status: string = "P";
  createdOn: string;
  lastModifiedOn: Date;
}
