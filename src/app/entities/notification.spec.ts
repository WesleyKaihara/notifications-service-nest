import { Content } from './content';
import { Notification } from './notifications';

describe('Notifcation', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example',
    });

    expect(notification).toBeTruthy();
  });
});
