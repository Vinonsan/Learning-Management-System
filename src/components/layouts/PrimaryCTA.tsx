"use client";

import Link from "next/link";
import { ArrowRight} from "lucide-react";

type CTASectionProps = {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  trustText?: string;
};

const CTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  trustText,
}: CTASectionProps) => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto ">
        <div
          className="
            relative overflow-hidden rounded-3xl
            bg-gradient-to-br from-primary via-black to-primary/90
            px-8 py-16 md:px-16
            shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35)]
          "
        >
 
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-black/30 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {title}
            </h2>

            <p className="mt-6 text-base md:text-lg text-white/90">
              {description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryCta.href}
                className="
                  inline-flex items-center gap-2
                  rounded-full bg-white px-8 py-4
                  text-sm font-semibold text-primary
                  shadow-lg transition-all
                  hover:-translate-y-0.5 hover:shadow-xl
                "
              >
                {primaryCta.label}
                <ArrowRight size={18} />
              </Link>

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="
                    inline-flex items-center gap-2
                    rounded-full border border-white/40
                    px-8 py-4 text-sm font-semibold text-white
                    backdrop-blur-md transition-all
                    hover:bg-white/10
                  "
                >
                  {secondaryCta.icon}
                  {secondaryCta.label}
                </Link>
              )}
            </div>

            {trustText && (
              <p className="mt-8 text-xs text-white/70">
                {trustText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
