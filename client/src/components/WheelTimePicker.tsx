import { useEffect, useRef } from "react";

interface WheelProps {
  values: (string | number)[];
  selected: string | number;
  onChange: (v: string | number) => void;
  testId?: string;
}

const ITEM_HEIGHT = 40;

function Wheel({ values, selected, onChange, testId }: WheelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const idx = values.findIndex((v) => String(v) === String(selected));
    if (idx >= 0 && containerRef.current) {
      isProgrammaticScroll.current = true;
      containerRef.current.scrollTop = idx * ITEM_HEIGHT;
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 50);
    }
  }, [selected, values]);

  const handleScroll = () => {
    if (isProgrammaticScroll.current) return;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      if (!containerRef.current) return;
      const idx = Math.round(containerRef.current.scrollTop / ITEM_HEIGHT);
      const clamped = Math.max(0, Math.min(values.length - 1, idx));
      const target = clamped * ITEM_HEIGHT;
      if (containerRef.current.scrollTop !== target) {
        isProgrammaticScroll.current = true;
        containerRef.current.scrollTo({ top: target, behavior: "smooth" });
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 200);
      }
      if (String(values[clamped]) !== String(selected)) {
        onChange(values[clamped]);
      }
    }, 120);
  };

  return (
    <div className="relative h-[120px] w-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-1 top-10 h-10 border-y-2 border-secondary/40 z-10 rounded" />
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
        data-testid={testId}
      >
        <div style={{ height: ITEM_HEIGHT }} />
        {values.map((v) => (
          <div
            key={String(v)}
            className={`flex items-center justify-center snap-center font-mono text-lg transition-all ${
              String(v) === String(selected) ? "text-foreground font-bold scale-110" : "text-muted-foreground"
            }`}
            style={{ height: ITEM_HEIGHT }}
            onClick={() => onChange(v)}
          >
            {typeof v === "number" ? String(v).padStart(2, "0") : v}
          </div>
        ))}
        <div style={{ height: ITEM_HEIGHT }} />
      </div>
    </div>
  );
}

interface WheelTimePickerProps {
  value: string;
  onChange: (val: string) => void;
  testIdPrefix?: string;
}

export default function WheelTimePicker({ value, onChange, testIdPrefix = "time" }: WheelTimePickerProps) {
  const [hh, mm] = (value || "09:00").split(":");
  const hour24 = parseInt(hh, 10);
  const minute = parseInt(mm, 10);
  const period: "AM" | "PM" = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  const roundedMinute = [0, 15, 30, 45].reduce((p, c) => (Math.abs(c - minute) < Math.abs(p - minute) ? c : p), 0);

  const update = (h12: number, m: number, p: "AM" | "PM") => {
    let h24 = h12 % 12;
    if (p === "PM") h24 += 12;
    const newVal = `${String(h24).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    onChange(newVal);
  };

  return (
    <div className="flex items-center justify-center gap-2 bg-background/50 border border-border rounded-xl p-3" data-testid={`wheel-${testIdPrefix}`}>
      <Wheel
        values={Array.from({ length: 12 }, (_, i) => i + 1)}
        selected={hour12}
        onChange={(v) => update(Number(v), roundedMinute, period)}
        testId={`wheel-${testIdPrefix}-hour`}
      />
      <span className="text-2xl font-bold text-foreground">:</span>
      <Wheel
        values={[0, 15, 30, 45]}
        selected={roundedMinute}
        onChange={(v) => update(hour12, Number(v), period)}
        testId={`wheel-${testIdPrefix}-minute`}
      />
      <Wheel
        values={["AM", "PM"]}
        selected={period}
        onChange={(v) => update(hour12, roundedMinute, v as "AM" | "PM")}
        testId={`wheel-${testIdPrefix}-period`}
      />
    </div>
  );
}
