import { useActionState } from "react";

async function actionFunction(previousState, formData) {
  const clientName = formData.get("clientName");
  const companyName = formData.get("companyName");
  const price = Number(formData.get("price"));
  const inv = formData.get("inv");
  const quo = formData.get("quo");
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`; //cairo not UTC

  if (!clientName || !price || !inv || !quo) {
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
    inv,
    quo,
  };
}

function InvoiceForm() {
  const [state, formAction] = useActionState(actionFunction, null);

  return (
    <>
      <form action={formAction}>
        <input type="text" placeholder="Client Name" name="clientName" />

        <input type="number" placeholder="Invoice" name="inv" />

        <input type="text" placeholder="Company Name" name="companyName" />

        <input type="number" placeholder="Price in $" name="price" />

        <input type="number" placeholder="Quotation Ref" name="quo" />

        <button type="submit">Generate Invoice</button>
      </form>

      {state?.message && <p>{state.message}</p>}

      {state?.success && (
        <>
          <p>{state.clientName}</p>
          {state?.companyName && <p>{state.companyName}</p>}
          {state?.date && (
            <p>
              {(() => {
                const [year, month, day] = state.date.split("-");
                const monthNames = [
                  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
                ];
                return `[ ${day} ${monthNames[parseInt(month) - 1]} ${year} ]`;
              })()}
            </p>
          )}
          <p>Total In EGP {(state.price * 52).toLocaleString()}</p>
          <p>{`INV-00${state.inv}-EG-26`}</p>
          <p>{`QUOTATION REF: QT-00${state.quo}-EG-26`}</p>
          <button>Download Invoice.</button>
        </>
      )}
    </>
  );
}

export default InvoiceForm;