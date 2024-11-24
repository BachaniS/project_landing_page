import "./App.css";

function Header() {
  return (
    <div className="Head">
      <h1>CS5610: Web Development</h1>
      <h2>Northeastern University</h2>
      <h2>Fall 2024</h2>
    </div>
  );
}

function Authors() {
  return (
    <div className="Authors">
      <h3>Name: Somesh M Bachani</h3>
      <h4>Section: 1</h4>
      <h3>Name: Joythish Reddy</h3>
      <h4>Section: 1</h4>
    </div>
  );
}

function RelevantLinks() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ margin: "0 10px" }}>Relevant links:</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* GeekBook */}
        <figure style={{ margin: "0 10px" }}>
          <a
            className="App-link"
            href="https://a5--cs5610kanbas.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/res/logo.png"
              alt="GeekBook"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <figcaption>GeekBook</figcaption>
        </figure>
        <span>{" || "}</span>
        {/* GitHub */}
        <figure style={{ margin: "0 10px" }}>
          <a
            className="App-link"
            href="https://github.com/BachaniS/geekbook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <figcaption>Github</figcaption>
        </figure>
        <span>{" || "}</span>
        {/* GitHub Server */}
        <figure style={{ margin: "0 10px" }}>
          <a
            className="App-link"
            href="https://github.com/BachaniS/geekbook_server"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <figcaption>Github Server</figcaption>
        </figure>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Authors />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </header>
      <footer>
        <RelevantLinks />
      </footer>
    </div>
  );
}

export default App;
