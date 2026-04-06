import { Smartphone, Megaphone, Video, Rocket, Brain, TrendingUp, Target, Play, Camera } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Social Media Marketing mit KI-Power",
    features: [
      { icon: Rocket, text: "Automatisierte Reichweite" },
      { icon: Brain, text: "Content Strategie mit KI-Boost" },
    ],
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    features: [
      { icon: TrendingUp, text: "Marketing-ROI Optimierung" },
      { icon: Target, text: "Facebook Ads" },
    ],
  },
  {
    icon: Video,
    title: "High-End Videoproduktion",
    features: [
      { icon: Play, text: "Professionelle Videoproduktion" },
      { icon: Camera, text: "High-End Kamera-Equipment" },
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#000336]/0 py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Unsere Services:
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1d3a]/80 border border-[#2a2d4a] rounded-2xl p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-[#5b8def] stroke-[1.5]" />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg md:text-xl font-bold mb-6 leading-tight">
                {service.title}
              </h3>

              {/* Features */}
              <div className="flex flex-col gap-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <feature.icon className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
