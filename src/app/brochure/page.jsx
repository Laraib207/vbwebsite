
 "use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function PdfIcon({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff3e0" stroke="#f6b84b" />
       <path d="M8 8h5l3 3v6a1 1 0 0 1-1 1H8V8z" fill="#ffd6a5" />
      <path d="M9 14.5h6" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11h6" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="16.5" r="0.9" fill="#b45309" />
    </svg>
  );
}

function BrochureCard({ brochure, onRemove }) {
  const href = brochure.fileUrl;
  const fileName = brochure.fileName || (href ? href.split("/").pop() : "file.pdf");

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden shadow-lg border bg-white">
      <div className="relative h-48 bg-gradient-to-b from-white to-[#fff7ed] flex items-center justify-center">
        {brochure.previewImage ? (
          <Image src={brochure.previewImage} alt={brochure.title} fill className="object-cover object-center" unoptimized />
        ) : (
          <div className="flex flex-col items-center gap-3">
            <PdfIcon className="w-16 h-16" />
            <div className="text-sm font-semibold text-[#0b2b52]">{brochure.title}</div>
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-[#0b2b52]">{brochure.title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1" style={{ textAlign: "justify" }}>
          {brochure.desc}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <a
            href={href}
            download={fileName}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6b84b] text-black font-semibold shadow hover:scale-[1.02] transition"
            aria-label={`Download ${fileName}`}
          >
            Download
          </a>

          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e6e6e6] text-[#0b2b52] font-medium hover:bg-gray-50 transition"
            aria-label={`View ${fileName}`}
          >
            View
          </a>

          {onRemove && (
            <button
              onClick={() => onRemove(brochure.id)}
              className="ml-auto text-sm text-red-600 underline"
              aria-label={`Remove ${fileName}`}
              title="Remove (temporary)"
            >
              Remove
            </button>
          )}
        </div>

        <div className="mt-3 text-xs text-gray-500">
          {brochure.fileSize ? `${(brochure.fileSize / 1024).toFixed(0)} KB` : null}
          {brochure.uploadedAt ? ` • Added: ${new Date(brochure.uploadedAt).toLocaleString()}` : null}
        </div>
      </div>
    </article>
  );
}

export default function BrochurePage() {
  // Set the static brochure path to where you placed the PDF under /public.
  // You said you put brochure.pdf in public/docs/ so we reference /docs/brochure.pdf
  const initial = [
    {
      id: "official-1",
      title: "Veer Bharat — Company Brochure",
      desc: "Company profile, product portfolio and contact information. Click Download to save the PDF or View to open it in a new tab.",
      fileUrl: "/docs/brochure.pdf",
      fileName: "brochure.pdf",
    },
  ];

  const [brochures, setBrochures] = useState(initial);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      brochures.forEach((b) => {
        if (b._blobUrl) URL.revokeObjectURL(b._blobUrl);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleFileAdd(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }

    const blobUrl = URL.createObjectURL(file);
    const newBrochure = {
      id: `local-${Date.now()}`,
      title: file.name.replace(/\.[^/.]+$/, ""),
      desc: "Temporary user-uploaded brochure for preview & download (client-side only).",
      fileUrl: blobUrl,
      fileName: file.name,
      fileSize: file.size,
      uploadedAt: Date.now(),
      _blobUrl: blobUrl,
    };

    setBrochures((s) => [newBrochure, ...s]);
    e.target.value = "";
  }

  function handleRemove(id) {
    setBrochures((s) => {
      const toRemove = s.find((b) => b.id === id);
      if (toRemove && toRemove._blobUrl) URL.revokeObjectURL(toRemove._blobUrl);
      return s.filter((b) => b.id !== id);
    });
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0b0d11] py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold">Brochures & Downloads</h1>
          {/* <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            नीचे कंपनी ब्रॉशर डाउनलोड करिए या प्रीव्यू के लिए View पर क्लिक करें. स्थायी रूप से ब्रॉशर होस्ट करने के लिए
            PDF को <code className="bg-gray-100 px-1 rounded">public/docs/</code> में रखें (उदाहरण: <code className="bg-gray-100 px-1 rounded">public/docs/brochure.pdf</code>).
          </p> */}
        </header>

        {/* Add PDF control */}
        <section className="mb-8 flex flex-col md:flex-row items-center gap-4">
          <label className="inline-flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-md border cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0b2b52]" aria-hidden>
              <path d="M12 5v14" stroke="#0b2b52" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12h14" stroke="#0b2b52" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-medium text-[#0b2b52]">Add PDF (temporary)</span>
            <input
              ref={fileInputRef}
              onChange={handleFileAdd}
              accept="application/pdf"
              type="file"
              className="hidden"
            />
          </label>

          <div className="text-sm text-gray-500">
            <div>Temporary uploads are client-side only — use them to preview downloads quickly.</div>
            <div className="mt-1">For permanent availability, add PDFs to <code className="bg-gray-100 px-1 rounded">public/docs/</code> and redeploy.</div>
          </div>
        </section>

        {/* Grid of brochure cards */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brochures.map((b) => (
              <BrochureCard key={b.id} brochure={b} onRemove={b.id.startsWith("local-") ? handleRemove : undefined} />
            ))}
          </div>
        </section>

        {/* Short admin note (clean) */}
        {/* <section className="mt-10 p-4 bg-white rounded-md border">
          <h4 className="font-semibold mb-2">Permanent hosting (quick)</h4>
          <p className="text-sm text-gray-600">
            1) Add your PDF to <code className="bg-gray-100 px-1 rounded">public/docs/</code> (example: <code className="bg-gray-100 px-1 rounded">public/docs/brochure.pdf</code>).
            <br />
            2) Commit & push, then deploy. The file will be available at <code className="bg-gray-100 px-1 rounded">/docs/brochure.pdf</code>.
          </p>
        </section> */}
      </div>
    </main>
  );
}