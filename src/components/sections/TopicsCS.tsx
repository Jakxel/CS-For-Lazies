// src/components/sections/TopicsCS.jsx

function TopicsCS() {
  const articles = [
    { title: "Estructuras de Datos", link: "/pdfs/estructuras.pdf" },
    { title: "Compiladores", link: "/pdfs/compiladores.pdf" },
    { title: "Redes Avanzadas", link: "/pdfs/redes-avanzadas.pdf" }
  ];

  return (
    <div className="content-home">
      <h2>CS - Topics</h2>
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

export default TopicsCS;