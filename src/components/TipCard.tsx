
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Define the tip data structure
type Tip = {
  id: number;
  title: string;
  content: string;
  icon: React.ReactNode;
};

// Sample tips data
const tips: Tip[] = [
  {
    id: 1,
    title: "Verify the Caller's Identity",
    content: "If a voice sounds familiar but the request is unusual – verify through another channel before taking action.",
    icon: <Shield className="h-6 w-6 text-cyberBlue" />,
  },
  {
    id: 2,
    title: "Use a Secret Passphrase",
    content: "Establish a secret word or phrase that only you and your close contacts know to verify identity during calls.",
    icon: <Shield className="h-6 w-6 text-cyberBlue" />,
  },
  {
    id: 3,
    title: "Beware of Urgency",
    content: "Scammers create artificial urgency to pressure you. Take your time to verify before making decisions.",
    icon: <Shield className="h-6 w-6 text-cyberBlue" />,
  },
  {
    id: 4,
    title: "Call Back on Known Numbers",
    content: "Hang up and call the person or organization back on a number you know is legitimate, not the one provided in the call.",
    icon: <Shield className="h-6 w-6 text-cyberBlue" />,
  },
  {
    id: 5,
    title: "Limit Public Voice Samples",
    content: "Be cautious about posting videos with your voice on public social media accounts.",
    icon: <Shield className="h-6 w-6 text-cyberBlue" />,
  },
];

const TipCard = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTipIndex((prev) => (prev === tips.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };
  
  const prevTip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTipIndex((prev) => (prev === 0 ? tips.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };
  
  // Auto-rotate tips
  useEffect(() => {
    const timer = setInterval(() => {
      nextTip();
    }, 8000);
    
    return () => clearInterval(timer);
  }, []);
  
  const currentTip = tips[currentTipIndex];
  
  return (
    <section className="max-w-4xl mx-auto mt-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">AI Awareness Tips</h2>
        <p className="text-gray-300">Essential knowledge to protect yourself from voice scams</p>
      </div>
      
      <Card className="cyber-border card-gradient border-none relative overflow-hidden">
        <CardContent className="pt-6 px-6 pb-6">
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                {currentTip.icon}
              </div>
              <h3 className="text-xl font-bold">{currentTip.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-6">{currentTip.content}</p>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {tips.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentTipIndex ? 'w-6 bg-cyberBlue' : 'w-1.5 bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-3">
                <Button
                  onClick={prevTip}
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  onClick={nextTip}
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default TipCard;
