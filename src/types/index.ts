export interface Service {
  id: string;
  icon: JSX.Element;
  title: string;
  shortDescription: string;
  longDescription: string;
  videoUrl: string;
  features: string[];
  benefits: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  serviceId?: string;
}
