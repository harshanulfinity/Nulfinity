import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CalendlyButton } from "@/components/ui/calendly-button";
import { Lightbulb, Zap, Users, Cpu, CheckCircle2, Smartphone, Cloud, Brain, Rocket, Target, Layers, TrendingUp } from "lucide-react";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Product Development | Nulfinity",
  description: "Transform innovative ideas into scalable, market-ready digital products through strategy, design, engineering, and continuous innovation.",
  path: "/services/product-development",
});

export default function ProductDevelopmentPage() {
  return (
    <div className="grid-bg">
      <PageHero
        eyebrow="Product Development"
        title="Powered by Nulfinity"
        description="Transform innovative ideas into scalable, market-ready digital products through strategy, design, engineering, and continuous innovation."
        actions={<CalendlyButton className="rounded-full bg-[var(--primary)] px-5 py-3 text-white">Get Started</CalendlyButton>}
      />

      {/* What is Product Development */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="What is Product Development?" title="At Nulfinity, Product Development is the process of transforming innovative ideas into scalable, market-ready digital products" description="We help startups, enterprises, and growing businesses build high-performance products that solve real-world problems, deliver exceptional user experiences, and drive long-term business growth." />
        <div className="mt-8">
          <GlowCard>
            <p className="text-lg text-[var(--muted)]">
              From MVPs to enterprise-grade platforms, Nulfinity combines technology, agility, and product thinking to bring ideas to life faster and smarter.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Benefits of Nulfinity Product Development */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="Benefits of Nulfinity Product Development" title="Key advantages of our product development approach" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <Target className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Transform Ideas into Scalable Products</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Convert business concepts into fully functional digital products designed for growth and long-term scalability.
            </p>
          </GlowCard>
          <GlowCard>
            <Zap className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Faster Time to Market</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Launch products quickly using agile development methodologies, rapid prototyping, and streamlined workflows.
            </p>
          </GlowCard>
          <GlowCard>
            <Users className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">User-Centric Product Design</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Build intuitive, engaging, and high-performing user experiences focused on customer needs and business goals.
            </p>
          </GlowCard>
          <GlowCard>
            <Lightbulb className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Innovation-Driven Development</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Leverage AI, cloud technologies, automation, and modern architectures to create future-ready products.
            </p>
          </GlowCard>
          <GlowCard className="md:col-span-2">
            <Layers className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">End-to-End Product Ownership</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              From strategy and development to deployment and scaling, Nulfinity manages the complete product lifecycle.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* How Nulfinity Product Development Works */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="How Nulfinity Product Development Works" title="7-step process for building successful products" />
        <div className="mt-8 space-y-4">
          <GlowCard>
            <h3 className="text-lg font-semibold">1. Product Discovery & Strategy</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Every successful product starts with a clear vision and market understanding. We help businesses define Product goals, Market opportunities, User personas, Feature roadmaps, Business models, and Go-to-market strategies. This ensures every product is aligned with customer needs and business growth objectives.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">2. UI/UX Design & Prototyping</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Nulfinity designs user-focused digital experiences that combine aesthetics with functionality. Our design process includes Wireframing, Interactive prototyping, User journey mapping, Design systems, Responsive UI design, and Experience optimization. The goal is to create products users love to interact with.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">3. Agile Product Engineering</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We build scalable and secure applications using modern development frameworks and agile methodologies. Our engineering capabilities include Web application development, Mobile app development, SaaS platform development, AI-powered applications, API development, Backend architecture, and Cloud-native systems. Nulfinity ensures products are built for performance, flexibility, and future scalability.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">4. AI & Intelligent Automation Integration</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Modern products require intelligent capabilities. We integrate Artificial Intelligence, Machine Learning, Generative AI, Intelligent automation, Predictive analytics, and Conversational AI to create smarter digital experiences and automation-driven workflows.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">5. Quality Assurance & Testing</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Before launch, every product undergoes rigorous testing to ensure reliability and performance. This includes Functional testing, Security testing, Performance optimization, Cross-platform compatibility, Automation testing, and User acceptance testing. Our QA process ensures stable and production-ready deployments.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">6. Deployment & Cloud Infrastructure</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Nulfinity deploys products using scalable cloud infrastructure and DevOps automation. Capabilities include CI/CD pipelines, Kubernetes deployment, Cloud hosting, Monitoring systems, Infrastructure automation, and High-availability architecture. This ensures smooth deployment and operational efficiency.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">7. Continuous Improvement & Scaling</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Product development does not stop after launch. We continuously optimize products through Feature enhancements, User feedback analysis, Performance monitoring, Security updates, Scalability improvements, and Product analytics. This helps businesses evolve with changing customer and market demands.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Product Development Services */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="Product Development Services" title="Comprehensive product development solutions" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <Rocket className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">MVP Development</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Launch Minimum Viable Products quickly to validate ideas and enter the market faster.
            </p>
          </GlowCard>
          <GlowCard>
            <Cloud className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">SaaS Product Development</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Build scalable cloud-native software platforms for global users.
            </p>
          </GlowCard>
          <GlowCard>
            <Layers className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Enterprise Software Development</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Develop secure and high-performance enterprise applications for complex business operations.
            </p>
          </GlowCard>
          <GlowCard>
            <Smartphone className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Mobile App Development</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Create powerful Android and iOS applications with seamless user experiences.
            </p>
          </GlowCard>
          <GlowCard>
            <Brain className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">AI Product Development</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Build AI-powered platforms and automation-driven digital products.
            </p>
          </GlowCard>
          <GlowCard>
            <Cpu className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Custom Software Solutions</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Design and develop tailor-made solutions aligned with specific business needs.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Nulfinity + AI-Driven Product Innovation */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="Nulfinity + AI-Driven Product Innovation" title="Our AI-powered product development approach enables businesses to" description="Create products that are not just functional, but adaptive and future-ready." />
        <div className="mt-8">
          <GlowCard>
            <p className="text-lg text-[var(--muted)]">
              At Nulfinity, we combine product engineering with AI and automation to create intelligent digital ecosystems.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>• Automate operations</li>
              <li>• Personalize user experiences</li>
              <li>• Improve decision-making</li>
              <li>• Increase scalability</li>
              <li>• Accelerate innovation</li>
              <li>• Reduce operational costs</li>
            </ul>
          </GlowCard>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="Industry Use Cases" title="Industries we serve with product development" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <h3 className="text-lg font-semibold">FinTech</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Digital banking platforms, payment systems, financial analytics, and automation tools.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Healthcare</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Patient management systems, healthcare automation, and AI-powered medical platforms.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Logistics</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Supply chain platforms, fleet tracking systems, and intelligent logistics applications.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">E-Commerce</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Scalable online marketplaces, AI-driven shopping experiences, and payment integrations.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Learning management systems, EdTech platforms, and virtual learning environments.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="text-lg font-semibold">Enterprise Operations</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Custom enterprise tools, workflow automation systems, and internal business platforms.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Why Businesses Choose Nulfinity */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="Why Businesses Choose Nulfinity for Product Development" title="Benefits of partnering with Nulfinity" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <CheckCircle2 className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">End-to-End Product Expertise</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              From concept to deployment and scaling, we manage the complete product journey.
            </p>
          </GlowCard>
          <GlowCard>
            <Zap className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Agile & Innovation-First Approach</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We combine rapid execution with modern technologies to accelerate product success.
            </p>
          </GlowCard>
          <GlowCard>
            <TrendingUp className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Scalable Architecture</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Products are designed for long-term scalability, performance, and operational efficiency.
            </p>
          </GlowCard>
          <GlowCard>
            <Target className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Business-Focused Development</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Every product is aligned with measurable business goals and customer value.
            </p>
          </GlowCard>
          <GlowCard className="md:col-span-2">
            <Cpu className="text-[var(--secondary)]" />
            <h3 className="mt-4 text-lg font-semibold">Future-Ready Technology Stack</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We build products powered by cloud, AI, automation, and modern engineering practices.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* The Future of Product Development */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="The Future of Product Development" title="The next generation of innovation starts with products built for adaptability, intelligence, and growth" />
        <div className="mt-8">
          <GlowCard>
            <p className="text-lg text-[var(--muted)]">
              At Nulfinity, we believe the future belongs to intelligent, scalable, and customer-centric digital products.
            </p>
            <p className="mt-4 text-lg text-[var(--muted)]">
              By combining AI, cloud technologies, agile engineering, and automation, we help businesses move from ideas to impactful products faster than ever before.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-[min(1180px,92%)] py-16">
        <SectionHeading eyebrow="Frequently Asked Questions" title="Common questions about Nulfinity Product Development" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlowCard>
            <h3 className="font-semibold">What types of products does Nulfinity build?</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              We develop SaaS platforms, enterprise applications, mobile apps, AI-powered systems, automation platforms, and custom digital products.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-semibold">Can Nulfinity help build an MVP?</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Yes. We specialize in MVP development to help startups validate ideas quickly and efficiently.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-semibold">Does Nulfinity provide UI/UX design services?</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Absolutely. We offer complete UI/UX design, prototyping, and user experience optimization.
            </p>
          </GlowCard>
          <GlowCard>
            <h3 className="font-semibold">Can AI be integrated into products?</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Yes. We integrate AI, ML, Generative AI, and intelligent automation into modern digital products.
            </p>
          </GlowCard>
          <GlowCard className="md:col-span-2">
            <h3 className="font-semibold">Does Nulfinity provide post-launch support?</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Yes. We offer continuous maintenance, scaling, optimization, monitoring, and feature enhancement services.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-[min(1180px,92%)] py-20">
        <GlowCard className="text-center">
          <h2 className="text-2xl font-semibold">Ready to build your next product?</h2>
          <p className="mt-4 text-[var(--muted)]">Contact us to learn how Nulfinity Product Development can bring your ideas to life.</p>
          <CalendlyButton className="mt-6 rounded-full bg-[var(--primary)] px-5 py-3 text-white">Get Started</CalendlyButton>
        </GlowCard>
      </section>
    </div>
  );
}
