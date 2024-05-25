'use client'; // This directive is essential to mark this component as client-side only

import { createContext, useContext, useEffect } from 'react';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense(process.env.NEXT_PUBLIC_SF_LICENSE_KEY ?? "");

const SFLicenseContext = createContext<null | undefined>(undefined);

export const SFLicenseProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const licenseKey = process.env.NEXT_PUBLIC_SF_LICENSE_KEY;
    if (licenseKey) {
      registerLicense(licenseKey);
    } else {
      console.error('Syncfusion license key not found in environment variables.');
    }
  }, []); // Empty dependency array ensures this runs once on the client

  return <SFLicenseContext.Provider value={null}>{children}</SFLicenseContext.Provider>;
};

export const useLicense = () => {
  const context = useContext(SFLicenseContext);
  if (context === undefined) {
    throw new Error('useLicense must be used within a LicenseProvider');
  }
  return context;
};
