const Languages = () => {
  return (
    <section id="languages" className="section-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-300">Languages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
          <div>
            <p className="text-lg font-medium text-gray-400">Arabic</p>
            <p className="text-sm text-gray-400">Native</p>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-400">French</p>
            <p className="text-sm text-gray-400">Fluent</p>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-400">English</p>
            <p className="text-sm text-gray-400">Bilingual</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;