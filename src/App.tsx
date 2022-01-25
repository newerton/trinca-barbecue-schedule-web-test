import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';
import GlobalStyle from 'styles/global';
import MarginPaddingStyle from 'styles/margin-padding';
import 'react-datepicker/dist/react-datepicker.css';

import AppProvider from './hooks';

const App: React.FC = () => (
	<BrowserRouter>
		<AppProvider>
			<Routes />
		</AppProvider>
		<GlobalStyle />
		<MarginPaddingStyle />
	</BrowserRouter>
);

export default App;
