"use client";

import { useEffect } from "react";
import { registerServiceWorker } from "@/app/lib/service-worker";

/**
 * Service Worker Registration Component
 * 
 * Registers the service worker on client-side for offline support
 * and asset caching. Only runs in browser environment.
 */
export default function ServiceWorkerRegistration() {
  useEffect(() => {
    // Only register in production or when explicitly enabled
    if (process.env.NODE_ENV === "production") {
      registerServiceWorker();
    }
  }, []);

  return null; // This component doesn't render anything
}

