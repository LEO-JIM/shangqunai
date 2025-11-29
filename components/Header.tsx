export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur border-b border-gray-200 z-50">
      <div className="text-2xl font-bold">商群AI</div>

      <a
        href="#"
        className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
      >
        免费咨询
      </a>
    </header>
  );
}
