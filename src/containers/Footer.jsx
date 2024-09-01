import { LogoBW, SendSvg } from "../assets"

const Footer = () => {
	return (
		<div className="w-[90%] max-w-screen-3xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-y-12">
			<div className="w-full flex flex-col lg:flex-row items-start justify-start gap-x-24 gap-y-8">
				<img src={LogoBW} alt="" className="w-12 lg:w-20" />
				<div className="w-full flex items-start justify-between lg:justify-start lg:gap-24">
					<div className="flex flex-col items-start gap-3 lg:gap-4">
						{
							['Configure', 'Brand', 'Our Value', 'Account', 'Fisker Ocean', 'Fleet Sales'].map((item, i) => {
								return (
									<p key={i} className="text-white text-sm lg:text-base font-medium cursor-pointer">{item}</p>
								)
							})
						}
					</div>
					<div className="flex flex-col items-start gap-3 lg:gap-4">
						{
							['Partnerships', 'Newsroom', 'Investors', 'Fisker Shop', 'Contact', 'F.A.Q.'].map((item, i) => {
								return (
									<p key={i} className="text-white text-sm lg:text-base font-medium cursor-pointer">{item}</p>
								)
							})
						}
					</div>
					<div className="flex flex-col items-start gap-3 lg:gap-4">
						{
							['Legal', 'Imprint', 'Careers', 'Find Us', 'Manual', 'Awards'].map((item, i) => {
								return (
									<p key={i} className="text-white text-sm lg:text-base font-medium cursor-pointer">{item}</p>
								)
							})
						}
					</div>
				</div>
			</div>
			<p className="w-max lg:mt-0 text-xs lg:text-base font-normal text-white text-left text-nowrap">Copyright &copy; 2024 Fisker, Inc. All Rights Reserved.</p>
		</div>
	)
}

export default Footer