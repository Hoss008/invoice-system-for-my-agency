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
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl border-2 border-black bg-white">
        {/* Header */}
        <div className="border-b-2 border-black px-8 py-6 bg-black text-white">
          <h1 className="text-3xl font-bold">Invoice Generator</h1>
        </div>

        {/* Form Section */}
        <form action={formAction} className="px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider mb-2">
                Client Name
              </label>
              <input
                type="text"
                placeholder="Client Name"
                name="clientName"
                className="w-full px-3 py-2 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider mb-2">
                Invoice
              </label>
              <input
                type="number"
                placeholder="Invoice"
                name="inv"
                className="w-full px-3 py-2 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Company Name"
                name="companyName"
                className="w-full px-3 py-2 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider mb-2">
                Quotation Ref
              </label>
              <input
                type="number"
                placeholder="Quotation Ref"
                name="quo"
                className="w-full px-3 py-2 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs uppercase font-bold tracking-wider mb-2">
                Price in $
              </label>
              <input
                type="number"
                placeholder="Price in $"
                name="price"
                className="w-full px-3 py-2 border border-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Error */}
          {state?.message && (
            <div className="mb-8 bg-red-100 border-2 border-red-400 px-4 py-3">
              <p className="text-red-800 font-semibold text-sm">
                {state.message}
              </p>
            </div>
          )}

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Generate Invoice
            </button>
          </div>
        </form>

        {/* Preview */}
        {state?.success && (
          <div className="border-t-2 border-black px-8 py-8 bg-gray-50">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Client Info */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
                  Client Details
                </p>
                <p className="text-2xl font-bold">{state.clientName}</p>
                {state?.companyName && (
                  <p className="text-gray-700 mt-1">{state.companyName}</p>
                )}
                {state?.date && (
                  <p className="text-gray-600 text-sm mt-4">
                    {(() => {
                      const [year, month, day] = state.date.split("-");
                      const monthNames = [
                        "JAN",
                        "FEB",
                        "MAR",
                        "APR",
                        "MAY",
                        "JUN",
                        "JUL",
                        "AUG",
                        "SEP",
                        "OCT",
                        "NOV",
                        "DEC",
                      ];
                      return `[ ${day} ${monthNames[parseInt(month) - 1]} ${year} ]`;
                    })()}
                  </p>
                )}
              </div>

              {/* Invoice Info */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">
                  Invoice Details
                </p>
                <p className="text-lg font-bold">{`INV-00${state.inv}-EG-26`}</p>
                <p className="text-gray-700 text-sm mt-1">{`QUOTATION REF: QT-00${state.quo}-EG-26`}</p>

                {/* Totals */}
                <div className="mt-6 border-t-2 border-black pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                    Total USD
                  </p>
                  <p className="text-2xl font-bold">
                    ${state.price.toLocaleString()}
                  </p>

                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-4 mb-1">
                    Total EGP
                  </p>
                  <p className="text-3xl font-bold">
                    EGP {(state.price * 52).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-end">
              <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                Download Invoice.
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoiceForm;
