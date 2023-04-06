import Home from "./java";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoreJava from "./java/CoreJava";

export default function redirects() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" component={<Home />}>
					<Route path="/CoreJava" component={<CoreJava />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
