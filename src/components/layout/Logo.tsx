import React from 'react';

export const Logo: React.FunctionComponent = ({}) => (
	<div className="flex gap-1 items-center">
		<h1 className="text-3xl text-textcol dark:text-textcol-dark">Talkboards</h1>
		<svg
			width="39"
			height="33"
			viewBox="0 0 39 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.87695 11.365C3.11769 5.16442 8.13804 0.745117 13.9411 0.745117H25.0358C31.1566 0.745117 36.4692 5.49405 37.7777 12.0339C38.1739 14.0141 38.1693 16.0892 37.7551 18.065C36.4465 24.3076 31.3679 28.7331 25.5123 28.7331H14.4987C11.3744 28.7331 8.28071 29.4058 5.394 30.7129L2.17672 32.1698C1.3332 32.5517 0.51244 31.5755 0.931076 30.688L1.56335 29.3475C3.12096 26.0448 3.37148 22.1716 2.26642 18.6574C1.53002 16.3151 1.39286 13.7847 1.87695 11.365Z"
				fill="url(#paint0_linear)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear"
					x1="20.5318"
					y1="2.37233"
					x2="10.0398"
					y2="32.7484"
					gradientUnits="userSpaceOnUse">
					<stop stop-color="#5AC7EA" />
					<stop offset="1" stop-color="#34A4C7" />
				</linearGradient>
			</defs>
		</svg>
	</div>
);
