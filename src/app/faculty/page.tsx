import { montserrat, piu, anon, reckless, skiff, instrument } from "@/lib/ufl";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Ribbons from "@/components/bits/ribbons";

export default function Faculty() {
	return (
		<section className="min-h-[700px] relative text-white px-10 md:px-20 lg:px-30 py-10 bg-gradient-to-t from-gray-900 to-slate-800 pt-45">
			<div className="h-[100%] w-[100%] absolute z-10 top-0 left-0">
				<Ribbons
					baseThickness={30}
					colors={["#ffffff"]}
					speedMultiplier={0.5}
					maxAge={500}
					enableFade={false}
					enableShaderEffect={true}
				/>
			</div>
			<h2
				className={`text-[40px] md:text-[44px] ${instrument.className} text-center tracking-tight`}
			>
				Club Faculty
			</h2>
			<h3
				className={`text-[30px] md:text-[38px] ${skiff.className} text-center tracking-tight`}
			>
				Core Members
			</h3>
			<div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-6 ">
				<div className="w-[300px] h-[367px] bg-gray-900 rounded-[12px] relative border-1 border-white glow overflow-hidden">
					<Image
						src={"/faculty/rayan.jpg"}
						fill
						alt="President"
						className="rounded-[12px] object-cover"
					/>
					<div className="absolute bottom-0 left-0 p-6 text-center">
						<h2
							className={`text-white text-xl font-semibold mb-1 ${piu.className}`}
						>
							Rayan Faruk
						</h2>
						<p
							className={`text-white/80 text-sm font-semibold ${piu.className}`}
						>
							Club President
						</p>
					</div>
				</div>
				<div className="w-[300px] h-[367px] bg-gray-900 rounded-[12px] relative border-1 border-white glow overflow-hidden">
					<Image
						src={"/faculty/ahnaf.jpg"}
						fill
						alt="Vice President"
						className="rounded-[12px] object-cover"
					/>
					<div className="absolute bottom-0 left-0 p-6 text-center">
						<h2
							className={`text-white text-xl font-semibold mb-1 ${piu.className}`}
						>
							Ahnaf Zaman
						</h2>
						<p
							className={`text-white/80 text-sm font-semibold ${piu.className}`}
						>
							Vice President
						</p>
					</div>
				</div>
			</div>
			<h3
				className={`text-[30px] md:text-[38px] ${skiff.className} text-center tracking-tight mb-6 mt-10`}
			>
				Sector Heads
			</h3>
			<div className="mt-2 px-8">
				<Marquee pauseOnHover className="[--duration:20s]">
					<div className="h-[400px] w-[400px] bg-gray-900 rounded-lg overflow-hidden border-1 border-white">
						<div className="bg-muted h-4/5 w-[full] relative border-b border-white border-1">
							<Image
								src={"/faculty/rashmin.jpg"}
								fill
								alt="Head"
								className="object-cover"
							/>
						</div>
						<h2
							className={`text-white text-center text-xl font-semibold mt-2 mb-1 ${piu.className}`}
						>
							Rashmin Zarah Ahmed
						</h2>
						<p
							className={`text-center text-white/80 text-sm font-semibold ${piu.className}`}
						>
							Head of MathxScience
						</p>
					</div>
					<div className="h-[400px] w-[400px] bg-gray-900 rounded-lg overflow-hidden border-1 border-white">
						<div className="bg-muted h-4/5 w-[full] relative border-b border-white border-1">
							<Image
								src={"/faculty/tazriyan.jpg"}
								fill
								alt="Head"
								className="object-cover"
							/>
						</div>
						<h2
							className={`text-white text-center text-xl font-semibold mt-2 mb-1 ${piu.className}`}
						>
							Tazriyan Ahmed
						</h2>
						<p
							className={`text-center text-white/80 text-sm font-semibold ${piu.className}`}
						>
							Head of Survey
						</p>
					</div>
					<div className="h-[400px] w-[400px] bg-black"></div>

					<div className="h-[400px] w-[400px] bg-black"></div>
				</Marquee>
				<Marquee reverse pauseOnHover className="[--duration:20s]">
					<div className="h-[400px] w-[400px] bg-black"></div>
					<div className="h-[400px] w-[400px] bg-black"></div>

					<div className="h-[400px] w-[400px] bg-black"></div>
					<div className="h-[400px] w-[400px] bg-black"></div>
					<div className="h-[400px] w-[400px] bg-black"></div>
				</Marquee>
			</div>
		</section>
	);
}
