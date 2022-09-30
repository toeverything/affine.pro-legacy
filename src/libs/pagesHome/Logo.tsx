export default function Logo({
  fill,
  stroke,
  width,
  height,
}: {
  fill: string;
  stroke: string;
  width: string;
  height: string;
}) {
  return (
    <svg
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M10.962 2 4 22h4.078l4.428-13.833L16.936 22H21L14.037 2h-3.075Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
