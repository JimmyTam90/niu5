import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({ title, children }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="mt-6 space-y-4 leading-relaxed text-slate-700">{children}</div>
        <p className="mt-10"><a href="/niu" className="font-semibold text-brand underline">Back to home</a></p>
      </main>
      <Footer />
    </>
  );
}
