import Image from "next/image";

type AvatarProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export default function Avatar({ size = 28, className = "", priority = false }: AvatarProps) {
  return (
    <span
      className={`relative inline-block rounded-full overflow-hidden bg-foreground text-background flex items-center justify-center font-semibold tracking-tight ${className}`}
      style={{ width: size, height: size, fontSize: Math.max(10, size * 0.4) }}
    >
      <Image
        src="/profile.jpg"
        alt="Naing Aung Zaw"
        fill
        sizes={`${size}px`}
        className="object-cover"
        priority={priority}
      />
    </span>
  );
}
