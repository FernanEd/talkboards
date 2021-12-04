import * as React from 'react';
import { HottestThreads } from '../common/HottestThreads/HottestThreads';
import { Layout } from '../layout/Layout';

export const HomePage: React.FunctionComponent = ({}) => (
	<Layout>
		<section className="flex flex-col gap-8 items-center">
			<div className="stats text-center font-bold text-text4col dark:text-text4col-dark flex gap-4">
				<p>10 users</p>
				<p>54 threads</p>
				<p>520 posts</p>
			</div>
			<p className="text-center text-text2col dark:text-text2col-dark max-w-[497px]">
				Welcome to Talkboards, a place to have conversations about topics you
				are interested in.
				<br />
				Go to a board, create a thread and start a discussion.
				<br />
				<br />
				All threads are deleted after a period of time. Read about our
				guidelines{' '}
				<a
					href="http://"
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary font-bold">
					here
				</a>
				.
			</p>
		</section>
		<section className="my-16">
			<div className="flex justify-between items-baseline">
				<h2 className="heading">Hottest Threads</h2>
				<button className="btn">Refresh</button>
			</div>
			<HottestThreads />
		</section>
	</Layout>
);
