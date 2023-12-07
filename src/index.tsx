import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { NotFound } from './pages/_404.jsx';
import Home from './pages/home/index.js';
import './index.css'


export function App() {
	return (
		<LocationProvider>
				<Router>
				    <Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
