// src/types/global.d.ts
export {};

declare global {
  interface NaverLatLngConstructor {
    new (lat: number, lng: number): unknown;
  }
  interface NaverMapConstructor {
    new (
      el: string | HTMLElement,
      opts: { center: unknown; zoom?: number }
    ): unknown;
  }
  interface NaverMarkerConstructor {
    new (opts: { position: unknown; map: unknown; title?: string }): unknown;
  }

  interface NaverMaps {
    LatLng: NaverLatLngConstructor;
    Map: NaverMapConstructor;
    Marker: NaverMarkerConstructor;
  }

  interface Window {
    naver?: {
      maps?: NaverMaps;
    };
  }
}
