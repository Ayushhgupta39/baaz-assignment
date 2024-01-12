import { Avatar, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import Button from "../Button";

function DashboardNav() {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex gap-2 w-full">
        <div className="w-1/3">
          <InputGroup>
            <InputLeftAddon>
              <img className="size-5" src="icons/SearchOutline.png" alt="" />
            </InputLeftAddon>
            <Input
              width={"100%"}
              type="tel"
              placeholder="Search by Phone no."
            />
          </InputGroup>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
      <div className="m-2">
        <Avatar src={"images/profile-1.png"} />
      </div>
    </div>
  );
}

export default DashboardNav;
