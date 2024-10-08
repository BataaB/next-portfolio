export default function GithubLogo({ theme }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 21V17C13.1392 15.7473 12.78 14.4901 12 13.5C15 13.5 18 11.5 18 8C18.08 6.75 17.73 5.52 17 4.5C17.28 3.35 17.28 2.15 17 1C17 1 16 1 14 2.5C11.36 2 8.64004 2 6.00004 2.5C4.00004 1 3.00004 1 3.00004 1C2.70004 2.15 2.70004 3.35 3.00004 4.5C2.27191 5.51588 1.91851 6.75279 2.00004 8C2.00004 11.5 5.00004 13.5 8.00004 13.5C7.61004 13.99 7.32004 14.55 7.15004 15.15C6.98004 15.75 6.93004 16.38 7.00004 17V21"
        stroke={theme == "light" ? "#4B5563" : "#D1D5DB"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
