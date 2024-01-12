import BatchForm from "./BatchForm";
import InstallmentDetails from "./InstallmentDetails";

function AddBatch() {
  return (
    <div className="flex flex-col m-2 border border-gray-300 p-3 rounded-lg">
      <div className="my-2">
        <h3 className="font-medium text-3xl">Add Batch</h3>
      </div>

      <div className="flex ">
        <div className="w-[45%]">
          <BatchForm />
        </div>
        <div className="w-[55%]">
          <InstallmentDetails />
        </div>
      </div>
    </div>
  );
}

export default AddBatch;
