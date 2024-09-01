import { AboutImg1, AboutImg2 } from "../assets"
import PrimaryButton from "../components/PrimaryButton"

const About = () => {
	const content = [
		{
			title: 'Shop Inventory',
			img: AboutImg1,
			buttonText: 'Shop Now',
		},
		{
			title: 'Configure Yours',
			img: AboutImg2,
			buttonText: 'Make it Yours',
		}
	]
	return (
		<div className="w-[90%] max-w-screen-3xl h-max mx-auto flex flex-col lg:flex-row items-center justify-around gap-12 gap-y-10">
			{
				content.map((item, i) => {
					return (
						<div className="w-full" key={i}>
							<h2 className="mb-4 text-2xl font-nunito font-bold text-black">{item.title}</h2>
							<div className="w-full h-[200px] lg:h-[400px] relative overflow-clip rounded-md">
								<img src={item.img} alt="" className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110" />
								<div className="w-full px-4 absolute bottom-3">
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

export default About