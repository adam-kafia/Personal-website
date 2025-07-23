const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gray-900 text-gray-300 py-10 px-6 md:px-12 border-b"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          I'm a Full-Stack Developer with 3 years of experience, specializing in
          backend development using TypeScript, JavaScript, NestJS, and AWS. I
          also build dynamic, responsive front-end interfaces with React. I’m
          passionate about delivering secure, scalable solutions and enjoy
          working across the entire stack — from cloud infrastructure to user
          experience.
        </p>
      </div>
    </section>
  );
};

export default About;
