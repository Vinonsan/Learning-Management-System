import Badge from "@/src/components/base/Badge"
import Button from "@/src/components/base/Button"
import {
    ArrowRight,
    Sparkles,
    Award,
    Zap,
} from "lucide-react"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="min-h-screen w-full   flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center">
                <div className="space-y-4">
                    <Badge variant="primary" className="text-sm font-semibold">
                        <Sparkles className="h-4 w-4 mr-1" />
                        Advanced IT Education Center
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl  font-extrabold leading-tight tracking-tight text-dark">
                        Advanced IT Education for{" "}
                        <span className="relative inline-block text-primary">
                            Industry Leaders
                            <span className="absolute -bottom-2 left-0 right-0 h-3 rounded-full bg-primary opacity-20 -z-10" />
                        </span>
                    </h1>

                    <p className="max-w-2xl text-lg sm:text-xl font-medium text-black/70 leading-relaxed">
                        High-level programs in React, Next.js, backend architecture, AI-driven
                        systems, and modern software engineering designed for professionals.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button
                            variant="primary"
                            size="lg"
                            className="group rounded-full px-8 py-4 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <span className="flex items-center gap-2">
                                Start Learning Now
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-2 border-dark px-8 py-4 text-base font-semibold transition-all duration-300 hover:bg-black hover:text-white"
                        >
                            Watch Demo
                        </Button>
                    </div>

                    <div className="flex gap-6 pt-4">
                        <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            <span className="text-sm font-semibold text-dark">
                                Certified Programs
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary" />
                            <span className="text-sm font-semibold text-dark">
                                Live Expert Sessions
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[400px] lg:h-screen flex items-center justify-center overflow-hidden">

                    <div className="absolute w-[320px] sm:w-[380px] md:w-[460px] lg:w-[560px] aspect-square rounded-full bg-primary/20 blur-3xl animate-pulse" />

                    <div className="relative w-[260px] sm:w-[320px] md:w-[400px] lg:w-[500px] aspect-square animate-[float_7s_ease-in-out_infinite]">
                        <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-xl animate-[spin_20s_linear_infinite]" />

                        <Image
                            src="/images/hero2.png"
                            alt="Advanced IT Learning Platform"
                            fill
                            priority
                            className="relative object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero