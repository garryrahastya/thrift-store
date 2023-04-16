
import './App.css';
import ThriftStore from './container/ThriftStore/ThriftStore.container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

function App() {
  return (
    <div className="App">
      <ThriftStore />
    </div>
  );
}

export default App;
