'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ServiceModal from './ServiceModal';
import { SERVICES, type Service } from './servicesData';

export default function ServiceOverlayHandler() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const serviceId = useMemo(() => searchParams.get('service'), [searchParams]);

  useEffect(() => {
    if (!serviceId) {
      setActiveService(null);
      return;
    }

    const matchedService = SERVICES.find((service) => service.id === serviceId) ?? null;
    setActiveService(matchedService);
  }, [serviceId]);

  useEffect(() => {
    if (activeService) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => document.body.classList.remove('modal-open');
  }, [activeService]);

  const closeOverlay = () => {
    setActiveService(null);

    const params = new URLSearchParams(searchParams.toString());
    params.delete('service');

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return <ServiceModal service={activeService} onClose={closeOverlay} />;
}
