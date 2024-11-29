import photo from "../../../assets/img/alvienas.jpeg";

export const About = () => {
  return (
    <div id="about" className="w-11/12 container mx-auto py-20">
      <div className="min-h-screen md:h-screen  flex flex-col md:flex-row md:space-x-10">
        <div className="content-center mx-auto w-4/5 md:w-1/2">
          <img src={photo} alt="alvienas" className="rounded-full" />
        </div>
        <div className="content-center">
          <div className="mt-5">
            <h3 className="md:text-5xl text-4xl font-bold mb-5 md:text-justify">
              About Me
            </h3>
            <p className="mb-5 md:text-justify md:pr-20">
              My name is Alvienas Yandika, commonly known as Alvin. Bachelor of
              Science in Computer Science from Sunan Gunung Djati Bandung.
              Proficient in HTML, CSS, JavaScript, TypeScript, React, Express,
              and React Native. Experienced in software development, graphic
              design, and video editing.
            </p>
            <p className="mb-5 pb-5 md:text-justify md:pr-20">
              Possess a strong understanding of design patterns, algorithms, and
              full-stack development concepts. Passionate about continuous
              learning, teamwork, and solving problems through innovative and
              creative solutions.
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
