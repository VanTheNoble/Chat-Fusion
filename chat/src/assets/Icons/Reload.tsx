import { SVGProps } from "react";

export function ReloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.713T19 4q.425 0 .713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.713-.288T13 10q0-.425.288-.713T14 9h3.2q-.8-1.4-2.188-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.7 0 3.113-.863t2.187-2.312q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20Z"
      ></path>
    </svg>
  );
}
