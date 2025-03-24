export default function Section({ title, children }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center snap-start w-full">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-4 text-lg">{children}</p>
    </section>
  );
}
