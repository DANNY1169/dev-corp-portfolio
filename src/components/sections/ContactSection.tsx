import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const ContactSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const services = ["FRONTEND", "BACKEND", "MOBILE", "DESIGN", "TESTING"];

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-light mb-6">
              We <span className="text-primary font-normal">Help You To Turn</span>
              <br />
              <span className="text-primary font-normal">Ideas Into Reality</span>
            </h2>
            
            <div className="my-12">
              <div className="text-6xl text-muted-foreground mb-4">"</div>
              <p className="text-xl text-foreground font-light leading-relaxed">
                Words don't matter – performance does. We stand ready to deliver for your specific needs.
              </p>
              <div className="text-6xl text-muted-foreground text-right">"</div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">DEV'S CORP</p>
              <p className="text-sm text-muted-foreground">BN 774985352</p>
              <p className="text-sm text-muted-foreground">Belleville, Ontario, Canada</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-light text-center mb-2">
              Fill in the basics and we'll get in touch
            </h3>
            <p className="text-center text-muted-foreground mb-8">as soon as possible</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => toggleService(service)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    selectedServices.includes(service)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>

            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Company*"
                  className="bg-background border-b border-border rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email*"
                  className="bg-background border-b border-border rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone*"
                  className="bg-background border-b border-border rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Message*"
                  rows={4}
                  className="bg-background border-b border-border rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                GET IN TOUCH →
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
