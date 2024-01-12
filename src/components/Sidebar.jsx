import { studentPanel, superAdminPanel } from "../utils/sidebarValues";
import ProfileCard from "./sidebar/ProfileCard";
import SidebarSectionCard from "./sidebar/StudentSectionCard";

function Sidebar() {
  return (
    <div className="flex flex-col p-2 border border-gray-300 rounded-xl gap-4 m-2">
      <div className="my-4 mx-2">
        <h2 className="text-3xl text-custom_blue font-bold">Course app</h2>
      </div>

      <div>
        <ProfileCard />
      </div>

      {/* Student Section */}
      <div className="flex flex-col text-center">
        <p className="font-medium">Student</p>

        <div className="font-normal">
          {studentPanel.map((section, i) => (
            <SidebarSectionCard
              icon={section.icon}
              label={section.label}
              key={i}
            />
          ))}
        </div>
      </div>

      {/* SuperAdmin section */}
      <div className="flex flex-col text-center">
        <p className="font-medium">Superadmin</p>

        <div className="font-normal">
          {superAdminPanel.map((section, i) => (
            <SidebarSectionCard
              icon={section.icon}
              label={section.label}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
