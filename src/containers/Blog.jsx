import { BlogImg1, BlogImg2 } from "../assets"
import PrimaryButton from "../components/PrimaryButton"

const Blog = () => {
	const content = [
		{
			title: 'Read the Blog',
			desc: 'Stay up to date on Fisker news, updates, investments, and more.',
			buttonText: 'View Articles',
			img: BlogImg1,
		}, {
			title: 'Extreme E Series',
			desc: 'Learn about this new extreme sport, and how Fisker is participating in it.',
			buttonText: 'Learn More',
			img: BlogImg2,
		}
	]
	return (
		<div className="w-[90%] max-w-screen-3xl h-full mx-auto flex flex-col gap-16 text-white">
			{
				content.map((item, i) => {
					return (
						<div className={`w-[95%] lg:w-full h-max mx-auto flex flex-col items-center justify-between gap-10 ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`} key={i}>
							<div className="w-full lg:w-[55%] aspect-video lg:aspect-auto rounded-md overflow-clip">
								<img src={item.img} alt="" className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110" />
							</div>
							<div className="w-full lg:w-[45%] flex flex-col gap-5">
								<h1 className="text-4xl font-orbitron font-bold tracking-wider">{item.title}</h1>
								<p className="w-full lg:w-[70%] text-base font-inter font-normal">{item.desc}</p>
								<div className="w-[180px]">
									<PrimaryButton text={item.buttonText} />
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Blog