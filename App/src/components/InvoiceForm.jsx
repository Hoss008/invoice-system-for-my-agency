//Form
import { useActionState } from "react";

async function actionFunction(previousState, formData) {
  const clientName = formData.get("clientName");
  const date = formData.get("date");
  const price = formData.get("price");

  if (!clientName || !date || !price) {
    return {
      success: false,
      message: "Enter all fields",
    };
  }

  return {
    success: true,
    clientName,
    date,
    price,
  };
}

function InvoiceForm() {
  const [state, formAction] = useActionState(actionFunction, null);

  return (
    <>
      <form action={formAction}>
        <input type="text" placeholder="Client Name" name="clientName" />

        <input type="text" placeholder="Date" name="date" />

        <input type="number" placeholder="Price" name="price" />

        <button type="submit">Submit Form</button>
      </form>

      {state?.message && <p>{state.message}</p>}

      {state?.success && (
        <>
          <p>{state.clientName}</p>
          <p>{state.date}</p>
          <p>{state.price}</p>
        </>
      )}
    </>
  );
}

export default InvoiceForm;
