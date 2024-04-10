/** Copyright (c) 2024, Tegon, all rights reserved. **/

import { sort } from 'fast-sort';
import { observer } from 'mobx-react-lite';

import type { NotificationType } from 'common/types/notification';

import { useContextStore } from 'store/global-context-provider';

import { NotificationItem } from './notification-item';

export const NotificationsList = observer(() => {
  const { notificationsStore } = useContextStore();
  const notifications = sort(notificationsStore.getNotifications).desc(
    (notification: NotificationType) => notification.updatedAt,
  ) as NotificationType[];

  return (
    <div className="flex flex-col pr-2 overflow-y-auto">
      {notifications.map((notification: NotificationType, index: number) => (
        <NotificationItem
          notification={notification}
          key={notification.id}
          nextNotification={notifications[index + 1]}
        />
      ))}
      {notifications.map((notification: NotificationType, index: number) => (
        <NotificationItem
          notification={notification}
          key={notification.id}
          nextNotification={notifications[index + 1]}
        />
      ))}
      {notifications.map((notification: NotificationType, index: number) => (
        <NotificationItem
          notification={notification}
          key={notification.id}
          nextNotification={notifications[index + 1]}
        />
      ))}
      {notifications.map((notification: NotificationType, index: number) => (
        <NotificationItem
          notification={notification}
          key={notification.id}
          nextNotification={notifications[index + 1]}
        />
      ))}
    </div>
  );
});
