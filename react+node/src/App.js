import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import DiscussionList from './components/DiscussionList';

function App() {
  return (
    <div className="App">
      <main>
      <header>
        <Header />
      </header>
      <section id="_container">
        <Question />
        <DiscussionList />
      </section>
      </main>
    </div>
  );
}

export default App;
