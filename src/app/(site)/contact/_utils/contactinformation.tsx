import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

const contactItems = [
  {
    title: "Phone / WhatsApp",
    value: "+94 77 123 4567",
    description: "Call or WhatsApp us anytime during working hours",
    icon: Phone,
    action: "tel:+94771234567",
  },
  {
    title: "Email Address",
    value: "info@masterbrain.lk",
    description: "Send us your questions anytime",
    icon: Mail,
    action: "mailto:info@masterbrain.lk",
  },
  {
    title: "Location",
    value: "Sri Lanka",
    description: "Online & physical learning support",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Mon – Sat : 9.00 AM – 7.00 PM",
    description: "Sunday closed",
    icon: Clock,
  },
];

export default function ContactInformation() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-primary/10 text-xs tracking-widest text-primary">
            CONTACT DETAILS
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get in Touch with <span className="text-primary">MasterBrain</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about courses, enrollment, or career guidance?
            Reach out to us — we’re happy to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            const CardWrapper = item.action ? "a" : "div";

            return (
              <CardWrapper
                key={index}
                href={item.action}
                className="group bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>

                <p className="text-primary font-medium mb-1">
                  {item.value}
                </p>

                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </CardWrapper>
            );
          })}
        </div>

        {/* Quick WhatsApp CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
