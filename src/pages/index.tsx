import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LargeCard } from '../components/LargeCard';
import { MediumCard } from '../components/MediumCard';
import { SmallCard } from '../components/SmallCard';

type Props = {
	exploreData: {
		img: string;
		location: string;
		distance: string;
	}[];
	cardsData: {
		img: string;
		title: string;
	}[];
};

const Home: NextPage<Props> = ({ exploreData, cardsData }) => {
	return (
		<>
			<Head>
				<title>Airbnb clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5 text-gray-500">Explore Nearby</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
						{exploreData.map((el, i) => (
							<SmallCard key={i} img={el.img} distance={el.distance} location={el.location} />
						))}
					</div>
				</section>

				<section>
					<h2 className="text-4xl font-semibold py-8 text-gray-500">Live Anywhere</h2>
					<div className="flex space-x-4 p-3 -ml-3 overflow-scroll scrollbar-hide">
						{cardsData.map((el, i) => (
							<MediumCard key={i} img={el.img} title={el.title} />
						))}
					</div>
				</section>

				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Gratest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
				/>
      </main>
      
      <Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
	const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json());
	return {
		props: {
			exploreData,
			cardsData,
		},
	};
};

export default Home;
