import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import { getDemo } from "@/lib/site";

/* Desktop: the three builds overlapping. Phone: one clean frame, so nothing is too small to read. */
export function HeroCollage() {
  const g = getDemo("gigboard");
  const s = getDemo("sidekick");
  const c = getDemo("chaser");
  if (!g) return null;

  return (
    <div className="rise" style={{ animationDelay: "160ms" }}>
      <div className="lg:hidden">
        <BrowserFrame shot={g.shots.home} crop="16 / 10" sizes="100vw" priority />
        <p className="mt-3 text-sm text-muted">Gigboard, one of the three builds below.</p>
      </div>
      <div className="relative hidden aspect-[6/5] lg:block">
        <BrowserFrame shot={g.shots.home} crop="16 / 10" sizes="560px" priority className="absolute right-0 top-0 w-[84%]" />
        {s ? <BrowserFrame shot={s.shots.home} crop="16 / 10" sizes="420px" className="absolute bottom-[8%] left-0 w-[64%]" /> : null}
        {c ? <PhoneFrame shot={c.shots.mobile} crop="9 / 19" sizes="160px" className="absolute bottom-0 right-[6%] w-[22%]" /> : null}
      </div>
    </div>
  );
}
