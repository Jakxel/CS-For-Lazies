import Header from "../Header";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Content from "../Content";
function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          margin:"0 auto",
          padding:"3rem 2rem",
          fontFamily:"-apple-system, BlinkMacSystemFont",
          width:"50%"
        }}
      >
        <div
          className="display">
          <Header />
          <Navbar />
          <div style={{ display: "flex" }}>
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
