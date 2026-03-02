import { motion } from "framer-motion";
import { Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6"
          >
            <Target className="w-4 h-4" />
            Our Mission
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            About <span className="text-gradient">FlashGain 9ja</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10"
          >
            FlashGain 9ja was created to empower Nigerians with real earning opportunities, 
            fast withdrawals and trusted digital services. Our system helps users support their 
            families, grow their hustle, fund education and improve their financial life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            <Heart className="w-5 h-5 text-secondary" />
            Built with love for every Nigerian hustle
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
