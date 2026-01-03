import Frequentlyaskedquestion from './home/frequentlyaskedquestion'
import Hero from './home/hero'
import HowItWorks from './home/howitworks'
import PopularCourses from './home/popularcourses'
import Testimonial from './home/testimonial'
import WhyChooseUs from './home/whychooseus'
import CTASection from '@/src/components/layouts/PrimaryCTA'

const page = () => {
  return (
    <div className="px-8 py-6">
      <Hero />
      <PopularCourses />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonial />
      <Frequentlyaskedquestion />
      <CTASection
        title="Ready to Dive Deeper?"
        description="Enter the study materials section to explore advanced concepts and hands-on references."
        primaryCta={{
          label: "Explore Materials",
          href: "/courses",
        }}
        trustText="Trusted by 10,000+ learners · Career-focused · Learn at your pace"
      />
    </div>
  )
}

export default page