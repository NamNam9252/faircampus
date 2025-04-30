
export interface ReportFormData {
  type: string;
  title: string;
  description: string;
  date: string;
  location: [number, number] | null;
  anonymous: boolean;
  fileInfo: { name: string, type: string } | null;
}
