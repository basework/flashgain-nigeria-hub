import { motion } from "framer-motion";
import { ShieldAlert, MessageCircle, Send } from "lucide-react";

const NoticeSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Official Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border-2 border-primary/20 bg-accent/50 p-8 mb-10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                  Official Notice — Verified Platform
                </span>
                <p className="text-foreground leading-relaxed">
                  FlashGain 9ja strictly follows identity checks and fraud prevention systems 
                  to protect all users and ensure transparent earnings.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 ml-16">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg hero-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Support
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-semibold hover:bg-muted transition-colors"
              >
                <Send className="w-4 h-4" />
                Join Community Channel
              </a>
            </div>
          </motion.div>

          {/* Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-xl hero-gradient p-8 text-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Our Promise
            </h3>
            <p className="text-primary-foreground/85 leading-relaxed max-w-lg mx-auto">
              Withdrawals will remain free forever. FlashGain 9ja will always ensure 
              your balance is protected and paid.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
