import Navbar from "../Navbar";
import Header from "../Header";

function TopicsCSPage() {
  const articles = [
    { 
      title: "Estructuras de Datos", 
      desc: "Resumen de listas, pilas, colas y árboles con ejemplos prácticos.", 
      link: "/pdfs/estructuras.pdf" 
    },
    { 
      title: "Compiladores", 
      desc: "Notas sobre análisis léxico, sintáctico y semántico en compiladores.", 
      link: "/pdfs/compiladores.pdf" 
    },
    { 
      title: "Redes Avanzadas", 
      desc: "Investigación sobre enrutamiento dinámico y protocolos modernos.", 
      link: "/pdfs/redes-avanzadas.pdf" 
    }
  ];

  return (
  
    <div className="content-page">  
    <Header/> 
    <Navbar/>
   
      <h2>CS Topics</h2>
      <div className="article-grid">
        {articles.map((a, i) => (
          <div key={i} className="article-card">
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <a href={a.link} target="_blank" rel="noopener noreferrer">
              Ver PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsCSPage;
