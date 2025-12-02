import { CorvaLogo, MeituanLogo, GPlansLogo } from "@/components/client-logos";

export const ClientsSection = () => {
  const clients = [
    { name: "Corva", Component: CorvaLogo },
    { name: "Meituan", Component: MeituanLogo },
    { name: "G:Plans", Component: GPlansLogo },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            OUR CLIENTS
          </p>
          <h2 className="text-3xl font-light text-foreground max-w-3xl mx-auto">
            We are extremely proud of the results we have produced in
            cooperation with our amazing clients
          </h2>
        </div>

        <div className="relative overflow-hidden py-8">
          <div className="flex gap-16 animate-scroll items-center">
            {/* Repeat the client logos multiple times for seamless scrolling */}
            {[...Array(4)].map((_, repeatIndex) => (
              <div key={repeatIndex} className="flex gap-16 items-center">
                {clients.map((client, index) => (
                  <div
                    key={`${repeatIndex}-${index}`}
                    className="flex-shrink-0 h-16 w-48 text-foreground/40 hover:text-foreground/70 transition-all duration-300 hover:scale-110"
                    title={client.name}
                  >
                    <client.Component />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
