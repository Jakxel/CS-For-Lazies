// src/components/sections/Others.jsx

function Others() {
  const articles = [
    { title: "Reflexiones Personales", link: "/pdfs/reflexiones.pdf" },
    { title: "Notas de Viaje", link: "/pdfs/viaje.pdf" },
    { title: "Random Ideas", link: "/pdfs/random.pdf" }
  ];

  return (
    <div className="content-home">
      <h2>Others</h2>
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

export default Others;