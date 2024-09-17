
import FileLoad from './components/FileLoad/FileLoad';
import { FileProvider } from './components/FileProvider/FileProvider';
import FileSearch from './components/FileSearch/FileSearch';
import CostTable from './components/CostTable/CostTable';

function App() {
  return (
    <FileProvider>
      <FileLoad />
      {/* <FileSearch /> */}
      <CostTable />
    </FileProvider>

  );
}

export default App;
