import { BentoImg1, BentoImg2, BentoImg3, BentoImg4 } from "../assets"

const BentoGrid = () => {
	return (
		<div className="w-[90%] lg:w-[60%] max-w-screen-3xl h-[600px] lg:h-[750px] mx-auto grid gap-2 grid-rows-3 lg:grid-rows-1 lg:grid-cols-6">

			<div className="w-full bg-black row-span-1 lg:row-span-1 lg:col-span-2 flex items-start justify-between flex-row lg:flex-col rounded-lg overflow-clip group">
				<div className="w-full py-5 px-6 flex flex-col gap-3 text-white">
					<h4 className="text-xs lg:text-base font-nunito font-normal uppercase">Pulse Audio System</h4>
					<p className="text-sm lg:text-lg font-inter font-normal">Fisker Pulse 3D audio system immerses the driver and passengers in an experience like no other.</p>
					<p className="text-xs lg:text-base underline font-normal">Learn more</p>
				</div>
				<div className="w-[60%] lg:w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110">
					<img src={BentoImg1} alt="" className="w-full h-full object-contain object-bottom" />
				</div>
			</div>

			<div className="w-full h-full row-span-2 lg:row-span-1 lg:col-span-4 flex gap-2">
				<div className="w-full h-full flex flex-col gap-2 rounded-lg overflow-clip">
					<div className="w-full h-[47%] rounded-lg overflow-clip">
						<img src={BentoImg2} alt="" className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110" />
					</div>
					<div className="w-full h-[53%] rounded-lg overflow-clip">
						<img src={BentoImg3} alt="" className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110" />
					</div>
				</div>
				<div className="w-full h-full flex flex-col gap-2">
					<div className="w-full h-[53%] rounded-lg overflow-clip">
						<img src={BentoImg4} alt="" className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110" />
					</div>
					<div className="w-full h-[47%] p-2 lg:p-5 rounded-lg overflow-clip bg-gradient-to-b from-[#c3b8a4] to-[#958d7e] flex items-center justify-center">
						<p className="text-xs lg:text-xl font-inter font-medium text-white tracking-wider lg:leading-relaxed">With an electric drivetrain, the Fisker Ocean for an impressively spacious cabin, seating for five adults, and flexible storage for surfboards, camping gear, pet carriers, and more</p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default BentoGrid