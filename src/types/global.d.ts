export {};

declare global {
  interface Window {
    naver?: {
      maps?: any; // 급한 불 끄기용. 가능하면 필요한 타입만 좁혀주세요.
    };
  }
}