export default function BackgroundNoise() {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        z-0
        opacity-40
      "
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.08), transparent 50%), \
           \
           radial-gradient(circle at 80% 40%, rgba(15, 23, 42, 0.06), transparent 60%), \
           \
           radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.08), transparent 50%)",
        backgroundBlendMode: "multiply",
      }}
    ></div>
  );
}
