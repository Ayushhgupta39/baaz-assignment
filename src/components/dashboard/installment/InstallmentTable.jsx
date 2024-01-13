function InstallmentTable() {
  return (
    <div className="flex flex-col">
      <div className="bg-custom_blue text-white p-3 rounded-lg">
        <p className="text-xl font-medium">Installment details</p>
      </div>

      <div className="my-1">
        <div className="relative overflow-x-auto">
          <table className="w-full border-separate text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-[10px] text-white">
              <tr className="w-full">
                <th className="rounded-[3px] font-normal bg-[#808080] p-[2px]">
                  Installment No.
                </th>
                <th className="rounded-[3px] font-normal bg-[#808080] p-[2px]">
                  Primary Installment Amount
                </th>
                <th className="rounded-[3px] font-normal bg-[#808080] p-[2px]">
                  Secondary Installment Amount
                </th>
                <th className="rounded-[3px] font-normal bg-[#808080] p-[2px]">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#ECF1F4] rounded-md my-1">
                <td className="p-1 rounded-[3px]">1</td>
                <td className="p-1 rounded-[3px]"></td>
                <td className="p-1 rounded-[3px]"></td>
                <td className="p-1 rounded-[3px]"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="text-[#808080]">
                <td></td>
                <td className="px-6 py-3">Only Basic Amount</td>
                <td className="px-6 py-3">Only Basic Amount</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InstallmentTable;
