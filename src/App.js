
import FileLoad from './components/FileLoad/FileLoad';
import { FileProvider } from './components/FileProvider/FileProvider';
import FileSearch from './components/FileSearch/FileSearch';

function App() {
  return (
    <FileProvider>
      <FileLoad />
      <FileSearch />
    </FileProvider>

  );
}

export default App;
