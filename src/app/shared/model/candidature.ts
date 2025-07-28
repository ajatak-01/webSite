export interface Candidature {
    id: number;
    company: string;
    location: string;
    position: string;
    ApplicationDate: Date;
    status: CandidatureStatus;
    feedbackDate: Date | null;
    note: string | null;
    interviewNumber: number;
    interviewDate: Date[];
    website: string;
}

export enum CandidatureStatus {
    Applied = 'Applied',
    InterviewScheduled = 'InterviewScheduled',
    refused = 'Refused'
}