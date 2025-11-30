export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      
      {/* 左上 Logo - 调整为更精致的大小，颜色使用深色 */}
      <div className="text-2xl font-bold tracking-tight text-slate-900 cursor-pointer">
        商群
      </div>

      {/* 右侧导航 + CTA */}
      <div className="flex items-center gap-8">

        {/* 文本导航按钮 - 增加隐藏式响应 (hidden md:flex) 以防手机端挤压，且颜色更深 */}
        <nav className="hidden md:flex gap-6">
          <a href="/cases" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            案例
          </a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            价格
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            关于我们
          </a>
        </nav>

        {/* “免费咨询”按钮 - 专业的深色按钮 */}
        <a
          href="#"
          className="
            px-5 
            py-2.5 
            rounded-lg
            bg-slate-900 
            text-white 
            text-sm
            font-semibold
            shadow-sm
            hover:bg-blue-600 
            transition-all 
            duration-300
            active:scale-95
          "
        >
          免费咨询
        </a>
      </div>
    </header>
  );
}
