import { TaskSatus } from '../task.entity';
import { IsIn, IsOptional } from 'class-validator';
export class TaksUpdate {
  title?: string;
  description?: string;

  @IsOptional()
  @IsIn([TaskSatus.DONE, TaskSatus.PENDING, TaskSatus.PROGRESS])
  status?: TaskSatus;
}
