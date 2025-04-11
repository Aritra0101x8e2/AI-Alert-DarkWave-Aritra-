
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  PlayCircle, 
  PauseCircle, 
  Volume2, 
  User, 
  AlertTriangle 
} from "lucide-react";

const ScamDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const timer = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= 30) {
            clearInterval(timer);
            setIsPlaying(false);
            return 30;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  return (
    <section id="scam-demo" className="max-w-4xl mx-auto mt-24 pt-8 scroll-mt-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Simulated Scam Call</h2>
        <p className="text-gray-300">
          This is what a scam call using a cloned voice might sound like. 
          <span className="block mt-2 danger-text font-bold">
            ⚠️ SIMULATED AI VOICE – FOR AWARENESS ONLY ⚠️
          </span>
        </p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-8">
        {/* Call Simulator */}
        <div className="md:col-span-2 cyber-border card-gradient p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Unknown Caller</p>
                  <p className="text-xs text-gray-400">Mobile · +91 (62X) X34-XX85</p>
                </div>
              </div>
              <div className="h-3 w-3 rounded-full bg-danger animate-pulse"></div>
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 relative">
                <Phone className="h-12 w-12 text-cyberBlue" />
                {}
                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-x-1 flex items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="w-1 bg-cyberBlue/70 rounded-full animate-pulse"
                          style={{
                            height: `${10 + Math.random() * 20}px`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-gray-300">{formatTime(currentTime)} / 0:30</p>
              <div className="w-full bg-gray-700 h-1 rounded-full mt-2">
                <div 
                  className="bg-cyberBlue h-full rounded-full" 
                  style={{ width: `${(currentTime / 30) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button
                onClick={togglePlay}
                variant="outline"
                size="lg"
                className="rounded-full w-12 h-12 p-0 border-cyberBlue/50 hover:bg-cyberBlue/10"
              >
                {isPlaying ? (
                  <PauseCircle className="h-6 w-6 text-cyberBlue" />
                ) : (
                  <PlayCircle className="h-6 w-6 text-cyberBlue" />
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-12 h-12 p-0 border-cyberBlue/50 hover:bg-cyberBlue/10"
              >
                <Volume2 className="h-6 w-6 text-cyberBlue" />
              </Button>
            </div>
            
            <div className="mt-6 p-3 bg-danger/20 rounded-md border border-danger/30 flex items-start">
              <AlertTriangle className="h-5 w-5 text-danger mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-300">
                This is a simulated demonstration only. No actual voice cloning has occurred.
              </p>
            </div>
          </div>
        </div>
        
        {/* Transcript */}
        <div className="md:col-span-3 cyber-border card-gradient p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <span className="text-cyberBlue mr-2">Transcript</span> 
            <span className="text-xs text-gray-400">(Simulated Scam Call)</span>
          </h3>
          
          <div className="space-y-5">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-danger/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-danger">S</span>
              </div>
              <div className="ml-3 bg-gray-800/60 p-3 rounded-lg rounded-tl-none">
                <p className="text-sm text-gray-200">
                  Hi Grandma, it's me. I need your help with something urgent.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="mr-3 bg-cyberBlue/20 p-3 rounded-lg rounded-tr-none">
                <p className="text-sm text-gray-200">
                  Oh, is that you sweetheart? You sound a bit different.
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-cyberBlue/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-cyberBlue">G</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-danger/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-danger">S</span>
              </div>
              <div className="ml-3 bg-gray-800/60 p-3 rounded-lg rounded-tl-none">
                <p className="text-sm text-gray-200">
                  Yeah, I'm using a different phone. Listen, I'm in some trouble. I got into a car accident and I need $2,000 for repairs right away.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="mr-3 bg-cyberBlue/20 p-3 rounded-lg rounded-tr-none">
                <p className="text-sm text-gray-200">
                  Oh my goodness! Are you hurt? Should I call your parents?
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-cyberBlue/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-cyberBlue">G</span>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-danger/20 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-medium text-danger">S</span>
              </div>
              <div className="ml-3 bg-gray-800/60 p-3 rounded-lg rounded-tl-none">
                <p className="text-sm text-gray-200">
                  No, please don't! They'll be really mad. Can you just wire me the money? I'll pay you back next week, I promise.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 border border-dashed border-cyberBlue/40 rounded bg-cyberBlue/10">
            <h4 className="font-medium text-cyberBlue mb-2">Red Flags to Notice:</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="h-5 w-5 text-danger mr-2 flex-shrink-0">•</span>
                <span>Request for money via wire transfer (difficult to recover)</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-danger mr-2 flex-shrink-0">•</span>
                <span>Creating urgency to pressure quick decisions</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-danger mr-2 flex-shrink-0">•</span>
                <span>Asking to keep the situation secret from other family members</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-danger mr-2 flex-shrink-0">•</span>
                <span>Explanation for why they sound different</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScamDemo;
