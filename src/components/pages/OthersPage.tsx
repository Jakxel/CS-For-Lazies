import Header from "../Header";
import Navbar from "../Navbar";

function OthersPage() {
  const articles = [
    { 
      title: "Reflexiones Personales", 
      desc: "Pensamientos y reflexiones sobre diferentes aspectos de la vida.", 
      link: "/pdfs/reflexiones.pdf" 
    },
    { 
      title: "Notas de Viaje", 
      desc: "Experiencias y aprendizajes recopilados durante mis viajes.", 
      link: "/pdfs/viaje.pdf" 
    },
    { 
      title: "Random Ideas", 
      desc: "Ideas espontáneas que merecen ser exploradas y compartidas.", 
      link: "/pdfs/random.pdf" 
    }
  ];

  return (
    <div className="content-page">
    <Header/>
    <Navbar/>
      <h2>Others</h2>
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

export default OthersPage;
