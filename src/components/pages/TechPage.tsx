import Navbar from "../Navbar";
import Header from "../Header";

function TechPage() {
  const articles = [
    { 
      title: "Novedades en IA", 
      desc: "Exploración de las últimas tendencias en inteligencia artificial.", 
      link: "/pdfs/ia.pdf" 
    },
    { 
      title: "5G y su Impacto", 
      desc: "Cómo la red 5G está transformando la conectividad global.", 
      link: "/pdfs/5g.pdf" 
    },
    { 
      title: "Tendencias en Cloud", 
      desc: "Nube híbrida, multicloud y lo que viene en infraestructura digital.", 
      link: "/pdfs/cloud.pdf" 
    }
  ];

  return (
    <div className="content-page">
    <Header/>
    <Navbar/>
      <h2>Tech</h2>
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

export default TechPage;
