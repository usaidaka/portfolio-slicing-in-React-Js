import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import Header from "./Header";
import MainContent from "./MainContent";
import Nav from "./Nav";

function App() {
  return (
    <>
      <body>
        <main>
          <section>
            <Header />
            <Nav />
            <AsideLeft />
            <MainContent />
            <AsideRight />
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
