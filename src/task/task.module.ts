import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

//Que es un modulo?
@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
