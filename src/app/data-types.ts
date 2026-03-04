type SampleType = 'preassure' | 'temperature';

export interface Sample {
  name: SampleType;
  value: number;
  date: number;
}
