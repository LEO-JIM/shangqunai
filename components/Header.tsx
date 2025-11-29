export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-white/60 backdrop-blur-xl border-b border-gray-200 z-50">
      {/* 左上角 Logo —— 更大一点 */}
      <div className="text-3xl font-extrabold tracking-tight">
        商群AI
      </div>

      {/* 右上角按钮 —— 苹果风紫色按钮 */}
      <a
        href="#"
        className="
          px-5 
          py-2.5 
          rounded-2xl 
          bg-purple-600 
          text-white 
          font-medium
          shadow-sm
          hover:bg-purple-700 
          transition-all 
          active:scale-95
        "
      >
        免费咨询
      </a>
    </header>
  );
}
