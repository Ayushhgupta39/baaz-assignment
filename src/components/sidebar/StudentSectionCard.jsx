

function SidebarSectionCard({ icon, label }) {
  return (
    <div className="flex text-[#808080] items-center gap-4 p-2 m-2 w-full cursor-pointer rounded-lg hover:bg-[#C7C7C740]">
        <div>
            <img className="size-6" src={icon} alt="" />
        </div>
        <div>
            {label}
        </div>
    </div>
  )
}

export default SidebarSectionCard