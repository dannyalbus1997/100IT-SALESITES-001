import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Server, Shield, Cloud, Users, BarChart3, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  "Financial Services", "Healthcare", "Legal", "Education", "Retail", "Manufacturing"
];

const stats = [
  { label: "Client Satisfaction", value: "99%" },
  { label: "Uptime Guarantee", value: "99.9%" },
  { label: "Average Response", value: "< 15m" },
  { label: "Years Experience", value: "15+" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                UK's Leading IT Partner
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] mb-8 tracking-tight">
                Empowering Your Business Through <span className="text-indigo-600">Intelligent IT.</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-lg">
                Assure Supported Living provides bespoke IT infrastructure, cybersecurity, and managed services tailored for the British market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-zinc-50 transition-all flex items-center justify-center"
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/it-services/800/800"
                  alt="Modern IT Office"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">ISO 27001 Certified</p>
                    <p className="text-xs text-zinc-500">Highest security standards</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-1">{stat.value}</p>
                <p className="text-sm text-zinc-500 font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-4">Why Choose Assure?</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We combine deep technical expertise with a human-centric approach to deliver IT that actually works for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="h-8 w-8 text-indigo-600" />,
                title: "Reliable Infrastructure",
                desc: "Enterprise-grade hardware and software solutions that scale with your growth."
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-600" />,
                title: "Proactive Security",
                desc: "Advanced threat detection and mitigation to keep your data safe 24/7."
              },
              {
                icon: <Cloud className="h-8 w-8 text-indigo-600" />,
                title: "Cloud Excellence",
                desc: "Seamless migration and management of cloud environments (Azure, AWS, Google)."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:shadow-lg transition-shadow">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{benefit.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Expertise Across UK Industries</h2>
              <p className="text-zinc-400 text-lg mb-8">
                We understand the unique regulatory and operational challenges faced by British businesses across various sectors.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                    <span className="font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/finance/400/500" className="rounded-2xl w-full h-64 object-cover" alt="Finance" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/health/400/300" className="rounded-2xl w-full h-40 object-cover" alt="Healthcare" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://picsum.photos/seed/legal/400/300" className="rounded-2xl w-full h-40 object-cover" alt="Legal" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/retail/400/500" className="rounded-2xl w-full h-64 object-cover" alt="Retail" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-4">Proven Results</h2>
              <p className="text-lg text-zinc-600 max-w-xl">
                Real-world examples of how we've helped UK businesses optimize their technology.
              </p>
            </div>
            <Link to="/services" className="text-indigo-600 font-bold flex items-center hover:underline">
              View all services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Financial Firm Digital Transformation",
                client: "London Wealth Management",
                saving: "£45,000/year",
                desc: "Migrated legacy on-premise servers to a secure hybrid cloud, reducing operational costs and improving remote access speed by 40%."
              },
              {
                title: "Healthcare Provider Cybersecurity",
                client: "Midlands Health Group",
                saving: "£120,000 risk reduction",
                desc: "Implemented a multi-layered security framework and 24/7 monitoring, successfully thwarting 3 major ransomware attempts in the first year."
              }
            ].map((study, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={`https://picsum.photos/seed/case-${idx}/800/600`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={study.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-indigo-600">
                    {study.saving} saved
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">{study.title}</h3>
                <p className="text-sm font-semibold text-indigo-600 mb-4">{study.client}</p>
                <p className="text-zinc-600 leading-relaxed">{study.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alistair Graham",
                role: "CEO, Graham & Co",
                text: "Assure has been instrumental in our growth. Their support is fast, reliable, and they truly understand our business needs."
              },
              {
                name: "Sarah Jenkins",
                role: "Operations Director, TechFlow Ltd",
                text: "The peace of mind knowing our systems are secure and monitored 24/7 is invaluable. Highly recommend their cybersecurity services."
              },
              {
                name: "David Thompson",
                role: "IT Manager, City Logistics",
                text: "Professional, knowledgeable, and always available. They feel like an extension of our own team rather than an external provider."
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-zinc-600 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-zinc-900">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your IT?</h2>
          <p className="text-xl text-indigo-100 mb-10">
            Join hundreds of UK businesses that trust Assure Supported Living for their technology needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all inline-block"
          >
            Get a Free IT Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
