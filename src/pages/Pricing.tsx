import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Essential Support",
    price: "199",
    desc: "Perfect for small businesses needing reliable day-to-day IT assistance.",
    features: [
      "Mon-Fri 9-5 Support",
      "Remote Troubleshooting",
      "Basic Endpoint Security",
      "Monthly Health Checks",
      "Email & Phone Support",
    ],
    support: "Standard Business Hours",
    ideal: "Small teams (up to 10 users)",
    cta: "Start Essential",
    highlight: false
  },
  {
    name: "Professional Managed",
    price: "499",
    desc: "Comprehensive IT management for growing companies requiring proactive care.",
    features: [
      "24/7 Critical Support",
      "Proactive Monitoring",
      "Advanced Cybersecurity",
      "Cloud Backup Management",
      "Dedicated Account Manager",
      "Quarterly Strategy Reviews",
    ],
    support: "24/7 Priority Support",
    ideal: "Growing SMEs (10-50 users)",
    cta: "Go Professional",
    highlight: true
  },
  {
    name: "Enterprise Elite",
    price: "999",
    desc: "Full-scale IT partnership with strategic consulting and maximum security.",
    features: [
      "24/7/365 Instant Support",
      "Full Infrastructure Management",
      "ISO 27001 Compliance Prep",
      "Disaster Recovery Planning",
      "Unlimited On-site Visits",
      "Strategic IT Roadmap",
      "vCFO / vCTO Services",
    ],
    support: "Dedicated VIP Support",
    ideal: "Large Organizations (50+ users)",
    cta: "Contact for Enterprise",
    highlight: false
  }
];

export default function Pricing() {
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
            Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 max-w-3xl mx-auto"
          >
            Choose the plan that fits your business needs. All prices are in GBP and exclude VAT.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.highlight
                    ? "border-indigo-600 shadow-2xl ring-4 ring-indigo-50"
                    : "border-zinc-200 shadow-sm"
                } flex flex-col`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-zinc-900">£{plan.price}</span>
                    <span className="text-zinc-500 ml-2">/ month</span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">*Excluding VAT @ 20%</p>
                </div>
                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
                      <span className="text-zinc-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 pt-6 border-t border-zinc-100 mb-10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider">Support Level</span>
                    <span className="text-zinc-900 font-semibold">{plan.support}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider">Ideal For</span>
                    <span className="text-zinc-900 font-semibold">{plan.ideal}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                    plan.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200"
                      : "bg-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Info Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-indigo-100 p-4 rounded-2xl">
              <Info className="h-10 w-10 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Need a Custom Quote?</h3>
              <p className="text-zinc-600 mb-6">
                Every business is unique. If our standard plans don't quite fit your requirements, we can build a bespoke package tailored specifically to your infrastructure and goals.
              </p>
              <Link to="/contact" className="text-indigo-600 font-bold hover:underline">
                Speak to an advisor →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
