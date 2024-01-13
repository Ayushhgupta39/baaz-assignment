import Button from "../Button";
import InstallmentCard from "./installment/InstallmentCard";
import InstallmentTable from "./installment/InstallmentTable";

function InstallmentDetails() {
  return (
    <div className="flex flex-col m-3">
      <div>
        <InstallmentTable />

        <div className="flex flex-col my-4">
          <Button style={{ width: "50%" }}>Add Installment Details</Button>
          <small className="text-[#808080]">To Installment Details</small>
        </div>

        <div>
          <InstallmentCard label={"Primary student T&C"} />
          <InstallmentCard label={"T&C 50% Participation"} />
          <InstallmentCard label={"Secondary Student T&C"} />
        </div>
      </div>
    </div>
  );
}

export default InstallmentDetails;
