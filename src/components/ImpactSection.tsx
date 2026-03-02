import { motion } from "framer-motion";
import { GraduationCap, Store } from "lucide-react";

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Real Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Impact Across <span className="text-gradient">Nigeria</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5">
              <GraduationCap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Education Support
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Students used FlashGain 9ja earnings to continue school, pay tuition fees, 
              and purchase learning materials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-xl p-8 border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
              <Store className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Business Support
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Small business owners expanded their capital through earnings 
              and grew their enterprises.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
