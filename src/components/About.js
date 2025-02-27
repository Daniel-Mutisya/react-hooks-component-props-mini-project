import blogData from "../data/blog";
function About() {
  const { image, about } = blogData;
  return (
    <aside>
      <img
        src={image ? image : "https://via.placeholder.com/215"}
        alt={"blog logo"}
      />
      <p>{about}</p>
    </aside>
  );
}
export default About;