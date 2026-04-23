import { motion } from "framer-motion";
import { ThumbsUp, MessageCircle, Star } from "lucide-react";

const reviews = [
  { name: "Chioma A.", text: "I earned ₦50,000 in my first week! FlashGain 9ja is 100% legit.", likes: 142, time: "2h ago" },
  { name: "Emeka O.", text: "Withdrawal came in less than 5 minutes. No cap, this platform is real.", likes: 89, time: "4h ago" },
  { name: "Blessing I.", text: "I referred 30 people and earned ₦150,000. God bless FlashGain 9ja!", likes: 234, time: "1h ago" },
  { name: "Tunde M.", text: "Best earning platform in Nigeria. I use it every single day.", likes: 67, time: "6h ago" },
  { name: "Funke B.", text: "The daily earnings button alone changed my life. ₦2000 every minute!", likes: 312, time: "30m ago" },
  { name: "Adamu K.", text: "No hidden charges, no stress. Just pure earnings. Thank you FG9ja!", likes: 178, time: "3h ago" },
  { name: "Grace E.", text: "I paid my school fees with FlashGain earnings. Forever grateful 🙏", likes: 445, time: "5h ago" },
  { name: "Segun D.", text: "Customer support is top-notch. They replied in 2 minutes!", likes: 56, time: "8h ago" },
  { name: "Amina Y.", text: "My husband and I both use it. We earn together as a family.", likes: 198, time: "1h ago" },
  { name: "Victor C.", text: "I was skeptical at first, but after my first withdrawal I believed.", likes: 267, time: "7h ago" },
  { name: "Ngozi P.", text: "FlashGain 9ja helped me start my small business. Real platform!", likes: 134, time: "2h ago" },
  { name: "Ibrahim S.", text: "No BVN needed for loans? This is a game changer! 💪", likes: 89, time: "4h ago" },
  { name: "Kemi A.", text: "I've been using it for 3 months. Consistent payouts every time.", likes: 321, time: "45m ago" },
  { name: "David U.", text: "Referred over 100 people. The referral bonus is unmatched!", likes: 156, time: "3h ago" },
  { name: "Fatima H.", text: "The interface is so easy to use. Even my grandmother can navigate it.", likes: 78, time: "6h ago" },
  { name: "Ope T.", text: "Free withdrawals forever? FlashGain 9ja keeps their promises!", likes: 412, time: "20m ago" },
  { name: "Chidi N.", text: "I earn while sleeping. This platform runs 24/7. Amazing!", likes: 203, time: "1h ago" },
  { name: "Aisha M.", text: "Best decision I made this year was joining FlashGain 9ja.", likes: 167, time: "5h ago" },
  { name: "Samuel G.", text: "The business loan feature saved my shop. ₦500,000 with no stress.", likes: 289, time: "2h ago" },
  { name: "Joy O.", text: "I tell everyone about FlashGain 9ja. It's changing lives in Nigeria!", likes: 378, time: "15m ago" },
];

const getInitials = (name: string) => name.split(" ").map(n => n[0]).join("");
const getColor = (i: number) => {
  const colors = [
    "bg-primary", "bg-secondary", "bg-blue-500", "bg-purple-500",
    "bg-pink-500", "bg-orange-500", "bg-teal-500", "bg-indigo-500"
  ];
  return colors[i % colors.length];
};

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => (
  <div className="min-w-[320px] max-w-[340px] bg-card rounded-xl border border-border p-4 shadow-sm flex-shrink-0">
    <div className="flex items-start gap-3">
      <div className={`w-10 h-10 rounded-full ${getColor(index)} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
        {getInitials(review.name)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-sm text-foreground">{review.name}</h4>
          <span className="text-xs text-muted-foreground">{review.time}</span>
        </div>
        <div className="flex items-center gap-0.5 mt-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
          ))}
        </div>
        <p className="text-sm text-foreground/80 mt-2 leading-relaxed">{review.text}</p>
        <div className="flex items-center gap-4 mt-3 pt-2 border-t border-border">
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{review.likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Reply</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Our Users Are Saying
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Real reviews from real Nigerians earning on FlashGain 9ja every day.
          </p>
        </motion.div>
      </div>

      {/* Row 1 - slides left */}
      <div className="relative mb-5">
        <div className="flex gap-5 animate-scroll-left">
          {doubled.map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} index={i} />
          ))}
        </div>
      </div>

      {/* Row 2 - slides left slower */}
      <div className="relative">
        <div className="flex gap-5 animate-scroll-left-slow">
          {[...doubled].reverse().map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} index={i + 5} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
