import type { SVGProps } from "react";

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 1.999a9.96 9.96 0 00-6.312 2.388 1.025 1.025 0 00-.332 1.025l.983 4.126c.2.833.958 1.391 1.817 1.391h2.844c.53 0 1.02-.255 1.332-.676l.833-1.127c.43-.585.235-1.42-.392-1.817A3.924 3.924 0 0112 6.002a3.984 3.984 0 013.974 3.974c0 .983-.372 1.878-.983 2.588-.611.71-1.52.895-2.26.43l-1.127-.833a1.51 1.51 0 00-1.817 0l-1.127.833a1.51 1.51 0 00-.676 1.332v2.844c0 .86.558 1.617 1.391 1.817l4.126.983c.332.08.676 0 1.025-.166A9.96 9.96 0 0021.998 12a9.96 9.96 0 00-2.388-6.312A9.96 9.96 0 0012 1.999z" />
      <path d="M12 22.001a9.96 9.96 0 01-6.312-2.388 1.025 1.025 0 01-.332-1.025l.983-4.126c.2-.833.958-1.391 1.817-1.391h2.844c.53 0 1.02.255 1.332.676l.833 1.127c.43.585.235 1.42-.392 1.817A3.924 3.924 0 0012 18a3.984 3.984 0 00-3.974-3.974c0-.983.372-1.878.983-2.588.611-.71 1.52-.895 2.26-.43l1.127.833a1.51 1.51 0 011.817 0l1.127-.833a1.51 1.51 0 01.676-1.332v-2.844c0-.86-.558-1.617-1.391-1.817l-4.126-.983a1.025 1.025 0 01-1.025-.166A9.96 9.96 0 012.002 12a9.96 9.96 0 012.388 6.312A9.96 9.96 0 0112 22.001z" />
    </svg>
  );
}

export function DjangoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
      <path d="M4 3h14.73L14.53 12l4.2 9H4.27l4.2-9-4.2-9zM15 4l2.5 5.5-2.5 5.5h-2L15.5 10l-2.5-6h2z" />
    </svg>
  );
}

export function FlaskIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M14.5 10.5c-2.5-3-2.5-9-1-10C12 1 12 4 12 5c-1 0-1.5 2-1.5 3.5C10.5 10 12 10 12 10s-1 1-1 2.5c0 2 1.5 2.5 1.5 2.5S11 15 11 16.5c0 2 2 2.5 2 2.5s-2 1-2 3c0 2.5 3 2.5 3 2.5-1-1.5-1-3.5 0-5 1.5-2.5 1-4.5-1-6.5-1.5-1.5-2.5-1-2.5-1z" />
            <path d="M9.5 10.5c2.5-3 2.5-9 1-10C12 1 12 4 12 5c1 0 1.5 2 1.5 3.5C13.5 10 12 10 12 10s1 1 1 2.5c0 2-1.5 2.5-1.5 2.5S13 15 13 16.5c0 2-2 2.5-2 2.5s2 1 2 3c0 2.5-3 2.5-3 2.5 1-1.5 1-3.5 0-5-1.5-2.5-1-4.5 1-6.5 1.5-1.5 2.5-1 2.5-1z" />
        </svg>
    );
}

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="currentColor"
        {...props}
      >
        <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    );
}
