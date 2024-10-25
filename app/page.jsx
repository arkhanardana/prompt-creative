import Feed from "@components/Feed";

const Home = () => {
	return (
		<>
			<section className="flex-col w-full flex-center">
				<h1 className="text-center head_text">
					Discover & Share
					<br className="max-md:hidden" />
					<span className="orange_gradient">AI Powered Prompts</span>
				</h1>
				<p className="text-center desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur ut molestiae sapiente illo
					excepturi eum laborum provident minima rem?
				</p>

				<Feed />
			</section>
		</>
	);
};

export default Home;
