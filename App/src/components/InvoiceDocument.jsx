//Figma

function InvoiceDocument() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-10 bg-white shadow-md text-gray-800 font-sans">
        <header class="flex justify-between items-start mb-16 border-b pb-8">
          <div>
            <h1 class="text-3xl font-bold tracking-tight text-gray-900">
              NorqueStudios™
            </h1>
            <p class="text-sm text-gray-500 mt-1 hover:text-blue-600">
              <a href="mailto:hello@norquestudios.com">
                hello@norquestudios.com
              </a>
            </p>
          </div>
          <div class="text-right">
            <h2 class="text-4xl font-black text-gray-200 uppercase tracking-widest">
              Invoice
            </h2>
            <p class="text-lg font-semibold mt-2 text-gray-800">
              INV-001-EG-26
            </p>
            <p class="text-sm text-gray-500 uppercase tracking-wide">
              28 APR 2026
            </p>
          </div>
        </header>

        <div class="grid grid-cols-2 gap-12 mb-16">
          <div>
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Billed From
            </h3>
            <p class="font-semibold text-gray-800">NorqueStudios™</p>
            <p class="text-sm text-gray-600">hello@norquestudios.com</p>
          </div>
          <div>
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Billed To
            </h3>
            <p class="font-semibold text-gray-800">Arch. Mohamed Emad</p>
            <p class="text-sm text-gray-600">
              Fusion Form - Architecture Development
            </p>
            <p class="text-sm text-gray-600">Egypt</p>
          </div>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg mb-8 text-sm text-gray-700 border border-gray-100">
          <p>
            <span class="font-bold">[FIRST MILESTONE PAYMENT]</span> - Fusion
            Form | Website Portfolio.
          </p>
          <p>
            50% upfront payment based on the approved quotation [QT-001-EG-26].
          </p>
        </div>

        <div class="mb-12">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-800">
                <th class="py-3 px-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Core Deliverables
                </th>
                <th class="py-3 px-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                  Total (USD)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-200">
                <td class="py-4 px-2 text-sm text-gray-800">
                  50% Down Payment - Fusion Form | Website Portfolio
                </td>
                <td class="py-4 px-2 text-sm text-gray-800 font-medium text-right">
                  $250.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">
              Payment Information
            </h3>

            <div class="mb-4">
              <p class="text-xs font-bold text-gray-800 uppercase">
                Bank Transfer
              </p>
              <p class="text-sm text-gray-600 mt-1">
                <span class="font-semibold">Bank:</span> QATAR NATIONAL BANK
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-semibold">Acc No:</span> 1020861588135
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-semibold">IBAN:</span> EG32 0037 0027 0818
                1020 8615 8813 5
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-semibold">Swift Code:</span> QNBAEGCXXXX
              </p>
            </div>

            <div>
              <p class="text-xs font-bold text-gray-800 uppercase">
                Other Methods
              </p>
              <p class="text-sm text-gray-600 mt-1">
                <span class="font-semibold">Instapay:</span> (+20) 110 0263391
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-semibold">PayPal:</span>{" "}
                norquestuduios.paypal.me
              </p>
            </div>
          </div>

          <div class="flex flex-col justify-end">
            <div class="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold text-gray-600">
                  Subtotal
                </span>
                <span class="text-sm font-semibold text-gray-800">$250.00</span>
              </div>
              <div class="flex justify-between items-center border-t border-gray-200 pt-4 mb-2">
                <span class="text-base font-bold text-gray-900">
                  Total in USD
                </span>
                <span class="text-xl font-black text-gray-900">$250.00</span>
              </div>
              <div class="flex justify-between items-center pt-2">
                <span class="text-sm font-medium text-gray-500">
                  Total in EGP
                </span>
                <span class="text-sm font-bold text-gray-600">EGP 13,000</span>
              </div>
            </div>
          </div>
        </div>

        <footer class="border-t pt-8 text-center sm:text-left">
          <div class="text-xs text-gray-500 space-y-1 mb-6">
            <p>
              Payment preferably to be paid in full no later than 14 days after
              receiving this invoice.
            </p>
            <p>
              For International Payments, please ensure bank/transfer fees are
              covered from your side.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row justify-between items-center text-xs font-bold text-gray-400 tracking-wider">
            <p>
              THANK YOU FOR YOUR TRUST. WE LOOK FORWARD TO WORKING WITH YOU
              AGAIN!
            </p>
            <p class="mt-2 sm:mt-0">QUOTATION REF: QT-005-EG-26</p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default InvoiceDocument;
