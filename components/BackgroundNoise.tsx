export default function BackgroundNoise() {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        z-0
        opacity-20
      "
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(180,0,255,0.10), transparent 60%), \
           radial-gradient(circle at 80% 40%, rgba(150,0,255,0.08), transparent 70%), \
           radial-gradient(circle at 40% 80%, rgba(200,150,255,0.10), transparent 70%)",
        backgroundBlendMode: "soft-light",
      }}
    ></div>
  );
}
