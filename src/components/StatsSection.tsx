import { motion } from "framer-motion";
import { Users, Banknote, Headphones } from "lucide-react";

const stats = [
  { icon: Users, value: "100,000+", label: "Active Users" },
  { icon: Banknote, value: "Millions", label: "Total Payouts (₦)" },
  { icon: Headphones, value: "24/7", label: "Customer Support" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-1">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
