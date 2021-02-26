export const Help = ({
  color = "black",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 48 48"
  >
    <path fill="url(#pattern0)" d="M0 0H48V48H0z" opacity="0.5"></path>
    <defs>
      <pattern
        id="pattern0"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use transform="scale(.0084)" xlinkHref="#image0"></use>
      </pattern>
      <image
        id="image0"
        width="119"
        height="119"
        xlinkHref="data:image/png;base64,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"
      ></image>
    </defs>
  </svg>
);
