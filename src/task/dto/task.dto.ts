//Aca se especifica los datos que van a llegar desde el cliente
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateTasksDto {
  //Son decoradores para validar los datos que llegan desde el cliente.
  @IsString() //Este decorador sirve para validar si lo que viene del cliente es un string, en este caso valida el titulo.
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  description: string;
}
