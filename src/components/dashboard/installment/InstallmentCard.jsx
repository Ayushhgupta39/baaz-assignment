function InstallmentCard({ label, id }) {
  return (
    <div className="flex flex-col my-4">
      <label className="font-medium my-1 tracking-tight" htmlFor={id}>
        {label}
      </label>

      <div className="flex flex-col">
        <div className="flex items-center border border-gray-300">
          <div className="flex justify-between items-center gap-10">
            <div className="flex gap-2 mx-2">
              <p className="font-bold">B</p>
              <p className="italic">I</p>
            </div>
            <div className="mx-3">
              <img
                className="size-4 cursor-pointer"
                src="tools/order.png"
                alt=""
              />
            </div>
          </div>

          <div className="p-2 w-[30px] border-l border-l-gray-300 border-r border-r-gray-300"></div>

          <div className="flex p-2 justify-evenly gap-4 items-center">
            <img
              className="size-3 cursor-pointer"
              src="tools/Union.png"
              alt=""
            />
            <img
              className="size-3 cursor-pointer"
              src="tools/Union.png"
              alt=""
            />
          </div>

          <div className="p-2 w-1/5 border-l border-l-gray-300 border-r border-r-gray-300"></div>

          <div className="flex text-[#808080] gap-3 items-center p-1 ml-1 cursor-pointer">
            <div>
              <p className="text-xs ">Paragraph</p>
            </div>

            <img
              className="size-2 cursor-pointer"
              src="icons/dropdown.png"
              alt=""
            />
          </div>
          <div className="p-2 border-l border-l-gray-300 m-1"></div>
          <div className="flex text-[#808080] gap-3 items-center justify-start p-1 cursor-pointer">
            <div>
              <p className="text-xs ">Source</p>
            </div>

            <img
              className="size-2 cursor-pointer"
              src="icons/dropdown.png"
              alt=""
            />
          </div>
        </div>

        <div className="p-3 border border-t-0 border-gray-300"></div>

        <div className="border border-t-0 border-gray-300 p-1">
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full mx-1">
              <small className="tracking-tight font-medium">Text format</small>
              <div className="flex items-center gap-1 mx-2">
                <small className="text-blue-500">About text formats</small>
                <img
                  className="size-3 cursor-pointer"
                  src="icons/help.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex m-1 mx-1 mt-0 p-1 cursor-pointer items-center justify-between border border-gray-300">
              <small className="text-[#808080]">Full HTML</small>
              <img
                className="size-2 cursor-pointer"
                src="icons/dropdown.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallmentCard;
