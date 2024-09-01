import { SpecsImg1, SpecsImg2, SpecsImg3 } from "../assets"
import { SecondaryButton } from '../components'

const Specs = () => {
	const content = [
		{
			title: 'Sport',
			description: 'Striking a balance of performance, range, and affordability, the Fisker Ocean Sport trim level is your beautiful gateway to electric mobility.',
			button: false,
			price: '45',
			img: SpecsImg1,
		}, {
			title: 'Ultra',
			description: 'This premium level comes well-equipped with all-wheel drive, the Hyper Range battery, and an impressive array of high-performance features. ',
			button: true,
			price: '65',
			img: SpecsImg2,
		}, {
			title: 'Extreme',
			description: 'Extreme luxury. Extreme performance. Extreme thrills. The Fisker Ocean Extreme lives up to its name in all the right ways.',
			button: true,
			price: '80',
			img: SpecsImg3,
		}
	]
	return (
		<div className="w-[90%] max-w-screen-3xl mx-auto pb-40 flex flex-row items-center justify-between gap-x-6 gap-y-6 overflow-x-auto overflow-y-hidden noScrollbar">
			{
				content.map((item, i) => {
					return (
						<div key={i} className="w-full min-w-[380px] lg:w-[30%] h-[450px] flex flex-col justify-start items-stretch gap-8 relative group/cont">
							<div className="w-full flex flex-col items-start justify-start gap-4">
								<h3 className="font-nunito font-normal text-lg">Fisker Ocean</h3>
								<h1 className="mb-2 uppercase font-orbitron font-bold text-4xl">{item.title}</h1>
								<p className="font-inter text-lg font-normal">{item.description}</p>
							</div>
							<div className="w-full max-w-[300px]">
								<p className="mb-4 font-medium">Specs &rarr;</p>
								{item.button && <SecondaryButton text={'Force E Package Available'} />}
							</div>
							<div className="w-full mt-auto flex items-start gap-x-1 relative">
								<p className="w-max font-orbitron font-medium text-3xl">{item.price}</p>
								<p className="w-max font-orbitron font-medium text-lg">000 CAD</p>
								<img src={item.img} alt="" className="w-full absolute top-10 rounded-lg group-hover/cont:-top-40 2xl:group-hover/cont:-top-52 transition-all duration-700 ease-in-out" />
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Specs