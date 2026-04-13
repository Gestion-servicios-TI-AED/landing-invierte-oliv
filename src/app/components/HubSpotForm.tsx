import { useEffect, useRef } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: Record<string, unknown>) => void;
      };
    };
  }
}

const SCRIPT_ID = "hs-forms-v2-script";
const PORTAL_ID = "50442232";
const FORM_ID = "7adbe838-b74a-47a7-9b35-ae427337e5a3";

interface HubSpotFormProps {
  targetId: string;
}

export const HubSpotForm = ({ targetId }: HubSpotFormProps) => {
  const created = useRef(false);

  useEffect(() => {
    if (created.current) return;
    created.current = true;

    const createForm = () => {
      window.hbspt?.forms.create({
        region: "na1",
        portalId: PORTAL_ID,
        formId: FORM_ID,
        target: `#${targetId}`,
        onFormSubmitted: () => {
          window.location.href = "/gracias";
        },
      });
    };

    if (window.hbspt) {
      createForm();
      return;
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.defer = true;
      script.onload = createForm;
      document.head.appendChild(script);
    } else {
      // El script ya está cargando, esperar a que esté disponible
      const interval = setInterval(() => {
        if (window.hbspt) {
          clearInterval(interval);
          createForm();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [targetId]);

  return <div id={targetId} className="w-full" />;
};
