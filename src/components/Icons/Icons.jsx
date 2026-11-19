export function SearchIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path
                d="M17 17L21 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                
            />
        </svg>
    );
}

export function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 5H21M3 12H21M3 19H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}


export function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}


export function FilterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 4H21L14 12.5V19L10 21V12.5L3 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function ArrowRightIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M4 12H20M14 6L20 12L14 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

// Estrela de avaliação: "filled" define se ela aparece preenchida ou só com contorno
export function StarIcon({ filled = true }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5L14.9 8.6L21.5 9.4L16.6 14L17.9 20.5L12 17.2L6.1 20.5L7.4 14L2.5 9.4L9.1 8.6L12 2.5Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/*Icones das categorias da home*/
export function TShirtIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M24 8C24 12.4 27.6 16 32 16C36.4 16 40 12.4 40 8L54 14L59 27L50 30V56H14V30L5 27L10 14L24 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function PantsIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M18 6H46L50 58H37L32 22L27 58H14L18 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M18 13H46M32 6V22M24 13C24 18 21 21 17 22M40 13C40 18 43 21 47 22" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}


export function CapIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M10 38C10 24 19 14 32 14C45 14 54 24 54 38H10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 38C10 38 22 44 36 44C46 44 58 41 60 46C60 50 46 52 34 50C20 48 10 44 10 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M32 14V20M24 16C26 22 26 30 24 38M40 16C38 22 38 30 40 38" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}


export function HeadphonesIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M10 38V32C10 19.8 19.8 10 32 10C44.2 10 54 19.8 54 32V38" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="36" width="12" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      <rect x="44" y="36" width="12" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}


export function SneakerIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M6 46L8 34C14 34 20 30 24 22L30 26C34 32 42 34 52 36C57 37 60 40 60 44V48H8L6 46Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6 48H60M28 30L32 26M32 33L36 29M38 35L41 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}




export function GmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 6.5V18.5C2 19.33 2.67 20 3.5 20H6.5V10.75L12 14.75L17.5 10.75V20H20.5C21.33 20 22 19.33 22 18.5V6.5L12 13.75L2 6.5Z" fill="#EA4335" />
      <path d="M2 6.5L6.5 9.8V20H3.5C2.67 20 2 19.33 2 18.5V6.5Z" fill="#4285F4" />
      <path d="M22 6.5L17.5 9.8V20H20.5C21.33 20 22 19.33 22 18.5V6.5Z" fill="#34A853" />
      <path d="M17.5 4.5V9.8L22 6.5V5.75C22 4.2 20.24 3.32 19 4.25L17.5 4.5Z" fill="#FBBC04" />
      <path d="M2 6.5V5.75C2 4.2 3.76 3.32 5 4.25L6.5 5.35V9.8L2 6.5Z" fill="#C5221F" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M13.4 23V14.6H16.2L16.6 11.4H13.4V9.4C13.4 8.5 13.7 7.8 15 7.8H16.7V5C16.4 5 15.4 4.9 14.3 4.9C11.9 4.9 10.3 6.3 10.3 9V11.4H7.5V14.6H10.3V23"
        fill="white"
      />
    </svg>
  );
}
