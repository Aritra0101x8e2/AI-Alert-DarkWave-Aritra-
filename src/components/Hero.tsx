
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 p-2 bg-secondary/30 rounded-full">
          <ShieldAlert className="h-8 w-8 text-cyberBlue" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Protect Yourself from <span className="text-cyberBlue">Voice Clone</span> Scams
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Learn how scammers use AI to clone voices and trick people into financial fraud. Upload a sample to see how easy it can be.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="#voice-uploader">
  <Button
    size="lg"
    className="bg-cyberBlue hover:bg-cyberBlue/80 text-white rounded-md font-medium"
  >
    Try Voice Demo
  </Button>
</a>



        </div>
      </div>
    </section>
  );
};

export default Hero;
