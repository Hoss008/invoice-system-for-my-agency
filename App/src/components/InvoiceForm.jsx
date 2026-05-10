import { useActionState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceDocument from "./InvoiceDocument";

async function actionFunction(previousState, formData) {
  const clientName = formData.get("clientName");
  const companyName = formData.get("companyName");
  const price = Number(formData.get("price"));
  const inv = formData.get("inv");
  const quo = formData.get("quo");
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`; //cairo not

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
        <PDFDownloadLink
          document={
            <InvoiceDocument
              clientName={state.clientName}
              companyName={state.companyName}
              date={state.date}
              price={state.price}
              inv={state.inv}
              quo={state.quo}
            />
          }
          fileName={`INV-${state.inv}-EG-26.pdf`}
        >
          Download Invoice
        </PDFDownloadLink>
      )}
    </>
  );
}

export default InvoiceForm;
