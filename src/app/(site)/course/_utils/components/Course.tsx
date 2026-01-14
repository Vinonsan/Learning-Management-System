import React from 'react'
import Badge from '@/src/components/base/Badge'
import Button from '@/src/components/base/Button'
import SectionHeading from '@/src/components/layouts/SectionHeading'
import { Clock } from 'lucide-react'

const courses = [
  {
    title: 'React.js – Modern Frontend Development',
    description:
      'This course focuses on building modern, scalable user interfaces using React.js. Learners will understand components, hooks, state management, and best practices.',
    duration: '12',
    monthlyFee: '4000',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
  },
  {
    title: 'Next.js – Full-Stack React Framework',
    description:
      'Learn server-side rendering, static generation, routing, API routes, SEO optimization, and production deployment using Next.js.',
    duration: '10',
    monthlyFee: '4500',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    title: '.NET – Backend Development with C#',
    description:
      'Build secure and scalable backend systems using .NET and C#. Learn REST APIs, authentication, and database integration.',
    duration: '14',
    monthlyFee: '5000',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
  },
  {
    title: 'Node.js – Scalable Server-Side Development',
    description:
      'Learn Node.js, Express, async programming, REST APIs, and scalable backend architectures.',
    duration: '10',
    monthlyFee: '4500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    title: 'A/L ICT – Information & Communication Technology',
    description:
      'Covers the full A/L ICT syllabus including hardware, software, networking, databases, and programming concepts.',
    duration: '6',
    monthlyFee: '3000',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d',
  },
]

const Course = () => {
  return (
    <section className='py-8'>
      <SectionHeading
        title="Our Courses"
        subtitle="Explore our ICT and IT courses designed for students and aspiring software engineers."
        align="center"
      />

      <div className="grid gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >
            <div className="relative h-44">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

              <Badge
                variant="secondary"
                className="absolute top-4 left-4 text-xs flex items-center gap-1"
              >
                <Clock size={12} />
                {course.duration} months
              </Badge>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-lg font-semibold text-black group-hover:text-primary transition">
                {course.title}
              </h2>

              <p className="text-sm text-black/70 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center justify-between pt-4 mt-2 border-t border-t-black/10">
                <span className="text-lg font-bold text-black">
                  LKR {course.monthlyFee}
                  <span className="text-sm font-medium text-black/60 ml-1">
                    / month
                  </span>
                </span>

                <Button variant="primary" size="sm" className="rounded-full">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Course
