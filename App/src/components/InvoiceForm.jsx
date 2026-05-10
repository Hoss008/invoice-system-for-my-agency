//Form
import { useActionState } from "react";

async function actionFunction(previousState, formData) {
  const clientName = formData.get("clientName");
  const companyName = formData.get("companyName");
  const price = formData.get("price");
  const date = new Date().toISOString().split("T")[0]; // Today's date

  if (!clientName || !price) {
    return {
      success: false,
      message: "Enter all fields",
    };
  }

  return {
    success: true,
    clientName,
    companyName,
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

        <input type="text" placeholder="Company Name" name="companyName" />

        <input type="number" placeholder="Price" name="price" />

        <button type="submit">Submit Form</button>
      </form>

      {state?.message && <p>{state.message}</p>}

      {state?.success && (
        <>
          <p>{state.clientName}</p>
          {state?.companyName && <p>{state.companyName}</p>}
          {state?.date && (
            <p>
              {(() => {
                const date = new Date(state.date);
                const day = String(date.getDate()).padStart(2, "0");
                const month = date
                  .toLocaleString("en-US", { month: "short" })
                  .toUpperCase();
                const year = date.getFullYear();
                return `[ ${day} ${month} ${year} ]`;
              })()}
            </p>
          )}
          <p>${state.price}</p>
        </>
      )}
    </>
  );
}

export default InvoiceForm;
