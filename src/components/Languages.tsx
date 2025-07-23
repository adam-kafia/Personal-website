const Languages = () => {
  return (
    <section id="languages" className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Languages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
          <div>
            <p className="text-lg font-medium">Arabic</p>
            <p className="text-sm text-gray-600">Native</p>
          </div>
          <div>
            <p className="text-lg font-medium">French</p>
            <p className="text-sm text-gray-600">Fluent</p>
          </div>
          <div>
            <p className="text-lg font-medium">English</p>
            <p className="text-sm text-gray-600">Bilingual</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;