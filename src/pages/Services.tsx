import { motion } from "motion/react";
import { Shield, Cloud, Server, Headphones, Code, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Shield className="h-10 w-10 text-indigo-600" />,
    title: "Cybersecurity Solutions",
    overview: "Comprehensive protection against evolving digital threats, ensuring your business remains resilient.",
    target: "SMEs and Enterprise businesses handling sensitive data.",
    process: ["Risk Assessment", "Strategy Implementation", "24/7 Monitoring", "Incident Response"],
    benefits: ["Data Protection", "Regulatory Compliance", "Peace of Mind", "Risk Mitigation"],
    price: "£499"
  },
  {
    icon: <Cloud className="h-10 w-10 text-indigo-600" />,
    title: "Managed Cloud Services",
    overview: "Expert management of your cloud infrastructure, optimizing for performance, cost, and security.",
    target: "Businesses looking to migrate or optimize their cloud presence.",
    process: ["Cloud Audit", "Migration Planning", "Deployment", "Ongoing Optimization"],
    benefits: ["Scalability", "Cost Efficiency", "High Availability", "Expert Support"],
    price: "£299"
  },
  {
    icon: <Server className="h-10 w-10 text-indigo-600" />,
    title: "IT Infrastructure",
    overview: "Design, implementation, and maintenance of robust on-premise and hybrid IT environments.",
    target: "Companies requiring high-performance local or hybrid networks.",
    process: ["Site Survey", "Design & Spec", "Installation", "Maintenance"],
    benefits: ["Reliability", "Performance", "Future-Proofing", "Reduced Downtime"],
    price: "£750"
  },
  {
    icon: <Headphones className="h-10 w-10 text-indigo-600" />,
    title: "24/7 Managed Support",
    overview: "Round-the-clock technical assistance to keep your operations running smoothly without interruption.",
    target: "Any business requiring consistent IT uptime and support.",
    process: ["Onboarding", "Helpdesk Integration", "Remote Support", "On-site Visits"],
    benefits: ["Fast Resolution", "Expert Advice", "Continuous Uptime", "Fixed Costs"],
    price: "£199"
  },
  {
    icon: <Code className="h-10 w-10 text-indigo-600" />,
    title: "Custom Software Development",
    overview: "Bespoke software solutions designed to solve your specific business challenges and drive efficiency.",
    target: "Businesses needing tailored tools or customer-facing applications.",
    process: ["Discovery", "Design", "Agile Development", "Testing & Launch"],
    benefits: ["Tailored Fit", "Competitive Edge", "Efficiency Gains", "Ownership"],
    price: "£2,500"
  },
  {
    icon: <Search className="h-10 w-10 text-indigo-600" />,
    title: "IT Consultancy & Strategy",
    overview: "Strategic technology advice to align your IT investments with your long-term business goals.",
    target: "Leadership teams planning for growth or digital transformation.",
    process: ["Business Analysis", "Tech Roadmap", "Budget Planning", "Execution Oversight"],
    benefits: ["Strategic Alignment", "ROI Optimization", "Informed Decisions", "Innovation"],
    price: "£1,200"
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-zinc-900 mb-6"
          >
            Our IT Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to empower UK businesses. From security to strategy, we've got you covered.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-block p-4 rounded-2xl bg-indigo-50 mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">{service.title}</h2>
                  <p className="text-lg text-zinc-600 leading-relaxed">{service.overview}</p>
                  
                  <div className="space-y-4 pt-4">
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-2">Target Audience</h4>
                      <p className="text-zinc-600">{service.target}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">The Process</h4>
                        <ul className="space-y-2">
                          {service.process.map((step) => (
                            <li key={step} className="flex items-center text-sm text-zinc-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center text-sm text-zinc-600">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex items-center justify-between border-t border-zinc-100">
                    <div>
                      <p className="text-sm text-zinc-500">Starting from</p>
                      <p className="text-3xl font-bold text-indigo-600">{service.price}<span className="text-sm text-zinc-400 font-normal"> / month</span></p>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-zinc-900 text-white px-8 py-3 rounded-full font-bold hover:bg-zinc-800 transition-all flex items-center"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
                    <img
                      src={`https://picsum.photos/seed/service-${idx}/800/450`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-8">Not sure what you need?</h2>
          <p className="text-xl text-zinc-600 mb-10">
            Our experts are here to help you navigate the technology landscape and find the right solutions for your business.
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all inline-block shadow-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
