import { Avatar, AvatarBadge } from "@chakra-ui/react";

function ProfileCard() {
  return (
    <div className="flex items-center gap-4 bg-[#C7C7C740] cursor-pointer rounded-lg p-2 shadow-md border">
      <div>
        <Avatar src="/images/profile-1.png">
          <AvatarBadge boxSize="1em" bg="green.400" />
        </Avatar>
      </div>
      <div className="flex justify-center flex-col text-sm font-medium gap-1">
        <p>Student</p>
        <p>934566778</p>
        <p className="text-green-500 font-light">Online</p>
      </div>
    </div>
  );
}

export default ProfileCard;
