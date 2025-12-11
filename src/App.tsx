import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Subs from './Subs'

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/movie" element={<Subs />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
