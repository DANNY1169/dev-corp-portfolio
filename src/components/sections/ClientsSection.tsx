import clientLogos from "@/assets/client-logos.png";

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            OUR CLIENTS
          </p>
          <h2 className="text-3xl font-light text-foreground max-w-3xl mx-auto">
            We are extremely proud of the results we have produced in cooperation with our amazing clients
          </h2>
        </div>
        
        <div className="relative overflow-hidden py-8">
          <div className="flex gap-20 animate-scroll">
            {[...Array(3)].map((_, repeatIndex) => (
              <img
                key={repeatIndex}
                src={clientLogos}
                alt="Client Logos"
                className="flex-shrink-0 h-16 object-contain opacity-40 hover:opacity-70 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
