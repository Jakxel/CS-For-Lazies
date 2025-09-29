// src/components/Content.jsx
import "../styles/Content.css"
import Recent from "./sections/Recent";
import TopicsCS from "./sections/TopicsCS";
import Tech from "./sections/Tech";
import Others from "./sections/Others";

function Content() {
  return (
    <main className="content">
      <section id="recent">
        <Recent />
      </section>
      <section id="topics-cs">
        <TopicsCS />
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="others">
        <Others />
      </section>
    </main>
  );
}

export default Content;