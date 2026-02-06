import { motion } from "motion/react";

export function HeroInfographic() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-full max-w-[600px] lg:max-w-[640px] lg:self-end"
    >
      <div className="relative aspect-square w-full">
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(52,211,153,0.08), transparent 60%)",
          }}
        />

        <div
          className="absolute top-[10%] left-[15%] w-[45%] h-[50%] rounded-3xl border border-primary/20 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] -rotate-[8deg]"
          style={{
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 20px rgba(52,211,153,0.1)",
          }}
        >
          <div className="p-6 h-full">
            <div className="grid grid-cols-3 gap-3 h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-primary/10 bg-primary/5"
                  style={{
                    boxShadow: i === 4 ? "0 0 15px rgba(52,211,153,0.3)" : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute top-[25%] right-[10%] w-[50%] h-[40%] rounded-3xl border border-primary/25 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] rotate-[6deg]"
          style={{
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 25px rgba(52,211,153,0.15)",
          }}
        >
          <div className="p-8 space-y-6">
            {[
              { width: "60%" },
              { width: "35%" },
              { width: "80%" },
            ].map((slider, index) => (
              <div key={index} className="space-y-2">
                <div className="h-1.5 rounded-full bg-white/10 relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-[#6ee7b7] shadow-[0_0_15px_rgba(52,211,153,0.6)]"
                    style={{ width: slider.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-[15%] left-[20%] w-[55%] h-[35%] rounded-3xl border border-primary/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)] rotate-[3deg]"
          style={{
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 20px rgba(52,211,153,0.12)",
          }}
        >
          <div className="p-6 flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full border-2 border-primary/40 bg-primary/10"
              style={{ boxShadow: "0 0 20px rgba(52,211,153,0.3)" }}
            />

            <div className="flex-1 space-y-3">
              <div
                className="h-3 w-32 rounded-full border border-primary/30 bg-primary/10"
                style={{ boxShadow: "0 0 12px rgba(52,211,153,0.25)" }}
              />
              <div className="h-2.5 w-24 rounded-full border border-primary/20 bg-primary/5" />
              <div className="h-2.5 w-28 rounded-full border border-primary/20 bg-primary/5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}