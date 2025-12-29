import Header from "./Layout/header/Header";
import Main from "./Layout/main/Main";

function App() {
  return (
    <div className="container mx-auto px-13">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer className="flex flex-col text-center my-10">
        <p>Copyright © 2024. All rights reserved</p>
        <p>Made by Web3Templates</p>
      </footer>
    </div>
  );
}

export default App;
