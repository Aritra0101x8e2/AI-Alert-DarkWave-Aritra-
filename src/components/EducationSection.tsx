
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Laptop, FileText, BrainCircuit, Info } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education-section" className="max-w-6xl mx-auto mt-24 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Understanding Voice Clone Scams</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn how AI voice cloning works and how to protect yourself from these sophisticated scams.
        </p>
      </div>
      
      <Tabs defaultValue="how-it-works" className="cyber-border card-gradient p-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-secondary/50 rounded-md">
          <TabsTrigger 
            value="how-it-works" 
            className="data-[state=active]:bg-cyberBlue data-[state=active]:text-white"
          >
            <BrainCircuit className="mr-2 h-4 w-4" />
            How It Works
          </TabsTrigger>
          <TabsTrigger 
            value="case-studies" 
            className="data-[state=active]:bg-cyberBlue data-[state=active]:text-white"
          >
            <FileText className="mr-2 h-4 w-4" />
            Real Cases
          </TabsTrigger>
          <TabsTrigger 
            value="technology" 
            className="data-[state=active]:bg-cyberBlue data-[state=active]:text-white"
          >
            <Laptop className="mr-2 h-4 w-4" />
            Technology
          </TabsTrigger>
          <TabsTrigger 
            value="prevention" 
            className="data-[state=active]:bg-cyberBlue data-[state=active]:text-white"
          >
            <AlertTriangle className="mr-2 h-4 w-4" />
            Prevention
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="how-it-works" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">How Voice Cloning Works</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-300 mb-4">
                  Voice cloning technology uses artificial intelligence to analyze and reproduce a person's voice patterns, tone, and speech characteristics. Modern AI systems can create convincing replicas from just a few seconds of recorded audio.
                </p>
                
                <h4 className="font-medium text-cyberBlue mb-2">The Process:</h4>
                <ol className="space-y-2 text-gray-300 list-decimal pl-5">
                  <li>Audio Collection - Scammers obtain voice samples from social media, phone calls, or voicemails</li>
                  <li>Pattern Analysis - AI breaks down voice characteristics like pitch, tone, and speech patterns</li>
                  <li>Model Training - The system creates a unique voice model based on these patterns</li>
                  <li>Speech Generation - AI can now generate new sentences in that voice</li>
                </ol>
              </div>
              
              <div className="bg-secondary/30 p-5 rounded-lg border border-gray-700">
                <h4 className="font-medium text-cyberBlue mb-3 flex items-center">
                  <Info className="h-4 w-4 mr-2" /> Key Facts About Voice Cloning
                </h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">•</span>
                    <span>Modern AI requires as little as 3 seconds of audio to clone a voice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">•</span>
                    <span>Voice cloning services are becoming widely accessible online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">•</span>
                    <span>Cloned voices can express different emotions and speak in various tones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">•</span>
                    <span>Even family members can have difficulty distinguishing cloned voices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">•</span>
                    <span>The technology is improving rapidly, making detection increasingly difficult</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="case-studies" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Real-World Cases</h3>
            
            <div className="space-y-6">
              <div className="bg-secondary/30 p-5 rounded-lg border border-gray-700">
                <h4 className="font-medium text-white">$243,000 CEO Voice Scam</h4>
                <p className="text-sm text-gray-400 mb-3">March 2023</p>
                <p className="text-gray-300">
                  A finance executive received what sounded like an urgent call from their CEO requesting an immediate wire transfer to secure a confidential business acquisition. The voice perfectly matched the CEO's, including speech patterns and accent. The company lost $243,000 before discovering it was a scam.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-5 rounded-lg border border-gray-700">
                <h4 className="font-medium text-white">Grandparent Emergency Scam</h4>
                <p className="text-sm text-gray-400 mb-3">November 2022</p>
                <p className="text-gray-300">
                  An elderly couple received a distressing call from what sounded exactly like their grandson claiming he was in jail and needed $15,000 for bail. The voice was cloned from videos on the grandson's social media accounts. The couple wired the money before checking with other family members.
                </p>
              </div>
              
              <div className="bg-secondary/30 p-5 rounded-lg border border-gray-700">
                <h4 className="font-medium text-white">Banking Authentication Bypass</h4>
                <p className="text-sm text-gray-400 mb-3">June 2023</p>
                <p className="text-gray-300">
                  A victim's bank used voice recognition as part of their security. Scammers used a cloned voice to pass the voice authentication system, gaining access to accounts and authorizing transfers totaling $18,500 before the fraud was detected.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="technology" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">The Technology Behind Voice Cloning</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-cyberBlue mb-2">Neural Networks</h4>
                <p className="text-gray-300 mb-4">
                  Modern voice cloning uses deep learning neural networks that can analyze spectrograms (visual representations of audio frequencies) to identify the unique characteristics that make a voice recognizable. After learning these patterns, the system can generate new speech that wasn't in the original recordings.
                </p>
                
                <h4 className="font-medium text-cyberBlue mb-2">Text-to-Speech (TTS)</h4>
                <p className="text-gray-300">
                  Once a voice is cloned, scammers can use text-to-speech technology to generate any content they want in that voice. Advanced systems can even incorporate emotional inflections, making the voice sound excited, worried, or urgent depending on the scam scenario.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-cyberBlue mb-2">Voice Conversion</h4>
                <p className="text-gray-300 mb-4">
                  This technology allows real-time voice conversion, where a scammer can speak and have their voice converted to sound like the target in real-time during a call. This enables interactive conversations, making the scam much more convincing than pre-recorded messages.
                </p>
                
                <h4 className="font-medium text-cyberBlue mb-2">Detection Challenges</h4>
                <p className="text-gray-300">
                  While some detection methods exist, they often lag behind the development of cloning technology. Most people cannot distinguish a well-made voice clone from the real person, especially in stressful situations like emergency calls.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="prevention" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Prevention Strategies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-cyberBlue">For Individuals</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">1.</span>
                    <span>Establish verification questions or code words with family members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">2.</span>
                    <span>Always verify urgent requests through alternative communication channels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">3.</span>
                    <span>Be cautious about sharing voice samples on social media or voicemail greetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">4.</span>
                    <span>Set up voice passwords with banks and financial institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">5.</span>
                    <span>Take time to verify - legitimate emergencies will still be urgent after verification</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-cyberBlue">For Organizations</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">1.</span>
                    <span>Implement multi-factor authentication beyond voice verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">2.</span>
                    <span>Establish clear payment authorization protocols that require multiple approvals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">3.</span>
                    <span>Train employees to recognize voice cloning scams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">4.</span>
                    <span>Create verification procedures for urgent financial requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyberBlue mr-2">5.</span>
                    <span>Implement voice clone detection technology where available</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-danger/10 border border-danger/20 rounded-lg">
              <h4 className="font-medium flex items-center text-danger mb-2">
                <AlertTriangle className="h-4 w-4 mr-2" /> Remember
              </h4>
              <p className="text-gray-300">
                No legitimate bank, government agency, or company will ever demand immediate payment or personal information over the phone without giving you time to verify their identity.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default EducationSection;
