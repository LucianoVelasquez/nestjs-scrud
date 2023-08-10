import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTasksDto } from './dto/task.dto';
import { TaksUpdate } from './dto/taskUpdate.dto';

//los controles son las rutas de nuestra app? ej localhost:3000/task
//Los controladores son responsables de manejar solicitudes de entrada y dar una respuesta al cliente.
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {} //Aca importamos el servicio al controlador.
  @Get('/')
  getAllTask() {
    return this.taskService.getAllTask();
  }
  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }
  //Importamos el body para tomar lo que nos llega desde le cliente.
  //Para no utilizar el newTask: any, se puede utilizar el DTO (Date tranfer Objet)
  //Es un objeto que es transportado desde el cliente al backend. gracias a esto nosotros
  // podemos validarlo y tener auto completado
  @Post()
  createTask(@Body() newTask: CreateTasksDto) {
    this.taskService.createTask(newTask.title, newTask.description);
    return newTask;
  }
  //localhost/tasks/id
  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
    return { message: `tasks whit id ${id} was eliminated access` };
  }
  @Patch(':id') //Se puede utilizar PUT tambien, pero en este caso estoy actualizando algunos datos y no un Update completo.
  updateTask(@Param('id') id: string, @Body() updateFild: TaksUpdate) {
    console.log(updateFild);
    this.taskService.updateTask(id, updateFild);
    return { message: `tasks whit id ${id} was update access` };
  }
}
