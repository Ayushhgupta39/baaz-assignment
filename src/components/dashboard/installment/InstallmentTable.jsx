function InstallmentTable() {
  return (
    <div className="flex flex-col">
      <div className="bg-custom_blue text-white p-3 rounded-lg">
        <p className="text-xl font-medium">Installment details</p>
      </div>

      <div className="my-1">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-[10px] text-white">
              <tr>
                <th scope="col" className="rounded-md font-normal bg-[#808080] p-1">
                  Installment No.
                </th>
                <th scope="col" className="rounded-md font-normal bg-[#808080] p-1">
                  Primary Installment Amount
                </th>
                <th scope="col" className="rounded-md font-normal bg-[#808080] p-1">
                  Secondary Installment Amount
                </th>
                <th scope="col" className="rounded-md font-normal bg-[#808080] p-1">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#ECF1F4] rounded-md my-1">
                <td className="p-1">1</td>
                <td className="p-1"></td>
                <td className="p-1"></td>
                <td className="p-1"></td>
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
