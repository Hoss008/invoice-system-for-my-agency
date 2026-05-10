import { Document, Page, View, Text, StyleSheet, Font } from "@react-pdf/renderer";

// Register your font — replace with your actual font file path
Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/Inter-Medium.ttf", fontWeight: 500 },
    { src: "/fonts/Inter-Bold.ttf", fontWeight: 700 },
  ],
});

const EGP_RATE = 52;

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 9,
    color: "#111111",
    backgroundColor: "#ffffff",
    paddingTop: 48,
    paddingBottom: 48,
    paddingHorizontal: 48,
  },

  // ── Section 1 — Header ──
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 36,
  },
  brandName: {
    fontSize: 26,
    fontWeight: 700,
    letterSpacing: -0.5,
  },
  invoiceLabel: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 3,
    textAlign: "right",
  },

  // ── Section 2 — Billing info ──
  billingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 36,
  },
  billingBlock: {
    flexDirection: "column",
    gap: 2,
  },
  label: {
    fontSize: 7,
    fontWeight: 700,
    color: "#888888",
    letterSpacing: 1,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  billingName: {
    fontSize: 9,
    fontWeight: 700,
    color: "#111111",
  },
  billingDetail: {
    fontSize: 9,
    color: "#555555",
  },
  invoiceNumber: {
    fontSize: 16,
    fontWeight: 700,
    textAlign: "right",
    marginBottom: 2,
  },
  invoiceDate: {
    fontSize: 9,
    color: "#555555",
    textAlign: "right",
  },

  // ── Section 3 — Line items ──
  tableContainer: {
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#111111",
    paddingBottom: 6,
    marginBottom: 6,
  },
  tableHeaderText: {
    fontSize: 7,
    fontWeight: 700,
    color: "#888888",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#cccccc",
  },
  tableCell: {
    fontSize: 9,
    color: "#111111",
  },

  // ── Totals ──
  totalsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 36,
  },
  totalsBlock: {
    width: "45%",
  },
  totalsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  totalsLabel: {
    fontSize: 8,
    color: "#888888",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  totalsValue: {
    fontSize: 8,
    color: "#111111",
    fontWeight: 500,
  },
  egpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 6,
  },
  egpLabel: {
    fontSize: 18,
    fontWeight: 700,
    color: "#111111",
  },
  egpValue: {
    fontSize: 18,
    fontWeight: 700,
    color: "#111111",
  },

  // ── Section 4 — Payment information ──
  paymentDivider: {
    borderTopWidth: 0.5,
    borderTopColor: "#cccccc",
    marginBottom: 16,
  },
  paymentTitle: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  paymentRow: {
    flexDirection: "row",
    gap: 24,
  },
  paymentLeft: {
    width: "45%",
    flexDirection: "column",
    gap: 12,
  },
  paymentRight: {
    width: "50%",
  },
  paymentMethodLabel: {
    fontSize: 7,
    fontWeight: 700,
    color: "#111111",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  paymentDetail: {
    fontSize: 8,
    color: "#444444",
    marginBottom: 2,
    lineHeight: 1.5,
  },
  paymentNote: {
    fontSize: 8,
    color: "#333333",
    lineHeight: 1.6,
    marginBottom: 10,
  },
  thankYou: {
    fontSize: 8,
    color: "#333333",
    lineHeight: 1.6,
  },

  // ── Section 5 — Footer ──
  footer: {
    position: "absolute",
    bottom: 36,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: "#cccccc",
    paddingTop: 10,
  },
  footerText: {
    fontSize: 8,
    color: "#888888",
    fontWeight: 700,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});

function formatDate(dateStr) {
  const date = new Date(dateStr + "T12:00:00");
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = date.getFullYear();
  return `[ ${day} ${month} ${year} ]`;
}

function InvoiceDocument({ clientName, companyName, date, price, inv, quo }) {
  const usd = parseFloat(price);
  const egp = (usd * EGP_RATE).toLocaleString();
  const invoiceNumber = `INV-${inv}-EG-26`;
  const quotationRef = `QT-${quo}-EG-26`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* ── Section 1 — Header ── */}
        <View style={styles.header}>
          <Text style={styles.brandName}>NorqueStudios™</Text>
          <Text style={styles.invoiceLabel}>INVOICE</Text>
        </View>

        {/* ── Section 2 — Billing info ── */}
        <View style={styles.billingRow}>
          {/* Billed From */}
          <View style={styles.billingBlock}>
            <Text style={styles.label}>Billed From</Text>
            <Text style={styles.billingName}>NorqueStudios™</Text>
            <Text style={styles.billingDetail}>[ hello@norquestudios.com ]</Text>
          </View>

          {/* Billed To */}
          <View style={styles.billingBlock}>
            <Text style={styles.label}>Billed To</Text>
            <Text style={styles.billingName}>{clientName}</Text>
            {companyName ? (
              <Text style={styles.billingDetail}>{companyName}</Text>
            ) : null}
            <Text style={styles.billingDetail}>Egypt</Text>
          </View>

          {/* Invoice number + date */}
          <View>
            <Text style={styles.invoiceNumber}>{invoiceNumber}</Text>
            <Text style={styles.invoiceDate}>{formatDate(date)}</Text>
          </View>
        </View>

        {/* ── Section 3 — Line items ── */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Core Deliverables</Text>
            <Text style={styles.tableHeaderText}>Total (USD)</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>
              50% Down Payment — {companyName || clientName} | Website Portfolio
            </Text>
            <Text style={styles.tableCell}>${usd.toFixed(2)}</Text>
          </View>
        </View>

        {/* ── Totals ── */}
        <View style={styles.totalsContainer}>
          <View style={styles.totalsBlock}>
            <View style={styles.totalsRow}>
              <Text style={styles.totalsLabel}>Subtotal</Text>
              <Text style={styles.totalsValue}>${usd.toFixed(2)}</Text>
            </View>
            <View style={styles.totalsRow}>
              <Text style={styles.totalsLabel}>Total in USD</Text>
              <Text style={styles.totalsValue}>${usd.toFixed(2)}</Text>
            </View>
            <View style={styles.egpRow}>
              <Text style={styles.egpLabel}>Total in EGP</Text>
              <Text style={styles.egpValue}>EGP {egp}</Text>
            </View>
          </View>
        </View>

        {/* ── Section 4 — Payment information ── */}
        <View style={styles.paymentDivider} />
        <Text style={styles.paymentTitle}>Payment Information</Text>

        <View style={styles.paymentRow}>
          {/* Left — bank details */}
          <View style={styles.paymentLeft}>
            <View>
              <Text style={styles.paymentMethodLabel}>Bank Transfer</Text>
              <Text style={styles.paymentDetail}>QATAR NATIONAL BANK</Text>
              <Text style={styles.paymentDetail}>[ ACC NO. ]  1020861588135</Text>
              <Text style={styles.paymentDetail}>[ IBAN ]  EG32 0037 0027 0818 1020 8615 8813 5</Text>
              <Text style={styles.paymentDetail}>[ SWIFT CODE ]  QNBAEGCXXXX</Text>
            </View>
            <View>
              <Text style={styles.paymentMethodLabel}>Other Methods</Text>
              <Text style={styles.paymentDetail}>[ INSTAPAY ]  (+20) 110 0263391</Text>
              <Text style={styles.paymentDetail}>[ PAYPAL ]  norquestuduios.paypal.me</Text>
            </View>
          </View>

          {/* Right — payment note */}
          <View style={styles.paymentRight}>
            <Text style={styles.paymentNote}>
              [ FIRST MILESTONE PAYMENT ] — {companyName || clientName} | Website Portfolio.{"\n"}
              50% upfront payment based on the approved quotation [{quotationRef}].{"\n"}
              Payment preferably to be paid in full no later than 7 days after receiving
              this invoice. For International Payments, please ensure bank/transfer fees
              are covered from your side.
            </Text>
            <Text style={styles.thankYou}>
              Thank you for your trust. We look forward to working with you again!
            </Text>
          </View>
        </View>

        {/* ── Section 5 — Footer ── */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>NORQUE STUDIOS™</Text>
          <Text style={styles.footerText}>Quotation Ref: {quotationRef}</Text>
        </View>

      </Page>
    </Document>
  );
}

export default InvoiceDocument;