import Image from "next/image";
import type { Shot } from "@/lib/site";
import { cx } from "@/lib/cx";

type FrameProps = {
  shot: Shot;
  sizes: string;
  priority?: boolean;
  /** CSS aspect ratio such as "16 / 10" to crop from the top; omit to show the whole screenshot */
  crop?: string;
  className?: string;
};

function Picture({ shot, sizes, priority, crop }: Omit<FrameProps, "className">) {
  if (crop) {
    return (
      <div className="relative" style={{ aspectRatio: crop }}>
        <Image src={shot.src} alt={shot.alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />
      </div>
    );
  }
  return <Image src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} sizes={sizes} priority={priority} className="block h-auto w-full" />;
}

/* A plain browser window around a desktop screenshot. */
export function BrowserFrame({ className, ...p }: FrameProps) {
  return (
    <div className={cx("overflow-hidden rounded-xl bg-white shadow-frame ring-1 ring-black/10", className)}>
      <div aria-hidden="true" className="flex h-6 items-center gap-1.5 border-b border-line bg-[#F2F1ED] px-3 sm:h-7">
        <span className="h-2 w-2 rounded-full bg-[#D3D0C8]" />
        <span className="h-2 w-2 rounded-full bg-[#D3D0C8]" />
        <span className="h-2 w-2 rounded-full bg-[#D3D0C8]" />
      </div>
      <Picture {...p} />
    </div>
  );
}

/* A phone outline around a mobile screenshot. */
export function PhoneFrame({ className, ...p }: FrameProps) {
  return (
    <div className={cx("overflow-hidden rounded-[1.4rem] bg-ink p-[5px] shadow-frame", className)}>
      <div className="overflow-hidden rounded-[1.1rem] bg-white">
        <Picture {...p} />
      </div>
    </div>
  );
}
