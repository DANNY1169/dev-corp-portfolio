import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

export const ContactSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();
  const services = ["FRONTEND", "BACKEND", "MOBILE", "DESIGN", "TESTING"];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.company ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:3001/api/contact", {
        ...formData,
        services: selectedServices,
      });

      if (response.data.success) {
        toast({
          title: "Success!",
          description: response.data.message,
        });

        // Reset form
        setFormData({
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        setSelectedServices([]);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error.response?.data?.message ||
          "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-light mb-6">
              We{" "}
              <span className="text-primary font-normal">Help You To Turn</span>
              <br />
              <span className="text-primary font-normal">
                Ideas Into Reality
              </span>
            </h2>

            <div className="my-12">
              <div className="text-6xl text-muted-foreground mb-4">"</div>
              <p className="text-xl text-foreground font-light leading-relaxed">
                Words don't matter – performance does. We stand ready to deliver
                for your specific needs.
              </p>
              <div className="text-6xl text-muted-foreground text-right">"</div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">DEV'S CORP</p>
              <p className="text-sm text-muted-foreground">BN 774985352</p>
              <p className="text-sm text-muted-foreground">
                Belleville, Ontario, Canada
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-light text-center mb-2">
              Fill in the basics and we'll get in touch
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              as soon as possible
            </p>

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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company*"
                  required
                  className="bg-background border-b border-border rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email*"
                  required
                  className="bg-background border-b border-border rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone*"
                  required
                  className="bg-background border-b border-border rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message*"
                  rows={4}
                  required
                  className="bg-background border-b border-border rounded-none border-t-0 border-x-0 px-0 focus-visible:ring-0 focus-visible:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "GET IN TOUCH →"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
