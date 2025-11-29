export default function CornerGradient() {
  return (
    <div
      className="
        absolute
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-gradient-to-br
        from-purple-200/40
        via-purple-100/10
        to-transparent
        rounded-bl-[300px]
        blur-3xl
        -z-10
        pointer-events-none
      "
    />
  );
}
