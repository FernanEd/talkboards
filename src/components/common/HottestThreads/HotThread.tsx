import * as React from 'react';

interface Props {
	title: string;
	desc: string;
	board: string;
	replies: number;
	timestamp: Date;
}

export const HotThread: React.FunctionComponent<Props> = ({
	title,
	board,
	desc,
	replies,
	timestamp,
}) => (
	<article className="flex gap-2">
		<div className="w-28 h-28 bg-text3col-dark"></div>
		<div className="flex flex-col">
			<h3 className="font-bold text-textcol dark:text-textcol-dark">{title}</h3>
			<a
				className="text-primary font-bold"
				href="http://"
				target="_blank"
				rel="noopener noreferrer">
				{board}
			</a>
			<p className="text-text2col dark:text-text2col-dark">{desc}</p>
			<div className="mt-auto flex gap-2 font-bold text-sm text-text3col dark:text-text3col-dark">
				<p>{replies} replies</p>•
				<p>Posted on {timestamp.toLocaleDateString()}</p>
			</div>
		</div>
	</article>
);
