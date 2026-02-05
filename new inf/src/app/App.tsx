export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-[#0a0a0f] overflow-hidden">
      {/* Container - 1:1 square aspect ratio */}
      <div className="relative w-[min(90vmin,600px)] aspect-square">
        
        {/* Background glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-[#34D399]/5 via-transparent to-transparent blur-3xl" />
        
        {/* Panel 1 - Grid with glassmorphism */}
        <div 
          className="absolute top-[10%] left-[15%] w-[45%] h-[50%] rounded-3xl border border-[#34D399]/20 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] rotate-[-8deg]"
          style={{ 
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05), 0 0 20px rgba(52,211,153,0.1)'
          }}
        >
          {/* Grid pattern */}
          <div className="p-6 h-full">
            <div className="grid grid-cols-3 gap-3 h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={i} 
                  className="rounded-xl border border-[#34D399]/10 bg-[#34D399]/5"
                  style={{
                    boxShadow: i === 4 ? '0 0 15px rgba(52,211,153,0.3)' : 'none'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Panel 2 - Sliders */}
        <div 
          className="absolute top-[25%] right-[10%] w-[50%] h-[40%] rounded-3xl border border-[#34D399]/25 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] rotate-[6deg]"
          style={{ 
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08), 0 0 25px rgba(52,211,153,0.15)'
          }}
        >
          <div className="p-8 space-y-6">
            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="h-1.5 rounded-full bg-white/10 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[60%] bg-gradient-to-r from-[#34D399] to-[#6ee7b7] rounded-full shadow-[0_0_15px_rgba(52,211,153,0.6)]" />
              </div>
            </div>
            
            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="h-1.5 rounded-full bg-white/10 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-[#34D399] to-[#6ee7b7] rounded-full shadow-[0_0_15px_rgba(52,211,153,0.6)]" />
              </div>
            </div>
            
            {/* Slider 3 */}
            <div className="space-y-2">
              <div className="h-1.5 rounded-full bg-white/10 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-[80%] bg-gradient-to-r from-[#34D399] to-[#6ee7b7] rounded-full shadow-[0_0_15px_rgba(52,211,153,0.6)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3 - User Card (incognito style) */}
        <div 
          className="absolute bottom-[15%] left-[20%] w-[55%] h-[35%] rounded-3xl border border-[#34D399]/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)] rotate-[3deg]"
          style={{ 
            boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 20px rgba(52,211,153,0.12)'
          }}
        >
          <div className="p-6 flex items-center gap-4">
            {/* Avatar placeholder */}
            <div 
              className="w-16 h-16 rounded-full border-2 border-[#34D399]/40 bg-[#34D399]/10"
              style={{
                boxShadow: '0 0 20px rgba(52,211,153,0.3)'
              }}
            />
            
            {/* User info lines */}
            <div className="flex-1 space-y-3">
              {/* Name line */}
              <div 
                className="h-3 w-32 rounded-full border border-[#34D399]/30 bg-[#34D399]/10"
                style={{
                  boxShadow: '0 0 12px rgba(52,211,153,0.25)'
                }}
              />
              {/* Info line 1 */}
              <div 
                className="h-2.5 w-24 rounded-full border border-[#34D399]/20 bg-[#34D399]/5"
              />
              {/* Info line 2 */}
              <div 
                className="h-2.5 w-28 rounded-full border border-[#34D399]/20 bg-[#34D399]/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}