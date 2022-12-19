import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/CreateNotificationBody';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotifcation: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotifcation.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
