// src/components/sections/Tech.jsx

function Tech() {
  const articles = [
    { title: "Novedades en IA", link: "/pdfs/ia.pdf" },
    { title: "5G y su Impacto", link: "/pdfs/5g.pdf" },
    { title: "Tendencias en Cloud", link: "/pdfs/cloud.pdf" }
  ];

  return (
    <div className="content-home">
      <h2>Tech</h2>
      <div className="article-list">
        {articles.map((a, i) => (
          <a
            key={i}
            href={a.link}
            target="_blank"
            rel="noopener noreferrer"
            className="article-item"
          >
            {a.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Tech;