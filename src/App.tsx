import { Button } from './components/Button/Button';
import { Icon, IconCatalog } from './components/Icon/Icon';

import './App.css';

function App() {
  return (
    <div className="App">
      <Button label="CTA" />
      <Icon icon={IconCatalog.turn} />
    </div>
  );
}

export default App;
