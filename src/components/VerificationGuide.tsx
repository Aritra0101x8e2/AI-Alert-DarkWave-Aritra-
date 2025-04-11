
import { Shield, PhoneCall, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VerificationGuide = () => {
  return (
    <section className="max-w-6xl mx-auto mt-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Call Verification Guide</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Follow these steps to verify if a call from a family member, bank, or company is legitimate.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="cyber-border card-gradient border-none">
          <CardHeader>
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mb-3">
              <Shield className="h-6 w-6 text-cyberBlue" />
            </div>
            <CardTitle>Use Code Words</CardTitle>
            <CardDescription className="text-gray-400">
              Create a secure verification system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Establish secret code words or phrases with family members</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Ask for the code word if someone calls with an urgent request</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Change the code periodically for better security</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Never share these codes with anyone outside your trusted circle</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="cyber-border card-gradient border-none">
          <CardHeader>
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mb-3">
              <PhoneCall className="h-6 w-6 text-cyberBlue" />
            </div>
            <CardTitle>Call Back on Official Numbers</CardTitle>
            <CardDescription className="text-gray-400">
              Verify through known channels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Hang up and call the person back on their known number</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>For banks/companies, call the official number on their website or your card</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Never call back numbers provided in suspicious messages</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Verify through multiple channels if large sums are involved</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="cyber-border card-gradient border-none">
          <CardHeader>
            <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center mb-3">
              <MessageSquare className="h-6 w-6 text-cyberBlue" />
            </div>
            <CardTitle>Avoid Urgent Money Transfers</CardTitle>
            <CardDescription className="text-gray-400">
              Take time for verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Be skeptical of any urgent request for money, especially wire transfers</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Ask questions only the real person would know the answers to</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Insist on time to think - scammers rely on rushed decisions</span>
              </li>
              <li className="flex items-start">
                <span className="h-5 w-5 text-cyberBlue mr-2 flex-shrink-0">•</span>
                <span>Consult another trusted person before sending any money</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VerificationGuide;
