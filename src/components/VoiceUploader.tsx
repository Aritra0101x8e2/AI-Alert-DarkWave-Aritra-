import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Mic, Upload, XCircle, Check } from "lucide-react";

const VoiceUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const validateFile = (file: File): boolean => {
    const validTypes = ["audio/mp3", "audio/wav", "audio/mpeg"];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload an MP3 or WAV file",
        variant: "destructive",
      });
      return false;
    }

    const maxSize = 15 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Please upload a file less than 15MB",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          simulateProcessing();
          return 100;
        }
        return newProgress;
      });
    }, 300);
  };

  const simulateProcessing = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Voice processed successfully",
        description: "Scroll down to see the simulated AI voice clone demo",
      });

      const demoSection = document.getElementById("scam-demo");
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);
  };

  const resetUpload = () => {
    setFile(null);
    setIsUploading(false);
    setUploadProgress(0);
    setIsProcessing(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div
      id="voice-uploader" // ✅ this enables scroll targeting
      className="max-w-2xl mx-auto mt-16 p-6 cyber-border card-gradient"
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Upload Your Voice Sample
      </h2>
      <p className="text-gray-300 text-center mb-8">
        Upload a short voice clip to see how AI can clone it.
        <span className="block mt-2 text-sm text-gray-400">
          (For educational purposes only - no actual voice cloning happens)
        </span>
      </p>

      {!file ? (
        <div
          className={`border-2 border-dashed rounded-lg p-10 text-center transition-all ${
            isDragging
              ? "border-cyberBlue bg-cyberBlue/10"
              : "border-gray-600"
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".mp3,.wav"
            className="hidden"
            onChange={handleFileChange}
            ref={inputRef}
          />

          <div className="flex flex-col items-center">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg mb-2">Drag & drop your audio file here</p>
            <p className="text-gray-400 mb-6">MP3 or WAV, max 15 seconds</p>
            <Button
              onClick={() => inputRef.current?.click()}
              variant="outline"
              className="border-cyberBlue/50 text-cyberBlue hover:bg-cyberBlue/10"
            >
              <Mic className="mr-2 h-4 w-4" /> Browse Files
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-800/50 p-4 rounded">
            <div className="flex items-center">
              <div className="bg-cyberBlue/20 p-2 rounded">
                <Mic className="h-5 w-5 text-cyberBlue" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetUpload}
              className="text-gray-400 hover:text-white"
            >
              <XCircle className="h-5 w-5" />
            </Button>
          </div>

          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2 bg-gray-700" />
            </div>
          )}

          {isProcessing && (
            <div className="bg-gray-800/50 p-4 rounded">
              <div className="flex items-center">
                <div className="animate-spin mr-2">
                  <div className="h-4 w-4 rounded-full border-2 border-t-cyberBlue border-r-cyberBlue border-b-transparent border-l-transparent"></div>
                </div>
                <p className="text-sm">Processing voice patterns...</p>
              </div>
            </div>
          )}

          {!isUploading && !isProcessing && (
            <div className="flex justify-end space-x-3">
              <Button
                variant="ghost"
                onClick={resetUpload}
                className="text-gray-300"
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpload}
                className="bg-cyberBlue hover:bg-cyberBlue/80"
              >
                Process Voice
              </Button>
            </div>
          )}

          {uploadProgress === 100 && !isUploading && !isProcessing && (
            <div className="bg-green-900/20 p-3 rounded flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-green-500">
                Processing complete! Scroll down to see the demo.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceUploader;
