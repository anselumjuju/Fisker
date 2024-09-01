import { HeroBg, HeroBgSm, MenuSvg, SpecsPopupImg } from "../assets"

const Home = () => {

	const specs = [
		{ title: '0-60 mph', description: '3.7 s' },
		{ title: 'Range', description: '360 mi' },
		{ title: 'Charge in 30 mins', description: '80%' },
		{ title: 'Horsepower', description: '564 bhp' },
	]

	return (
		<div className={'w-full h-max flex flex-col items-center justify-between relative '}>

			<div className="w-full h-[100vh] relative">
				<div className="w-full h-full absolute bg-gradient-to-b from-[#00000071] to-[#00000000]" />
				<img src={HeroBg} alt="" className="w-full hidden lg:block h-full object-cover" />
				<img src={HeroBgSm} alt="" className="w-full lg:hidden h-full object-cover" />
			</div>

			<div className="w-full px-6 py-4 p flex justify-between items-center absolute top-2">
				<h2 className="text-3xl font-orbitron font-bold text-white cursor-pointer">FISKER</h2>
				<img src={MenuSvg} alt="" className="w-8 cursor-pointer" />
			</div>

			<div className="w-max max-w-[90vw] h-max p-6 lg:py-0 bg-white flex justify-evenly items-center gap-6 lg:gap-12 overflow-x-auto rounded-lg noScrollbar absolute bottom-20">
				{
					specs.map((spec, index) => (
						<div key={index} className="w-max flex flex-col items-center justify-center">
							<h2 className="w-max text-lg font-inter font-normal text-neutral-400">{spec.title}</h2>
							<p className="w-max text-xl font-inter font-bold text-neutral-900">{spec.description}</p>
						</div>
					))
				}
				<img src={SpecsPopupImg} alt="" className="w-40 h-24 object-cover hidden lg:block" />
				<div className="hidden lg:block">
					<p className="text-2xl font-bold text-neutral-900">Force E</p>
					<p className=" max-w-40 text-xs text-neutral-500">Fisker Ocean offroad package. Maximize adventure</p>
				</div>
			</div>

		</div>
	);
}

export default Home