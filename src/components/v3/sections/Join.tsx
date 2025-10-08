import { reckless, piu, readex_pro } from "@/lib/ufl";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	ArrowRight,
	Award,
	BookOpen,
	GraduationCap,
	Target,
} from "lucide-react";

export default function Join() {
	return (
		<section className="container min-h-[600px] mx-auto flex flex-col items-center justify-baseline py-[90px]">
			<p
				className={`${piu.className} border-black border-1 rounded-2xl p-3 bg-teal-200`}
			>
				MEMBERSHIP
			</p>
			<h2
				className={`${reckless.className} text-[40px] md:text-[50px] mt-2`}
			>
				Why Join Us?
			</h2>
			<div className={`grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2 mt-6 ${piu.className}`}>
				{/* Expert Instructors Card */}
				<Card className="bg-white p-8">
					<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-900">
						<GraduationCap className="h-6 w-6" />
					</div>
					<h2 className="mb-3 text-2xl font-semibold">
						Expert Instructors
					</h2>
					<p className="text-sm leading-relaxed text-gray-600">
						Learn from top industry professionals who bring years of
						real-world experience into the classroom, providing you
						with the latest tools, techniques, and insights needed
						to excel in your field.
					</p>
				</Card>

				{/* Career-Boost Certify Card */}
				<Card className="bg-white p-8">
					<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-900">
						<Award className="h-6 w-6" />
					</div>
					<h2 className="mb-3 text-2xl font-semibold">
						Career-Boost Certify
					</h2>
					<p className="text-sm leading-relaxed text-gray-600">
						Earn certifications that are highly regarded by
						employers, helping you to enhance your resume, gain
						industry recognition, and open doors to new career
						opportunities.
					</p>
				</Card>

				{/* Flexible Learning Schedules Card - Spans 2 rows on lg+ */}
				<Card className="bg-blue-950 p-8 text-white lg:row-span-2">
					<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white">
						<BookOpen className="h-6 w-6" />
					</div>
					<h2 className="mb-4 text-2xl font-semibold">
						Flexible Learning Schedules
					</h2>
					<p className="mb-6 text-sm leading-relaxed text-gray-200">
						At expert.io, we understand the importance of balancing
						learning with a busy lifestyle. That's why our courses
						are available on-demand, allowing you to learn at your
						own pace, anytime and anywhere.
					</p>
					<p className="mb-8 text-sm leading-relaxed text-gray-200">
						Whether you're a working professional or a student, you
						can customize your schedule to fit your needs.
					</p>
					<Button className="bg-emerald-500 text-gray-900 hover:bg-emerald-400">
						Start Free Trial
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</Card>

				{/* 100+ High Impact Courses Card */}
				<Card className="bg-white p-8 lg:col-span-2">
					<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-900">
						<Target className="h-6 w-6" />
					</div>
					<h2 className="mb-3 text-2xl font-semibold">
						100+ High Impact Courses
					</h2>
					<p className="text-sm leading-relaxed text-gray-600">
						expert.io offers over 100 courses that cover essential
						skills in today's tech industry. Whether you're a
						beginner or an experienced professional, our courses in
						web development, data science, and cybersecurity provide
						practical, hands-on learning to help you apply your
						skills immediately and competitively.
					</p>
				</Card>
			</div>
		</section>
	);
}
