import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/base.css"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import PageNotFound from 'pages/PageNotFound';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={HomePage} />
				<Route path="/Portfolio-with-ReactJS/" Component={HomePage} />
				<Route path="*" Component={PageNotFound} />
			</Routes>
		</BrowserRouter>
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
