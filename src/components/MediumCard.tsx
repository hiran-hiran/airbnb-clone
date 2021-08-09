import Image from 'next/image';
import React, { VFC } from 'react';

type Props = {
	img: string;
	title: string;
};

export const MediumCard: VFC<Props> = ({ img, title }) => {
	return (
		<div className="rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
			<div className="relative h-80 w-80">
				<Image src={img} layout="fill" className="rounded-lg" />
			</div>

			<h3 className="text-2xl mt-3">{title}</h3>
		</div>
	);
};
