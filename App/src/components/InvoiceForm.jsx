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
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md border border-black p-6">
        <h1 className="text-xl font-semibold tracking-tight">
          Invoice Generator
        </h1>
        <p className="text-xs uppercase tracking-widest text-black/60 mt-2">
          Minimal form
        </p>

        <form action={formAction} className="mt-6 grid gap-4">
          <input
            type="text"
            placeholder="Client Name"
            name="clientName"
            className="w-full border border-black bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="number"
            placeholder="Invoice"
            name="inv"
            className="w-full border border-black bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            className="w-full border border-black bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="number"
            placeholder="Price in $"
            name="price"
            className="w-full border border-black bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />

          <input
            type="number"
            placeholder="Quotation Ref"
            name="quo"
            className="w-full border border-black bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full border border-black bg-black px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
          >
            Generate Invoice
          </button>
        </form>

        {state?.message && (
          <p className="mt-4 border border-black px-3 py-2 text-xs uppercase tracking-widest">
            {state.message}
          </p>
        )}

        {state?.success && (
          <div className="mt-6">
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
              className="inline-flex items-center border border-black bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Download Invoice
            </PDFDownloadLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoiceForm;
