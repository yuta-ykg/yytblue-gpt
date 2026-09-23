"use client";
import { FileDown } from "lucide-react";
export default function PrintButton() {
  return <button type="button" className="pdf-button" onClick={() => window.print()} title="印刷画面でPDFとして保存"><FileDown size={18} aria-hidden="true"/>PDFに保存</button>;
}
