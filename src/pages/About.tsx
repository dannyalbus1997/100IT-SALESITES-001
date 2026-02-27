import { motion } from "motion/react";
import { Shield, Target, Eye, Heart, Award, Users } from "lucide-react";

const values = [
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Integrity",
    desc: "We operate with absolute transparency and honesty in every interaction."
  },
  {
    icon: <Award className="h-8 w-8 text-indigo-600" />,
    title: "Excellence",
    desc: "We strive for the highest quality in our technical solutions and support."
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    title: "Partnership",
    desc: "We view ourselves as an extension of your team, not just a vendor."
  },
  {
    icon: <Heart className="h-8 w-8 text-indigo-600" />,
    title: "Innovation",
    desc: "We constantly explore new technologies to keep our clients ahead."
  }
];

const team = [
  {
    name: "James Anderson",
    role: "Managing Director",
    bio: "20+ years of experience in enterprise IT and strategic management.",
    image: "https://picsum.photos/seed/team1/400/400"
  },
  {
    name: "Eleanor Wright",
    role: "Technical Director",
    bio: "Expert in cloud architecture and cybersecurity infrastructure.",
    image: "https://picsum.photos/seed/team2/400/400"
  },
  {
    name: "Marcus Thorne",
    role: "Head of Client Success",
    bio: "Dedicated to ensuring our clients achieve their business goals through tech.",
    image: "https://picsum.photos/seed/team3/400/400"
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
              Our Story. <span className="text-indigo-500">Your Future.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Founded in London, Assure Supported Living was born from a simple mission: to make enterprise-grade IT accessible and understandable for UK businesses of all sizes.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
          <img
            src="https://picsum.photos/seed/about-hero/1000/1000"
            alt="Office"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-block p-3 rounded-xl bg-indigo-50">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900">Our Mission</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To empower British businesses by providing reliable, secure, and innovative IT solutions that drive growth, efficiency, and peace of mind. We aim to be the most trusted IT partner in the UK through technical excellence and exceptional service.
              </p>
            </div>
            <div className="space-y-6">
              <div className="inline-block p-3 rounded-xl bg-indigo-50">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900">Our Vision</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                To redefine the IT service experience, where technology is a seamless enabler of human potential. We envision a future where every business we support is fully optimized, secure, and ready for the digital challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-zinc-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{value.title}</h3>
                <p className="text-zinc-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-zinc-600">Meet the experts behind Assure Supported Living.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                <p className="text-zinc-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Commitment */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-8 text-indigo-200" />
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Commitment to GDPR</h2>
          <p className="text-xl text-indigo-100 leading-relaxed">
            Data privacy isn't just a legal requirement for us; it's a core value. We are fully committed to GDPR compliance and help our clients achieve the same through robust data protection strategies and secure infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
}
