import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MissionImg, NavigateSvg } from "../assets"

gsap.registerPlugin(ScrollTrigger)

const Mission = () => {

	const containerRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef.current,
				start: "bottom bottom",
				end: "bottom 60%",
				scrub: true,
			}
		});

		tl.fromTo(containerRef.current,
			{ width: '100%' },
			{ width: '90%', ease: 'none' }
		);

	}, []);

	return (
		<div className="w-[90%] h-[80vh] lg:h-[100vh] mx-auto relative rounded-lg overflow-clip" ref={containerRef}>

			<div className="w-full px-[10%] mx-auto absolute top-10 flex items-stretch justify-between">
				<div>
					<p className="font-medium text-lg">Our Mission</p>
					<h1 className="mt-1 lg:mt-2 font-extrabold text-2xl lg:text-6xl font-orbitron">A Clean Future For All</h1>
				</div>
				<div className="hidden lg:block p-8 bg-white rounded-full transition-all duration-500 ease-in-out hover:scale-110">
					<img src={NavigateSvg} alt="" className="w-8" />
				</div>
			</div>

			<div className="w-full h-full">
				<img src={MissionImg} alt="" className="w-full h-full object-cover" />
			</div>

		</div>
	)
}

export default Mission