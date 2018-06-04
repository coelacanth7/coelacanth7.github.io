import React, { Component } from "react";

import Animation from "./Animation";
import Img from "./Img";
import Copy from "./Copy";
import MediaLinks from "./MediaLinks";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Img />
				<Animation />
				<section id="copy-wrapper">
					<Copy />
					<MediaLinks />
				</section>
			</div>
		);
	}
}

export default App;
