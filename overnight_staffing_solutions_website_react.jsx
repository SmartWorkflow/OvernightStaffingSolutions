export default function OvernightStaffingSolutionsWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
              24/7 Offshore Operations & Workforce Solutions
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight lg:text-7xl">
              Build a
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"> 24/7 Workforce </span>
              Without Building a Large In-House Team.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">
              Overnight Staffing Solutions helps businesses eliminate time zone bottlenecks,
              streamline complex workflows, and scale operations with highly trained offshore
              teams that work while you sleep.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-2xl transition hover:bg-blue-500"
              >
                Book Free Consultation
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-center text-lg font-semibold backdrop-blur transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["24/7", "Coverage"],
                ["70%", "Lower Operating Cost"],
                ["3x", "Faster Workflow Turnaround"],
                ["100+", "Skilled Offshore Staff"],
              ].map(([number, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="text-3xl font-black text-cyan-300">{number}</div>
                  <div className="mt-2 text-sm text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:w-[480px]">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Global Operations Dashboard</h3>
                  <p className="text-sm text-slate-300">Always online. Always moving.</p>
                </div>
                <div className="h-4 w-4 rounded-full bg-green-400"></div>
              </div>

              <div className="space-y-5">
                {[
                  ["Customer Support", "98% SLA Met"],
                  ["Back Office Processing", "Running Smoothly"],
                  ["Lead Qualification", "2,340 Tasks Completed"],
                  ["Administrative Support", "24 Active Specialists"],
                ].map(([title, status]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{title}</div>
                        <div className="mt-1 text-sm text-slate-400">{status}</div>
                      </div>
                      <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
                        Active
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Trusted By Fast-Growing Companies Worldwide
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 text-center md:grid-cols-5">
            {[
              "Real Estate",
              "E-Commerce",
              "Healthcare",
              "Logistics",
              "SaaS Companies",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-lg font-bold shadow-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            What We Do
          </div>
          <h2 className="mt-4 text-4xl font-black leading-tight lg:text-5xl">
            Offshore Teams Designed To Operate Like An Extension Of Your Company.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We recruit, train, manage, and optimize offshore teams so you can focus on scaling
            revenue, improving operations, and serving customers around the clock.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "24/7 Customer Support",
              desc: "Provide nonstop customer service coverage across multiple time zones with professionally trained support teams.",
            },
            {
              title: "Back Office Operations",
              desc: "Manage repetitive and operationally heavy tasks with precision-driven offshore specialists.",
            },
            {
              title: "Lead Qualification & Outreach",
              desc: "Scale lead management, prospect qualification, CRM updates, and outreach campaigns efficiently.",
            },
            {
              title: "Administrative Support",
              desc: "Virtual assistants, scheduling, inbox management, data entry, reporting, and operational support.",
            },
            {
              title: "Workflow Optimization",
              desc: "We audit your existing processes and build streamlined operational systems for faster execution.",
            },
            {
              title: "Dedicated Offshore Teams",
              desc: "Build fully managed offshore departments without the overhead of hiring and infrastructure.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                ⚡
              </div>

              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Why Overnight Staffing Solutions
            </div>

            <h2 className="mt-4 text-4xl font-black leading-tight lg:text-5xl">
              Reduce Operational Pressure While Scaling Faster.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We combine offshore staffing, workflow management, and operational systems into one
              scalable solution that helps businesses grow without burning internal resources.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Pre-trained offshore specialists",
                "Dedicated account and operations management",
                "Rapid team deployment and onboarding",
                "Flexible scaling based on workload",
                "Continuous reporting and workflow tracking",
                "Cost-effective long-term operations",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-sm font-bold text-slate-900">
                    ✓
                  </div>
                  <div className="text-lg text-slate-200">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Average Client Results</div>
                <div className="mt-2 text-3xl font-black">Operational Growth Metrics</div>
              </div>
            </div>

            <div className="space-y-8">
              {[
                ["Reduced Staffing Cost", "70%"],
                ["Faster Turnaround Time", "3X"],
                ["Operational Coverage", "24/7"],
                ["Team Deployment Speed", "7 Days"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-3 flex justify-between text-sm font-semibold text-slate-300">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="text-center">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Simple Process
          </div>

          <h2 className="mt-4 text-4xl font-black lg:text-5xl">
            How We Help You Scale Operations
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["01", "Discovery Call", "We analyze your current workflows, bottlenecks, and operational needs."],
            ["02", "Team Planning", "We design the ideal offshore staffing structure for your business."],
            ["03", "Deployment", "Your offshore team is recruited, trained, and integrated into operations."],
            ["04", "Optimization", "We continuously improve workflow efficiency and operational performance."],
          ].map(([step, title, desc]) => (
            <div
              key={step}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
            >
              <div className="text-5xl font-black text-blue-200">{step}</div>
              <h3 className="mt-6 text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <h2 className="text-4xl font-black leading-tight lg:text-6xl">
            Stop Losing Productivity To Time Zones.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-blue-100">
            Build a scalable, always-on operation with dedicated offshore teams that keep your
            business moving 24 hours a day.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Schedule Consultation
            </a>

            <a
              href="mailto:hello@overnightstaffingsolutions.com"
              className="rounded-2xl border border-white/30 px-8 py-4 text-lg font-bold transition hover:bg-white/10"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              Contact Us
            </div>

            <h2 className="mt-4 text-4xl font-black lg:text-5xl">
              Ready To Build Your Offshore Team?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Let’s discuss your workflows, operational challenges, and growth goals. We’ll create
              a scalable staffing strategy tailored to your business.
            </p>

            <div className="mt-10 space-y-6 text-lg">
              <div>
                <span className="font-bold">Email:</span> hello@overnightstaffingsolutions.com
              </div>
              <div>
                <span className="font-bold">Availability:</span> 24/7 Global Coverage
              </div>
              <div>
                <span className="font-bold">Services:</span> Offshore Staffing, Operations,
                Workflow Management
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block font-semibold">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">Company Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">Tell Us About Your Needs</label>
                <textarea
                  rows="5"
                  placeholder="Describe your operational challenges, staffing requirements, or workflows..."
                  className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-950 px-6 py-4 text-lg font-bold text-white transition hover:bg-slate-800"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center lg:flex-row lg:px-12 lg:text-left">
          <div>
            <div className="text-2xl font-black">Overnight Staffing Solutions</div>
            <div className="mt-2 text-slate-600">
              Offshore staffing and operational support built for modern businesses.
            </div>
          </div>

          <div className="text-sm text-slate-500">
            © 2026 Overnight Staffing Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/*
===========================================
SETUP INSTRUCTIONS
===========================================

1. Create a new Next.js project:

npx create-next-app@latest overnight-staffing

2. Install Tailwind CSS if not already installed.

3. Replace the content of:
app/page.js
with this file.

4. Run locally:

npm run dev

5. Build for production:

npm run build

6. Upload to Vercel, Netlify, or your hosting provider.

===========================================
RECOMMENDED ADDITIONS
===========================================

- Add Calendly integration
- Add live chat widget
- Add CRM integration (HubSpot/GoHighLevel)
- Add case studies/testimonials
- Add lead capture automation
- Connect form to Formspree or custom backend
- Add SEO metadata and blog pages
- Add animated counters and motion effects

===========================================
RECOMMENDED DOMAIN NAMES
===========================================

- overnightstaffingsolutions.com
- overnightops.com
- 247offshoreteams.com
- timezoneworkforce.com
- scaleovernight.com

*/
