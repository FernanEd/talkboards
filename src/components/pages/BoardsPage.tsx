import * as React from 'react';
import { Layout } from '../layout/Layout';

export const BoardsPage: React.FunctionComponent = ({}) => (
	<Layout>
		<div className="flex flex-col gap-16">
			<section className="flex flex-col gap-8">
				<div className="flex justify-between items-baseline">
					<h2 className="heading">Humanities</h2>
					<button className="btn">Group</button>
				</div>
				<ul className="flex flex-col gap-4">
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
				</ul>
			</section>
			<section className="flex flex-col gap-8">
				<h2 className="heading">Humanities</h2>
				<ul className="flex flex-col gap-4">
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
				</ul>
			</section>
			<section className="flex flex-col gap-8">
				<h2 className="heading">Humanities</h2>
				<ul className="flex flex-col gap-4">
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
				</ul>
			</section>
			<section className="flex flex-col gap-8">
				<h2 className="heading">Humanities</h2>
				<ul className="flex flex-col gap-4">
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
					<li>
						<a href="" className="link">
							/a/ - Art
						</a>
					</li>
				</ul>
			</section>
		</div>
	</Layout>
);
