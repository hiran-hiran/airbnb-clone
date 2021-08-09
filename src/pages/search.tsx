import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { format } from 'date-fns';
import { InfoCard } from '../components/InfoCard';

type Props = {
	searchResults: {
		img: string;
		location: string;
		title: string;
		description: string;
		star: number;
		price: string;
		total: string;
		long: number;
		lat: number;
	}[];
};

const search: NextPage<Props> = ({ searchResults }) => {
	const router = useRouter();
	const { location, startDate, endDate, numOfGuests } = router.query;

	const formattedStartDate = format(new Date(startDate as string), 'dd MMMM yy');
	const formattedEndDate = format(new Date(endDate as string), 'dd MMMM yy');
	const range = `${formattedStartDate} - ${formattedEndDate}`;

	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs">
						300+ Stays - {range} - {numOfGuests} guests
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and Beds</p>
						<p className="button">More filters</p>
					</div>

					<div className="flex">
						{searchResults.map((el, i) => (
							<InfoCard
								key={i}
								img={el.img}
								location={el.location}
								title={el.title}
								description={el.description}
								star={el.star}
								price={el.price}
								total={el.total}
							/>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default search;

export const getServerSideProps: GetServerSideProps = async () => {
	const searchResults = await fetch('https://links.papareact.com/isz').then((res) => {
		return res.json();
	});

	return {
		props: {
			searchResults,
		},
	};
};
