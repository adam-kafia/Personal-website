const Header = () => {
  return (
    <header className="w-full bg-white text-gray-900 py-10 px-6 md:px-12 border-b">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <img
          src="/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-6 shadow-sm"
        />

        <h1 className="text-3xl md:text-4xl font-bold">Adam Kafia</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-2">
          Full Stack Developer | React & TypeScript Enthusiast
        </p>

        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-xl">
          Building modern, maintainable web apps with a focus on performance and
          simplicity.
        </p>
      </div>
    </header>
  );
};

export default Header;
