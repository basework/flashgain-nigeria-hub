import { motion } from "framer-motion";
import {
  Wallet,
  Users,
  Landmark,
  Briefcase,
  Gift,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Daily Earnings",
    description: "Earn ₦2000 every 1 minute by claiming through the daily earnings button.",
  },
  {
    icon: Users,
    title: "Referral Rewards",
    description: "Earn ₦5,000 per verified referral with no limits. Some users earn from 50 to 300 referrals.",
  },
  {
    icon: Landmark,
    title: "Quick Loans",
    description: "Access Quick Loans instantly with no collateral or BVN required.",
  },
  {
    icon: Briefcase,
    title: "Business Loans",
    description: "Apply for Business Loans from ₦500,000 to ₦5,000,000 with 3% processing fee and 12 months repayment.",
  },
  {
    icon: Gift,
    title: "Bonus & Rewards",
    description: "Earn through tasks, referrals, bonuses and performance rewards.",
  },
  {
    icon: BadgeCheck,
    title: "Free Withdrawals",
    description: "Withdrawals remain 100% free forever. No hidden charges.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What You Can Do on{" "}
            <span className="text-gradient">FlashGain 9ja</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Multiple ways to earn, grow, and secure your finances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl p-7 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
