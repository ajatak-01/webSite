import { Component } from '@angular/core';
import { Candidature, CandidatureStatus } from '../shared/model/candidature';
import { ClarityModule } from "@clr/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrl: './candidatures.component.scss',
  imports: [ClarityModule, BrowserAnimationsModule],
})
export class CandidaturesComponent {

  candidatures: Candidature[] = [
    {
      id: 1,
      company: 'Tech Solutions',
      location: 'New York',
      position: 'Software Engineer',
      ApplicationDate: new Date('2023-01-15'),
      status: CandidatureStatus.Applied,
      feedbackDate: null,
      note: null,
      interviewNumber: 0,
      interviewDate: [],
      website: 'https://techsolutions.com'
    },
    {
      id: 2,
      company: 'Innovatech',
      location: 'San Francisco',
      position: 'Data Scientist',
      ApplicationDate: new Date('2023-02-20'),
      status: CandidatureStatus.InterviewScheduled,
      feedbackDate: null,
      note: null,
      interviewNumber: 1,
      interviewDate: [new Date('2023-03-01')],
      website: 'https://innovatech.com'
    },
    {
      id: 3,
      company: 'Web Dynamics',
      location: 'Remote',
      position: 'Frontend Developer',
      ApplicationDate: new Date('2023-03-10'),
      status: CandidatureStatus.refused,
      feedbackDate: new Date('2023-03-15'),
      note: 'Great interview, looking forward to the next steps.',
      interviewNumber: 2,
      interviewDate: [new Date('2023-03-12'), new Date('2023-03-14')],
      website: 'https://webdynamics.com'
    }
  ]
}
