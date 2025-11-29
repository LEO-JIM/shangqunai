export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-white border-b border-gray-200 z-50">
      
      {/* 左上 Logo */}
      <div className="text-4xl font-semibold tracking-tight">
        商群AI
      </div>

      {/* 右侧导航 + CTA */}
      <div className="flex items-center gap-8">

        {/* 文本导航按钮 */}
        <a href="#" className="text-gray-700 hover:text-black transition">
          案例
        </a>
        <a href="#" className="text-gray-700 hover:text-black transition">
          价格
        </a>
        <a href="#" className="text-gray-700 hover:text-black transition">
          关于我们
        </a>

        {/* “免费咨询”按钮（紫色苹果风） */}
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
      </div>
    </header>
  );
}
