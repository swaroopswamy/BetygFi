import React from "react";
const Icon = ({ name }) => {
	const icons = {
		x_dark: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="x">
					<path
						id="Vector"
						d="M18 6L6 18"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						id="Vector_2"
						d="M6 6L18 18"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		),
		x_light: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="x">
					<path
						id="Vector"
						d="M18 6L6 18"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						id="Vector_2"
						d="M6 6L18 18"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
			</svg>
		),
		green_tick: (
			<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<ellipse cx="12.8359" cy="12" rx="12" ry="12" transform="rotate(-180 12.8359 12)" fill="#55A406" />
				<path d="M18.3359 8.75L11.4609 15.625L8.33594 12.5" stroke="white" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		),
		unticked: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.5">
					<path d="M0.499999 12C0.5 5.64873 5.64873 0.5 12 0.500001C18.3513 0.500001 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64872 23.5 0.499999 18.3513 0.499999 12Z" stroke="#333333" />
					<path d="M17.5 8.75L10.625 15.625L7.5 12.5" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</g>
			</svg>
		),
		dropdown_black: (
			<svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="22" height="12" fill="#1E1E1E" />
				<g id="L/D- Defi Market Landing page">
					<g clip-path="url(#clip0_0_1)">
						<rect x="-1363" y="-160" width="1440" height="1653" rx="4" fill="#F0F0F5" />
						<rect id="Rectangle 34624313" x="-1150" y="-92" width="1227" height="146" fill="white" />
						<g id="Group 427319359">
							<g id="Rectangle 34624309">
								<rect x="-279" y="-14" width="328" height="40" rx="8" fill="white" fill-opacity="0.8" />
								<rect x="-278.769" y="-13.7691" width="327.538" height="39.5382" rx="7.7691" stroke="#1C1C1C" stroke-opacity="0.8" stroke-width="0.461806" />
							</g>
							<path id="Vector" d="M21.7076 1.70806L11.7076 11.7081C11.6147 11.801 11.5044 11.8748 11.383 11.9251C11.2616 11.9754 11.1315 12.0013 11.0001 12.0013C10.8687 12.0013 10.7385 11.9754 10.6171 11.9251C10.4957 11.8748 10.3854 11.801 10.2926 11.7081L0.292568 1.70806C0.104927 1.52042 -0.000488281 1.26592 -0.000488281 1.00056C-0.000488281 0.735192 0.104927 0.480696 0.292568 0.293056C0.480208 0.105415 0.734704 0 1.00007 0C1.26543 0 1.51993 0.105415 1.70757 0.293056L11.0001 9.58681L20.2926 0.293056C20.3855 0.200145 20.4958 0.126445 20.6172 0.0761623C20.7386 0.0258797 20.8687 0 21.0001 0C21.1315 0 21.2616 0.0258797 21.383 0.0761623C21.5044 0.126445 21.6147 0.200145 21.7076 0.293056C21.8005 0.385966 21.8742 0.496267 21.9245 0.61766C21.9747 0.739053 22.0006 0.869161 22.0006 1.00056C22.0006 1.13195 21.9747 1.26206 21.9245 1.38345C21.8742 1.50485 21.8005 1.61515 21.7076 1.70806Z" fill="#1C1C1C" />
						</g>
					</g>
				</g>
				<defs>
					<clipPath id="clip0_0_1">
						<rect x="-1363" y="-160" width="1440" height="1653" rx="4" fill="white" />
					</clipPath>
				</defs>
			</svg>
		)
	};

	return icons[name] || null;
};

export default Icon;
