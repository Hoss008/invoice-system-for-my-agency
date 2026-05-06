//Form
import { useActionState } from "react";

async function actionFunction(previousState, formData) {
  const Clientname = formData.get("name");
  const date = formData.get("date");
  const price = formData.get("price");

  return {
    message: "Form submitted",
    success: true,
  };
}

function InvoiceForm() {
  const [state, formAction] = useActionState(actionFunction, null);

  return (
    <>
      <form action={formAction}>
        <input type="text" />
        <input type="number" />
      </form>
    </>
  );
}

export default InvoiceForm;
