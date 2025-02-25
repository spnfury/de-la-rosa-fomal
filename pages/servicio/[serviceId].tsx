import { useRouter } from 'next/router';
import ServiceDetail from '../../../src/pages/ServiceDetail';

export default function ServiceDetailPage() {
  const { query } = useRouter();
  const { serviceId } = query;

  return <ServiceDetail serviceId={serviceId as string} />;
}
