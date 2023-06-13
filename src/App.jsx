import Router from './components/Router/Router';
import { AppProvider } from './context';

function App() {
  return (
		<AppProvider>
			<Router />
		</AppProvider>
  );
}

export default App;
