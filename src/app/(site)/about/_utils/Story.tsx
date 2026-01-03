"use client";
import { Users, Rocket, Award, TrendingUp, BookOpen } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/src/components/layouts/SectionHeading";

const storyTimeline = [
  {
    year: "2019",
    title: "The Beginning",
    description: "MasterBrain was founded with a vision to make quality IT education accessible to Tamil-speaking students in Sri Lanka. We started with a small team of passionate educators.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    icon: Rocket,
    color: "from-red-500 to-red-700",
  },
  {
    year: "2020",
    title: "First Milestone",
    description: "Launched our first comprehensive course in React.js, attracting over 100 students in the first batch. The response was overwhelming and validated our mission.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    icon: BookOpen,
    color: "from-red-600 to-red-800",
  },
  {
    year: "2021-2022",
    title: "Rapid Growth",
    description: "Expanded our course offerings to include Next.js, Node.js, and .NET. Our student community grew to over 500 active learners, and we introduced live interactive sessions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    icon: TrendingUp,
    color: "from-red-700 to-red-900",
  },
  {
    year: "2023-Present",
    title: "Leading the Way",
    description: "Today, MasterBrain is recognized as a leading IT education platform with over 10,000 students, 50+ courses, and a 98% success rate. We continue to innovate and expand.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    icon: Award,
    color: "from-red-800 to-red-950",
  },
];

const achievements = [
  {
    icon: Users,
    value: "10,000+",
    label: "Students Trained",
    description: "Empowered thousands of students",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Expert Courses",
    description: "Comprehensive curriculum",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "Outstanding results",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Tamil Medium",
    description: "Fully accessible education",
  },
];

const Story = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: 'var(--primary)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ backgroundColor: 'var(--primary)' }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Story"
          subtitle="A journey of passion, innovation, and commitment to transforming IT education in Sri Lanka"
          align="center"
          variant="gradient"
        />

        {/* Story Timeline */}
        <div className="mt-20 space-y-12 lg:space-y-16">
          {storyTimeline.map((story, index) => {
            const Icon = story.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image Side - Rounded */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group">
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 z-10"
                      style={{
                        background: `linear-gradient(135deg, rgba(211, 47, 47, 0.2) 0%, rgba(33, 33, 33, 0.3) 100%)`
                      }}
                    />
                    
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />

                    {/* Rounded Corner Badge */}
                    <div 
                      className="absolute top-6 right-6 z-20 px-6 py-3 rounded-full backdrop-blur-md shadow-xl"
                      style={{ backgroundColor: 'rgba(211, 47, 47, 0.95)' }}
                    >
                      <span className="text-white font-bold text-sm">
                        {story.year}
                      </span>
                    </div>

                    {/* Decorative Rounded Elements */}
                    <div 
                      className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-30 z-0"
                      style={{ backgroundColor: 'var(--primary)' }}
                    />
                    <div 
                      className="absolute -top-8 -right-8 w-40 h-40 rounded-full blur-2xl opacity-20 z-0"
                      style={{ backgroundColor: 'var(--primary)' }}
                    />
                  </div>
                </div>

                {/* Content Side - Rounded */}
                <div className="flex-1 w-full">
                  <div className="relative bg-white rounded-[3rem] p-8 lg:p-10 shadow-xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                    {/* Top Accent Bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-2 rounded-t-[3rem]"
                      style={{ backgroundColor: 'var(--primary)' }}
                    />

                    {/* Icon */}
                    <div className="mb-6">
                      <div 
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg"
                        style={{ backgroundColor: 'var(--primary)' }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div 
                      className="inline-block px-4 py-2 rounded-full mb-4 text-sm font-semibold"
                      style={{ 
                        backgroundColor: 'var(--primary)',
                        color: '#ffffff'
                      }}
                    >
                      {story.year}
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-3xl md:text-4xl font-bold mb-4"
                      style={{ color: 'var(--dark)' }}
                    >
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="text-lg leading-relaxed"
                      style={{ color: 'var(--dark)', opacity: 0.8 }}
                    >
                      {story.description}
                    </p>

                    {/* Decorative Rounded Element */}
                    <div 
                      className="absolute bottom-6 right-6 w-24 h-24 rounded-full opacity-5"
                      style={{ backgroundColor: 'var(--primary)' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section - Rounded Cards */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--dark)' }}
            >
              Our Achievements
            </h3>
            <div 
              className="h-1.5 w-20 rounded-full mx-auto"
              style={{ backgroundColor: 'var(--primary)' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                  {/* Top Rounded Accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                    style={{ backgroundColor: 'var(--primary)' }}
                  />

                  {/* Icon Container - Rounded */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'var(--primary)', opacity: 0.1 }}
                  >
                    <Icon 
                      className="w-8 h-8"
                      style={{ color: 'var(--primary)' }}
                    />
                  </div>

                  {/* Value */}
                  <div 
                    className="text-4xl md:text-5xl font-black mb-2"
                    style={{ color: 'var(--primary)' }}
                  >
                    {achievement.value}
                  </div>

                  {/* Label */}
                  <h4 
                    className="text-lg font-bold mb-2"
                    style={{ color: 'var(--dark)' }}
                  >
                    {achievement.label}
                  </h4>

                  {/* Description */}
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--dark)', opacity: 0.7 }}
                  >
                    {achievement.description}
                  </p>

                  {/* Decorative Rounded Corner */}
                  <div 
                    className="absolute bottom-4 right-4 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: 'var(--primary)' }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action - Rounded */}
        <div className="mt-24">
          <div className="relative bg-white rounded-[3rem] p-12 lg:p-16 shadow-2xl border-2 border-gray-100 overflow-hidden">
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />

            <div className="relative z-10 text-center">
              <h3 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--dark)' }}
              >
                Join Our Journey
              </h3>
              <p 
                className="text-lg mb-8 max-w-2xl mx-auto"
                style={{ color: 'var(--dark)', opacity: 0.8 }}
              >
                Be part of the MasterBrain community and transform your career with industry-leading IT education.
              </p>
              <button
                className="px-8 py-4 rounded-full font-semibold text-white text-lg hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: 'var(--primary)' }}
              >
                Start Your Journey
              </button>
            </div>

            {/* Decorative Rounded Elements */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5"
              style={{ backgroundColor: 'var(--primary)' }}
            />
            <div 
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-5"
              style={{ backgroundColor: 'var(--primary)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
