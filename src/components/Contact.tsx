const Contact = () => {
  return (
    <section id="contact" className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
        <p className="text-gray-700 mb-8">
          Whether you're looking for a freelance developer or just want to
          connect — feel free to reach out.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:kafia.adamm@gmail.com"
            className="text-blue-600 hover:underline text-lg"
          >
            Email Me
          </a>
          <a
            href="https://upwork.com/freelancers/adamkafia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Upwork profile
          </a>
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/adam-kafia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adam-kafia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
