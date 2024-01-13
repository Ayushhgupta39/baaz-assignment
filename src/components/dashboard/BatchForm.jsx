import Button from "../Button";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function BatchForm() {
  return (
    <div className="VStack_container">
      <div className="VStack_container batchFrom_container">
        <FormInput
          label={"Batch Name"}
          placeholder={"nagulpranav2107@gmail.com"}
          required={true}
          name={"email"}
          type={"text"}
        />
        <FormInput
          label={"Code"}
          placeholder={"nagulpranav2107@gmail.com"}
          required={true}
          name={"code"}
          type={"text"}
        />
        <FormSelect
          label={"Course"}
          options={["-Select a value-", "Option 2"]}
          required={true}
          name={"course"}
        />
        <FormInput
          label={"Start date"}
          type={"date"}
          required={true}
          name={"startDate"}
        />
        <FormInput
          label={"End date"}
          type={"date"}
          required={true}
          name={"endDate"}
        />
        <FormInput
          label={"Total Amount"}
          required={true}
          name={"totalAmount"}
          type={"number"}
        />
        <FormInput
          label={"Member Amount"}
          required={true}
          name={"code"}
          type={"number"}
        />
        <FormSelect
          label={"Running Week Day name"}
          options={["-None-", "Option 2"]}
          required={true}
          name={"runningWeek"}
        />
        <FormSelect
          label={"Batch CRM"}
          options={["-None-", "Option 2"]}
          required={true}
          name={"batchCROM"}
        />
        <FormSelect
          label={"Company billing"}
          options={["-None-", "Option 2"]}
          required={true}
          name={"companyBilling"}
        />
        <FormSelect
          label={"Payment Option Show"}
          options={["Yes", "No"]}
          required={true}
          name={"paymentShow"}
        />
      </div>

      <div className="button_container">
        <Button>Next</Button>
      </div>
    </div>
  );
}

export default BatchForm;
