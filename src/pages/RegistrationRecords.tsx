
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { FormValues } from "@/components/registration/schema";
import RegistrationRecordsTable from "@/components/registration/RegistrationRecordsTable";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RegistrationRecords = () => {
  const [records, setRecords] = useState<FormValues[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load records from localStorage
    const storedRecords = localStorage.getItem("registrationRecords");
    if (storedRecords) {
      try {
        const parsedRecords = JSON.parse(storedRecords);
        setRecords(parsedRecords);
      } catch (error) {
        console.error("Error parsing registration records:", error);
      }
    }
  }, []);

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Registration Records</h1>
          <Button 
            variant="outline" 
            onClick={() => navigate("/competitions")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Competitions
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <RegistrationRecordsTable records={records} />
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationRecords;
