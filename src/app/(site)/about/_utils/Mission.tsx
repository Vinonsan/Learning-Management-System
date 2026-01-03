"use client";

import React from "react";
import {
  Target,
  Eye,
  Sparkles,
  Lightbulb,
  GraduationCap,
  Users,
  Rocket,
  Code2,
  BookOpen,
  Award,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/src/components/layouts/SectionHeading";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const missionData = {
  title: "Our Mission",
  icon: Target,
  description:
    "To empower Tamil-speaking students in Sri Lanka with cutting-edge IT skills through industry-focused education, practical training, and career support. We are committed to bridging the gap between traditional learning and modern technology demands.",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  points: [
    "Deliver world-class IT education in Tamil medium",
    "Provide hands-on experience with real-world projects",
    "Support career growth and professional development",
  ],
  rotatingIcons: [
    { icon: GraduationCap, label: "Education" },
    { icon: Code2, label: "Coding" },
    { icon: Users, label: "Community" },
    { icon: BookOpen, label: "Learning" },
  ],
};

const visionData = {
  title: "Our Vision",
  icon: Eye,
  description:
    "To become the leading IT education platform in Sri Lanka, recognized for excellence in Tamil-medium technology training. We envision a future where every Tamil-speaking student has access to world-class IT education and career opportunities.",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  points: [
    "Lead the transformation of IT education in Sri Lanka",
    "Create a community of skilled IT professionals",
    "Foster innovation and technological advancement",
  ],
  rotatingIcons: [
    { icon: Rocket, label: "Innovation" },
    { icon: Award, label: "Excellence" },
    { icon: Sparkles, label: "Future" },
    { icon: Lightbulb, label: "Ideas" },
  ],
};

/* -------------------------------------------------------------------------- */
/*                             REUSABLE CARD                                  */
/* -------------------------------------------------------------------------- */

function MissionCard({
  data,
  reverseAnimation = false,
}: {
  data: typeof missionData;
  reverseAnimation?: boolean;
}) {
  const Icon = data.icon;

  return (
    <div className="group relative">
      <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-500 overflow-hidden">
        {/* Accent */}
        <div
          className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
          style={{ backgroundColor: "var(--primary)" }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>

            <h3
              className="text-4xl font-bold"
              style={{ color: "var(--dark)" }}
            >
              {data.title}
            </h3>
          </div>

          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "var(--dark)", opacity: 0.8 }}
          >
            {data.description}
          </p>

          <div className="space-y-4 mb-8">
            {data.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "var(--primary)" }}
                />
                <p
                  className="text-base"
                  style={{ color: "var(--dark)", opacity: 0.7 }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image + Rotating Icons */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mt-8">
          <div className="absolute inset-0 z-20">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px]"
              style={{
                animation: `rotateAround 20s linear infinite ${
                  reverseAnimation ? "reverse" : ""
                }`,
              }}
            >
              {data.rotatingIcons.map((item, i) => {
                const RI = item.icon;
                const angle = (360 / data.rotatingIcons.length) * i;
                const r = 140;
                const x = Math.cos((angle * Math.PI) / 180) * r;
                const y = Math.sin((angle * Math.PI) / 180) * r;

                return (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shadow-xl bg-white/90 border-2"
                      style={{ borderColor: "var(--primary)" }}
                    >
                      <RI
                        className="w-7 h-7"
                        style={{ color: "var(--primary)" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative w-full h-full">
            <div className="absolute inset-0 z-10 bg-black/10" />
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />

            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center bg-white/95 border-4 shadow-2xl"
                style={{ borderColor: "var(--primary)" }}
              >
                <Icon
                  className="w-12 h-12"
                  style={{ color: "var(--primary)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 SECTION                                    */
/* -------------------------------------------------------------------------- */

export default function Mission() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Mission & Vision"
          subtitle="Driving excellence in IT education through innovation and commitment"
          align="center"
          variant="gradient"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          <MissionCard data={missionData} />
          <MissionCard data={visionData} reverseAnimation />
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes rotateAround {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
