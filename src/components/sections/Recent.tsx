function Recent() {
  const articles = [
    { title: "Introducción a Algoritmos", link: "/pdfs/algoritmos.pdf" },
    { title: "Redes de Computadoras", link: "/pdfs/redes.pdf" },
    { title: "Fundamentos de Sistemas Operativos", link: "/pdfs/sistemas.pdf" }
  ];

  return (
    <div className="content-home">
      <h2>News</h2>
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

export default Recent;