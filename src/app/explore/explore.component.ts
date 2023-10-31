import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
   exams: string[] = [
    'Civil Services Exam (UPSC) - Graduates from any stream - IAS, IPS, IFS, etc.',
    'SSC CGL (SSC) - Bachelor’s degree from recognized university/institute - Assistant, Superintendent, Inspector, etc.',
    'SBI PO (State Bank of India) - Graduates from any stream - Probationary Officers',
    'IBPS PO (Institute of Banking Personnel Selection) - Graduates from any stream - Probationary Officers',
    'SSC CHSL (SSC) - 12th Standard or equivalent - DEO, LDC, PA/SA, Court Clerk',
    'NDA and NA (UPSC) - 12th Standard or equivalent - National Defense Academy, Naval Academy',
    'SBI Clerk (State Bank of India) - Graduation in any discipline - Clerical Cadre, Junior Associate',
    'IBPS Clerk (Institute of Banking Personnel Selection) - Graduate from any stream - Clerical Cadre',
    'CDS (UPSC) - Bachelor’s degree from recognized university/institute - Combined Defense Service',
    'IBPS RRB (Institute of Banking Personnel Selection) - Graduation degree in any discipline - Officer Scale I, II, III, Office Assistant',
    'RBI Assistant (Reserve Bank of India) - Bachelor’s degree in any discipline - Assistant',
    'SBI SO (State Bank of India) - Bachelor’s degree in any discipline with work experience - Analytics Translators, Sector Credit Specialists, etc.',
    'IBPS SO (Institute of Banking Personnel Selection) - 4-year graduate degree - IT Officer, Law Officer, etc.',
    'RBI Grade B Officer (Reserve Bank of India) - Graduation degree in any discipline - RBI Officer Grade ‘B’ (DR) – General, DEPR, DSIM',
    'SSC GD (SSC) - 12th Standard or equivalent - Constable GD (General Duty)',
    'SSC Stenographer (SSC) - 12th (10+2) Standard or equivalent - Stenographer Grade C and Grade D',
    'CTET (Central Board of Secondary Education) - Graduation or a 2-year diploma in elementary education - Teacher',
    'SSC CPO (SSC) - Bachelor’s Degree or equivalent - Sub Inspector (SI), Assistant Sub Inspector (ASI)',
    'SSC JE (SSC) - Diploma or equivalent in Civil, Electrical, or Mechanical Engineering - Junior Engineer',
    'SSC JHT (SSC) - Degree in Hindi or English - Junior Hindi Translators, Senior Hindi Translator',
    'SSC MTS (SSC) - 10th class (Matriculation) or equivalent - Multi-Tasking Staff (non-technical)',
    'SSC Scientific Assistant (SSC) - Bachelor’s Degree in Science - Scientific Assistant',
    'RRB ALP (Railway Recruitment Control Board) - ITI or diploma in engineering - Assistant Loco Pilot',
    'RRB JE|SSE (Railway Recruitment Control Board) - Four years bachelor’s degree in Engineering - Junior Engineer, Senior Section Engineer',
    'RRB NTPC (Railway Recruitment Control Board) - Graduate degree from Recognized University/Institute - Commercial Apprentice, Traffic Apprentice, etc.',
    'RRC Group D (Railway Recruitment Control Board) - Class 10th or ITI or its equivalent - Helper, Hospital Attendant, Porter',
    'DRDO (Defense Research and Development Organization) - Bachelor’s degree in engineering, technology, electronics, communication, mechanical engineering, or computer science - Junior Research Fellow, Senior Technical Assistant',
    'ISRO (ISRO Centralized Recruitment Board) - B.E/B.Tech. or an equivalent qualifying degree - Scientist, Engineer',
    'ESIC (Employees State Insurance Corporation) - Qualifications vary based on the post - Junior Engineer, Stenographer, UDC',
    'FCI (Food Corporation of India) - Graduate Degree in any discipline - Junior Engineer, Stenographer'
  ];
  
  ngOnInit(): void {
      
  }

}
