import './App.css';
import RoutesComponent from './router/index.jsx';

function App() {
  document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;
    if(event.scale > 1) {
      event.preventDefault();
    }
  }, false);
  return (
    <div className="App">
      <RoutesComponent/>
    </div>
  );
}

export default App;
