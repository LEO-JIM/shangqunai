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
          // 1. 左上：科技蓝 (Electric Blue) - 代表智能与清晰
          // 替换了原来的亮紫 rgba(180,0,255)
          "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.08), transparent 50%), \
           \
           // 2. 右侧：深海蓝/岩石灰 (Deep Navy/Slate) - 代表稳重与专业
           // 替换了原来的深紫 rgba(150,0,255)
           radial-gradient(circle at 80% 40%, rgba(15, 23, 42, 0.06), transparent 60%), \
           \
           // 3. 左下：天空蓝 (Sky Blue) - 增加一点透气感
           // 替换了原来的粉紫 rgba(200,150,255)
           radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.08), transparent 50%)",
        backgroundBlendMode: "multiply",
      }}
    ></div>
  );
}
