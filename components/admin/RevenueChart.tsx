"use client";

import { useRef, useState } from "react";
import { chartMonths, chartBuket, chartKado, chartHighlight } from "@/components/admin/adminData";
import { IconKebab } from "@/components/admin/icons";

const W = 1000;
const H = 340;
const padL = 44;
const padR = 24;
const padT = 24;
const padB = 40;
const yMin = 7;
const yMax = 10;

const plotW = W - padL - padR;
const plotH = H - padT - padB;
const n = chartMonths.length;

const xAt = (i: number) => padL + (plotW * i) / (n - 1);
const yAt = (v: number) => padT + plotH * (1 - (v - yMin) / (yMax - yMin));

const line = (arr: number[]) => arr.map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ");

const yTicks = [10, 9.5, 9, 8.5, 8, 7.5, 7];

export default function RevenueChart() {
  const [hover, setHover] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = svgRef.current!.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    let i = Math.round((x - padL) / (plotW / (n - 1)));
    i = Math.max(0, Math.min(n - 1, i));
    setHover(i);
  };

  const active = hover ?? chartHighlight;

  return (
    <div className="bg-[#fafafa] border border-[#ececf1] rounded-[16px] p-[20px] lg:p-[24px]">
      <div className="flex items-center justify-between mb-[8px]">
        <p className="font-semibold text-[#1d211d] text-[17px]">Revenue &amp; Order Cadence</p>
        <button className="flex items-center justify-center size-[34px] rounded-[8px] border border-[#e1e2ea] text-[#696f96] transition-colors hover:bg-white">
          <IconKebab className="size-[16px]" />
        </button>
      </div>

      <div className="bg-white rounded-[12px] border border-[#f0f0f4] p-[16px]">
        {/* header */}
        <div className="flex items-start justify-between mb-[6px]">
          <p className="leading-none">
            <span className="font-ivy font-semibold text-[#544997] text-[30px]">487</span>
            <span className="text-[#8b8f99] text-[14px] ml-[8px]">Total Order</span>
          </p>
          <div className="flex items-center gap-[16px] text-[13px] text-[#696f96]">
            <span className="flex items-center gap-[6px]">
              <span className="size-[9px] rounded-full bg-[#7c6ad0]" /> Buket
            </span>
            <span className="flex items-center gap-[6px]">
              <span className="size-[9px] rounded-full bg-[#f8b015]" /> kado
            </span>
          </div>
        </div>

        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto select-none"
          onMouseMove={onMove}
          onMouseLeave={() => setHover(null)}
        >
          {/* grid + y labels */}
          {yTicks.map((t) => (
            <g key={t}>
              <line
                x1={padL}
                x2={W - padR}
                y1={yAt(t)}
                y2={yAt(t)}
                stroke="#eceaf1"
                strokeWidth={1}
                strokeDasharray="4 5"
              />
              <text x={padL - 12} y={yAt(t) + 4} textAnchor="end" fontSize="13" fill="#9aa0ab">
                {t}
              </text>
            </g>
          ))}

          {/* x labels */}
          {chartMonths.map((m, i) => (
            <text key={m} x={xAt(i)} y={H - 12} textAnchor="middle" fontSize="13" fill="#7c6ad0">
              {m}
            </text>
          ))}

          {/* kado (dashed yellow) */}
          <polyline
            points={line(chartKado)}
            fill="none"
            stroke="#f8b015"
            strokeWidth={2.5}
            strokeDasharray="2 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* buket (solid purple) */}
          <polyline
            points={line(chartBuket)}
            fill="none"
            stroke="#7c6ad0"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* hover guide */}
          <line
            x1={xAt(active)}
            x2={xAt(active)}
            y1={padT}
            y2={padT + plotH}
            stroke="#c8c2e6"
            strokeWidth={1.5}
            strokeDasharray="3 4"
            className="transition-all duration-150"
          />

          {/* active dots */}
          <circle cx={xAt(active)} cy={yAt(chartKado[active])} r={4.5} fill="#fff" stroke="#f8b015" strokeWidth={2.5} />
          <circle cx={xAt(active)} cy={yAt(chartBuket[active])} r={6} fill="#544997" stroke="#fff" strokeWidth={3} />

          {/* tooltip */}
          <g transform={`translate(${Math.min(Math.max(xAt(active), padL + 60), W - padR - 60)}, ${yAt(chartBuket[active]) - 46})`}>
            <rect x={-56} y={-20} width={112} height={38} rx={8} fill="#141415" />
            <text x={0} y={-4} textAnchor="middle" fontSize="12" fill="#c9c5df">
              {chartMonths[active]}
            </text>
            <text x={0} y={12} textAnchor="middle" fontSize="12" fill="#fff" fontWeight="600">
              Buket {chartBuket[active].toFixed(1)}k · Kado {chartKado[active].toFixed(1)}k
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
