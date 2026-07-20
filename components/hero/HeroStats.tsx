"use client";

import CountUp from "react-countup";
import { Users, Briefcase, Award, Smile } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Students Trained",
  },
  {
    icon: Briefcase,
    value: 2000,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    icon: Smile,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="text-center"
        >
          <item.icon className="mx-auto mb-3 h-6 w-6 text-blue-600" />

          <h3 className="text-2xl font-bold text-slate-900">
            <CountUp
              end={item.value}
              duration={2}
            />
            {item.suffix}
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}