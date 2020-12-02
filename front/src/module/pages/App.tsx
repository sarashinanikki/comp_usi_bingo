import React from 'react';
import { HeaderComponent } from "../organisms/header";
import { BrowserRouter, /*Route, Switch*/ } from "react-router-dom";

function App() {
  	return (
		<BrowserRouter>
			<HeaderComponent />
		</BrowserRouter>
  	);
}

export default App;
