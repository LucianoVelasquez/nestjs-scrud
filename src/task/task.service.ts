import { Injectable } from '@nestjs/common';
import { Task, TaskSatus } from './task.entity';
import { TaksUpdate } from './dto/taskUpdate.dto';
import { v4 } from 'uuid';
//Son metodos que se pueden llamar en cualquier parte de neuestro codigo?
@Injectable()
export class TaskService {
  //Simula DB
  private task: Task[] = [
    {
      id: v4(),
      title: 'hola',
      description: 'holanda',
      status: TaskSatus.PENDING,
    },
  ];

  getAllTask(): Task[] {
    return this.task;
  }
  getTaskById(id: string): Task {
    return this.task.find((e) => e.id === id);
  }
  createTask(title: string, description: string) {
    const newTask = { id: v4(), title, description, status: TaskSatus.PENDING };
    return this.task.push(newTask);
  }
  deleteTask(id: string): string {
    this.task = this.task.filter((e) => e.id !== id);
    return;
  }
  updateTask(id: string, updateFilds: TaksUpdate): Task {
    const taskUpdate = this.getTaskById(id);
    const update = Object.assign(taskUpdate, updateFilds); //Este metodo assing, sirve para remplazar el valor de las propiedades de un objeto.
    this.task = this.task.map((e) => (e.id === id ? update : taskUpdate));
    return update;
  }
}
