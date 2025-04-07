
import React from 'react';
import { AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Instagram } from 'lucide-react';
import TelegramIcon from '../icons/TelegramIcon';

interface RegistrationSuccessProps {
  onClose: () => void;
}

const RegistrationSuccess = ({ onClose }: RegistrationSuccessProps) => {
  return (
    <>
      <AlertDialogHeader>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h2>
          <p className="text-muted-foreground">Thank you for registering for the competition!</p>
        </div>
      </AlertDialogHeader>

      <div className="my-6 text-center">
        <h3 className="font-medium mb-4">For detailed information, follow our social networks:</h3>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <Button variant="outline" className="w-full sm:w-auto gap-2" asChild>
            <a href="https://www.instagram.com/dronetech.kz" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </Button>
          
          <Button variant="outline" className="w-full sm:w-auto gap-2" asChild>
            <a href="https://t.me/dronetechkz" target="_blank" rel="noopener noreferrer">
              <TelegramIcon className="w-5 h-5" />
              Telegram
            </a>
          </Button>
        </div>
      </div>
      
      <AlertDialogFooter>
        <Button onClick={onClose} className="w-full">Close</Button>
      </AlertDialogFooter>
    </>
  );
};

export default RegistrationSuccess;
