import AboutusEduChacha from "@/components/AboutusEduChacha";

export async function generateMetadata() {
  return {
    title: "About Us",
    description:
      "Welcome to EduChacha - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const About = () => {
  return (
    <>
      <AboutusEduChacha />
    </>
  );
};

export default About;
