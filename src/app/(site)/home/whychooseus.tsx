import React from "react";
import { Globe, Code2, Users, Briefcase, Layers, CalendarClock } from "lucide-react";
import SectionHeading from "@/src/components/layouts/SectionHeading";


const features = [
  {
    title: "Tamil Medium Learning",
    description:
      "Complex technical concepts are explained clearly in Tamil, helping learners understand faster without language barriers.",
    icon: Globe,
  },
  {
    title: "Real-World Projects",
    description:
      "Hands-on projects designed around real industry problems to build practical skills and confidence.",
    icon: Code2,
  },
  {
    title: "Industry Mentors",
    description:
      "Learn directly from experienced professionals who actively work in the tech industry.",
    icon: Users,
  },
  {
    title: "Career Support",
    description:
      "Comprehensive career guidance including CV preparation, interview training, and placement support.",
    icon: Briefcase,
  },
  {
    title: "Structured Learning Path",
    description:
      "Well-organized course structure that takes learners step by step from fundamentals to advanced concepts.",
    icon: Layers
  },
  {
    title: "Flexible Learning Schedule",
    description:
      "Flexible class timings and learning pace designed to suit students, job seekers, and working professionals.",
    icon: CalendarClock, 
  },
];


function WhyChooseUs() {
    return (
        <section className="py-16">
            <SectionHeading
                title="Why Choose Us"
                subtitle="We focus on practical learning, clarity, and career growth — not just theory."
                align="center"
            />

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/20 via-transparent to-indigo-500/20 hover:from-primary/40 hover:to-indigo-500/40 transition-all duration-300"
                        >
                            <div className="relative bg-white rounded-2xl p-6 h-full shadow-md hover:shadow-2xl transition-all duration-300">

                                <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                                    <Icon size={22} />
                                </div>

                                <div className="pt-8">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                <span className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary/40" />
                            </div>
                        </div>

                    );
                })}
            </div>
        </section>
    );
}

export default WhyChooseUs;
