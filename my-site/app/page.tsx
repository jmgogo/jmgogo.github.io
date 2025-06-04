export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
      <div className="p-8 space-y-6">
        <h1 className="text-4xl font-bold">Font Styles</h1>
        <div className="text-lg space-y-4">
          <p className=" font-light italic">This is Compagnon Light Italic.</p>

          <p className=" font-light">This is Compagnon Light.</p>
          <p className=" font-normal">This is Compagnon Roman.</p>

          <p className=" font-bold italic">This is Compagnon Bold.</p>
          <p className=" font-bold">This is Compagnon Medium.</p>
        </div>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
