import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Movie from './Movie'
import Subs from './Subs'

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/movie" element={<Subs />} />
					<Route path="/" element={<Movie />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
