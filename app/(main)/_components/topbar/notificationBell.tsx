import { Bell } from "lucide-react";
import React from "react";
const NotificationBell = ({
  notificationCount,
}: {
  notificationCount: number;
}) => {
  return (
    <div className="relative">
      <Bell className="w-6 h-6" />
      {notificationCount > 0 && (
        <span className="absolute -top-1 right-0 bg-red-400 rounded-full p-2 w-4 h-4 flex items-center justify-center text-white text-sm">
          {notificationCount}
        </span>
      )}
    </div>
  );
};

export default NotificationBell;
