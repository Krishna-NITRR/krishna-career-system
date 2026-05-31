declare module 'expo-router';
declare module 'expo-haptics';
declare module '*.css';
declare module '*.ttf';
declare module '*.png';
declare module '*.jpg';

declare var require: any;

declare namespace process {
  export var env: {
    EXPO_PUBLIC_SUPABASE_URL: string;
    EXPO_PUBLIC_SUPABASE_ANON_KEY: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    [key: string]: string | undefined;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}