import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  const notificationRepository = new InMemoryNotificationsRepository();
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'Teste de Notificação',
      category: 'social',
      recipientId: 'Recipient',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
