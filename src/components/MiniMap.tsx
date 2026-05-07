interface Props {
  center: [number, number];
  markerLabel?: string;
  className?: string;
}

export function MiniMap({ center, markerLabel, className }: Props) {
  const query = encodeURIComponent(markerLabel ?? `${center[0]},${center[1]}`);
  const src = `https://maps.google.com/maps?q=${query}&output=embed`;

  return (
    <iframe
      src={src}
      className={className ?? "w-full h-[400px]"}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}