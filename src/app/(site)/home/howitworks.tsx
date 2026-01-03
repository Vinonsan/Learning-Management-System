"use client";

import Image from "next/image";
import {
  Search,
  UserPlus,
  CreditCard,
  PlayCircle,
  Code2,
  Award,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "@/src/components/layouts/SectionHeading";

type Step = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  angle: number;
};

const steps: Step[] = [
  {
    step: "01",
    title: "Explore Courses",
    description: "Browse and select courses that match your career goals and interests",
    icon: Search,
    angle: 0,
  },
  {
    step: "02",
    title: "Create Account",
    description: "Sign up with your email to get started on your learning journey",
    icon: UserPlus,
    angle: 60,
  },
  {
    step: "03",
    title: "Enroll & Pay",
    description: "Complete secure payment to enroll in your chosen courses",
    icon: CreditCard,
    angle: 120,
  },
  {
    step: "04",
    title: "Start Learning",
    description: "Access live sessions and course materials instantly after enrollment",
    icon: PlayCircle,
    angle: 180,
  },
  {
    step: "05",
    title: "Build Projects",
    description: "Apply your knowledge through hands-on projects and real-world exercises",
    icon: Code2,
    angle: 240,
  },
  {
    step: "06",
    title: "Get Certified",
    description: "Earn industry-recognized certificates upon course completion",
    icon: Award,
    angle: 300,
  },
];



const HowItWorks = () => {
  const radius = 360;

  return (
    <section className="relative ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="How It Works"
          subtitle="Your journey from exploration to certification in six simple steps"
          align="center"
          variant="gradient"
        />

        <div className="relative min-h-[900px] flex items-center justify-center ">

          <div className="relative w-64 h-64 z-10 flex items-center justify-center">

            <div className="absolute w-80 h-80 animate-spin-slow">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-lg" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-lg" />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black shadow-lg" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black shadow-lg" />
            </div>

            <div className="relative w-56 h-56 rounded-full bg-white shadow-2xl flex items-center justify-center">
              <Image
                src="/images/hero2.png"
                alt="Learning Center"
                fill
                priority
                sizes="224px"
                className="object-contain scale-125"
              />

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-36 rounded-b-full bg-primary/30 blur-2xl" />
            </div>
          </div>

          {steps.map((item) => {
            const Icon = item.icon;
            const angleRad = (item.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <div
                key={item.step}
                className="absolute hidden lg:block"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="group relative w-72 rounded-2xl bg-white p-6 shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">


                  <div className="flex items-center gap-4 mb-4">
                 
                    <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shadow-md">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

             
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:hidden">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shadow-md">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
