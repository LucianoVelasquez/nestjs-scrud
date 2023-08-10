/* eslint-disable prettier/prettier */
export enum TaskSatus {
  PENDING = 'PENDING',
  DONE = 'DONE',
  PROGRESS = 'IN_PROGRESS',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status?: TaskSatus;
}

