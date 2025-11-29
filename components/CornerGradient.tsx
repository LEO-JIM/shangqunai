export default function CornerGradient() {
  return (
    <div
      className="
        absolute
        top-0
        right-0
        w-[420px]
        h-[420px]
        bg-gradient-to-br
        from-purple-300/60
        via-purple-200/40
        to-transparent
        blur-2xl
        rounded-bl-[300px]
        opacity-80
        pointer-events-none
        -z-10
      "
    />
  );
}
