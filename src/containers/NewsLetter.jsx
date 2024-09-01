import { SendSvg } from "../assets"

const NewsLetter = () => {
	return (
		<div className="w-[90%] max-w-screen-3xl mx-auto flex flex-col lg:flex-row gap-y-6 items-center justify-center gap-20">
			<div className="w-full lg:w-max flex flex-col items-start gap-4 text-center lg:text-left">
				<h1 className="w-full text-4xl font-orbitron font-bold text-white">NEWSLETTER</h1>
				<p className="w-full text-base font-inter font-medium text-white">Sign up. Stay in touch.</p>
			</div>
			<div className="w-max h-10 lg:h-16 flex items-center justify-end gap-2 lg:gap-4">
				<input
					type="text"
					placeholder="example@company.com"
					className="w-full lg:w-[400px] h-full p-4 bg-white rounded-lg outline-none"
				/>
				<div className="w-16 h-full flex items-center justify-center bg-orange-600 rounded-lg">
					<img src={SendSvg} alt="" className="w-5" />
				</div>
			</div>
		</div>
	)
}

export default NewsLetter