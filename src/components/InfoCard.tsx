import Image from 'next/image';
import React, { VFC } from 'react';

type Props = {
	img: string;
	location: string;
	title: string;
	description: string;
	star: number;
	price: string;
	total: string;
	// long: number;
	// lat: number;
};

export const InfoCard: VFC<Props> = ({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
	// long,
	// lat,
}) => {
	return <div className=""></div>;
};
