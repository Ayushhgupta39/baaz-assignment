function InstallmentCard({ label, id }) {
  return (
    <div className="flex flex-col my-4">
      <label className="font-semibold my-1" htmlFor={id}>
        {label}
      </label>

      <div className="flex flex-col">
        <div className="flex items-center border border-gray-400">
          <div className="flex justify-between items-center gap-10">
            <div className="flex gap-2 mx-2">
              <p className="font-bold">B</p>
              <p className="italic">I</p>
            </div>
            <div className="mx-3">
              <img className="size-4" src="tools/order.png" alt="" />
            </div>
          </div>

          <div className="p-2 w-[30px] border-l border-l-gray-400 border-r border-r-gray-400"></div>

          <div className="flex p-2 justify-evenly gap-4 items-center">
            <img className="size-4" src="tools/Union.png" alt="" />
            <img className="size-4" src="tools/Union.png" alt="" />
          </div>

          <div className="p-2 w-1/4 border-l border-l-gray-400 border-r border-r-gray-400"></div>

          <div className="flex text-[#808080] gap-3 items-center p-1 ml-1">
            <div>
              <p className="text-xs ">Paragraph</p>
            </div>

            <img className="size-2" src="icons/dropdown.png" alt="" />
          </div>
          <div className="p-2 border-l border-l-gray-400 m-1"></div>
          <div className="flex text-[#808080] gap-3 items-center p-1">
            <div>
              <p className="text-xs ">Source</p>
            </div>

            <img className="size-2" src="icons/dropdown.png" alt="" />
          </div>
        </div>

        <div className="p-3 border border-t-0 border-gray-400"></div>

        <div className="border border-t-0 border-gray-400 p-1">
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full mx-1">
              <small className="tracking-tight font-medium">Text format</small>
              <div className="flex items-center gap-1 mx-2">
                <small className="text-blue-500">About text formats</small>
                <img className="size-3" src="icons/help.png" alt="" />
              </div>
            </div>
            <div className="flex m-1 mx-1 mt-0 p-1 items-center justify-between border border-gray-400">
              <small className="text-[#808080]">Full HTML</small>
              <img className="size-2" src="icons/dropdown.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallmentCard;
