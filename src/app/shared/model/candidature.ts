export interface Candidature {
    id: number;
    company: string;
    location: string;
    position: string;
    ApplicationDate: Date;
    status: string;
    feedbackDate: Date | null;
    note: string | null;
    interviewNumber: number;
    interviewDate: Date[];
    website: string;
}