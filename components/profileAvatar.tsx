import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

const ProfileAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="/man-user-circle-icon.svg" />
      <AvatarFallback>GB</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
