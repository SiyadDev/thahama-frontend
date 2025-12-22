"use client";

import React, { createContext, useContext, useMemo, useSyncExternalStore, ReactNode } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

interface DeviceState {
  isMobile: boolean; // < 768px
  isTablet: boolean; // 768px - 1024px
  isDesktop: boolean; // > 1024px
  isTouch: boolean;
  orientation: "portrait" | "landscape";
}

const initialState: DeviceState = {
  isMobile: false,
  isTablet: false,
  isDesktop: true, // Default to desktop for SSR to render maximum content
  isTouch: false,
  orientation: "landscape",
};

const DeviceContext = createContext<DeviceState>(initialState);

const emptySubscribe = () => () => { };

export const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const isMobileQuery = useMediaQuery("(max-width: 767px)");
  const isTabletQuery = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  const isDesktopQuery = useMediaQuery("(min-width: 1025px)");
  const isPortraitQuery = useMediaQuery("(orientation: portrait)");
  
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const deviceState = useMemo(() => {
    if (!mounted) return initialState;

    const isTouch = 
      typeof window !== "undefined" && 
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    return {
      isMobile: isMobileQuery,
      isTablet: isTabletQuery,
      isDesktop: isDesktopQuery,
      isTouch,
      orientation: (isPortraitQuery ? "portrait" : "landscape") as "portrait" | "landscape",
    };
  }, [isMobileQuery, isTabletQuery, isDesktopQuery, isPortraitQuery, mounted]);

  return (
    <DeviceContext.Provider value={deviceState}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDeviceContext = () => useContext(DeviceContext);
