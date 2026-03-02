import { motion } from "framer-motion";
import { ShieldCheck, Zap, UserCheck, MapPin } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, text: "No hidden charges and no withdrawal fees" },
  { icon: Zap, text: "Super fast customer support through Telegram" },
  { icon: UserCheck, text: "Identity and anti-fraud systems that protect users" },
  { icon: MapPin, text: "Built specifically for Nigerian users' needs" },
];

const TrustSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Why Nigerians Trust{" "}
              <span className="text-gradient">FlashGain 9ja</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl trust-bg border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {reason.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
