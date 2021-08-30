import * as React from 'react';
import { HotThread } from './HotThread';

export const HottestThreads: React.FunctionComponent = ({}) => {
	return (
		<section className="my-8 flex flex-col gap-8">
			{[...Array(10)].map((_, i) => (
				<HotThread
					key={i}
					{...{
						title: 'What is the most amazing thing you ever done',
						board: '/w/ - Whatever',
						timestamp: new Date(),
						desc: 'Can you actually believe this? Bantz is now being investigated... ',
						replies: 200,
					}}
				/>
			))}
		</section>
	);
};
