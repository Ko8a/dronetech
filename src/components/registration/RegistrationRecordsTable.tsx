
import React from "react";
import { FormValues } from "./schema";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface RegistrationRecordsTableProps {
  records: FormValues[];
}

const RegistrationRecordsTable = ({ records }: RegistrationRecordsTableProps) => {
  if (records.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-muted-foreground">No registration records found</p>
      </div>
    );
  }

  return (
    <Table>
      <TableCaption>Registration Records</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Team Name</TableHead>
          <TableHead>Country</TableHead>
          <TableHead>Competition Type</TableHead>
          <TableHead>Mentor</TableHead>
          <TableHead>Participants</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map((record, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{record.teamName}</TableCell>
            <TableCell>{record.country}</TableCell>
            <TableCell>{record.competitionType}</TableCell>
            <TableCell>{record.mentorFullName}</TableCell>
            <TableCell>{record.participants.length}</TableCell>
            <TableCell className="text-right">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Registration Details: {record.teamName}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium text-sm">Basic Information</h3>
                        <div className="mt-2 space-y-2 text-sm">
                          <p><strong>Team Name:</strong> {record.teamName}</p>
                          <p><strong>Institution:</strong> {record.institution}</p>
                          <p><strong>Country:</strong> {record.country}</p>
                          <p><strong>City:</strong> {record.city}</p>
                          <p><strong>Competition:</strong> {record.competitionType}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">Mentor Information</h3>
                        <div className="mt-2 space-y-2 text-sm">
                          <p><strong>Name:</strong> {record.mentorFullName}</p>
                          <p><strong>Phone:</strong> {record.mentorPhone}</p>
                          <p><strong>Email:</strong> {record.mentorEmail}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-2">Participants</h3>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Telegram</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {record.participants.map((participant, i) => (
                            <TableRow key={i}>
                              <TableCell>{i + 1}</TableCell>
                              <TableCell>{participant.fullName}</TableCell>
                              <TableCell>{participant.phone}</TableCell>
                              <TableCell>{participant.telegram}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RegistrationRecordsTable;
