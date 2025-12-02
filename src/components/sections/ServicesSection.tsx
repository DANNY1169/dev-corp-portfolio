import { Card } from "@/components/ui/card";
import {
  Code2,
  Smartphone,
  Server,
  Blocks,
  Database,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Modern, responsive web applications using React, TypeScript, and cutting-edge frameworks.",
    tech: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with robust APIs and efficient data processing.",
    tech: "Node.js, Python, PostgreSQL, Redis",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless user experiences.",
    tech: "React Native, iOS, Android",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Optimized database architectures for performance, scalability, and reliability.",
    tech: "PostgreSQL, MongoDB, Redis",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Deployment, hosting, and infrastructure management on modern cloud platforms.",
    tech: "AWS, Vercel, Supabase",
  },
  {
    icon: Blocks,
    title: "Consulting & Architecture",
    description:
      "Technical guidance and architecture planning for complex projects.",
    tech: "System Design, Code Review, Best Practices",
  },
];

export const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-24 px-6 bg-[hsl(var(--section-bg))]">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack development services tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-border/50">
                    <p className="text-sm text-muted-foreground font-medium">
                      {service.tech}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
