import React from "react";

const MediaLinks = () => {
	return (
		<div className="media-links">
			<div>
				<div className="wrap">
					<a
						href="https://github.com/coelacanth7"
						className="media-element"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-github-alt" aria-hidden="true" />
					</a>
					<h6 className="description">Github</h6>
				</div>

				<div className="wrap">
					<a
						href="https://www.linkedin.com/in/gregory-alford/"
						className="media-element"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-linkedin" aria-hidden="true" />
					</a>
					<h6 className="description">LinkedIn</h6>
				</div>

				<div className="wrap">
					<a
						href="https://medium.com/@galford151"
						className="media-element"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-medium" aria-hidden="true" />
					</a>
					<h6 className="description">Medium</h6>
				</div>

				<div className="wrap">
					<a
						href="https://twitter.com/coelacanth7"
						className="media-element"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-twitter" aria-hidden="true" />
					</a>
					<h6 className="description">Twitter</h6>
				</div>

				<div className="wrap">
					<a
						href="https://drive.google.com/file/d/1rvBnDY5j-kA_dGanyW9DzkGhFVoJlW3U/view?usp=sharing"
						className="media-element"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-file" aria-hidden="true" />
					</a>
					<h6 className="description">Resume</h6>
				</div>
			</div>
			<h4>
				<a id="email" href="mailto:galford151@gmail.com">
					galford151@gmail.com
				</a>
			</h4>
		</div>
	);
};
export default MediaLinks;
