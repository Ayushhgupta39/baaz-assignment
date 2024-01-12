function SidebarSectionCard({ icon, label }) {
  return (
    <div
      className={`flex ${
        label == "Logout" ? "text-red-600" : "text-[#808080]"
      } items-center gap-4 p-2 m-2 my-1 w-full text-xs cursor-pointer rounded-lg hover:bg-[#C7C7C740] ${
        label == "Logout" ? "border-l-2 border-l-red-600" : ""
      }`}
    >
      <div>
        <img className="size-6" src={icon} alt="" />
      </div>
      <div>{label}</div>
    </div>
  );
}

export default SidebarSectionCard;
