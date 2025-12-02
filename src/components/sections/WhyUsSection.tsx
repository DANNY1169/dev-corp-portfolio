import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "On-Time Delivery",
    description:
      "We respect deadlines and deliver projects on schedule, every time.",
  },
  {
    title: "Reliable & Professional",
    description:
      "Clear communication, transparent processes, and consistent quality.",
  },
  {
    title: "Modern Tech Stack",
    description:
      "We use the latest technologies to build future-proof solutions.",
  },
  {
    title: "Flexible Engagement",
    description:
      "From hourly consulting to full project development—we adapt to your needs.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine technical expertise with business understanding to
              deliver solutions that not only work but drive real results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience across diverse projects, we bring
              reliability, clarity, and craftsmanship to every engagement.
            </p>
          </motion.div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex gap-4 p-6 rounded-lg bg-[hsl(var(--section-bg))] hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
