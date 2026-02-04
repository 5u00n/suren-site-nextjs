"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Code2,
  GraduationCap,
  Building2,
  Calendar,
} from "lucide-react";

const timelineData = [
  {
    id: "awr",
    date: "2024",
    title: "AWR Project",
    description:
      "Worked on the AWR (Automated Workflow & Reporting) project — building workflows, reporting pipelines, and automation tooling.",
    status: "completed",
    icon: Building2,
    tag: "Past work",
  },
  {
    id: "ems",
    date: "2025 – Present",
    title: "EMS",
    description:
      "Building an EMS (Enterprise Management System) — streamlining operations, resource management, and internal tools.",
    status: "in-progress",
    icon: Code2,
    tag: "Current",
  },
  {
    id: "edusofthub",
    date: "2025 – Present",
    title: "EduSoftHub",
    description:
      "Working on EduSoftHub — an education and software hub to share learning resources, tools, and project insights.",
    status: "in-progress",
    icon: GraduationCap,
    tag: "Current",
  },
];

function TimelineItem({ item, isLast }) {
  const Icon = item.icon;

  return (
    <div className="relative flex gap-5 pl-1 sm:gap-6 sm:pl-0">
      {/* Vertical line (between dots) */}
      {!isLast && (
        <div
          className="absolute left-5 top-11 bottom-0 w-px bg-gradient-to-b from-[#09add6b2] via-[#3c5c46]/50 to-transparent dark:from-[#09add6] dark:via-[#3c5c46]/60 sm:left-6"
          aria-hidden
        />
      )}

      {/* Dot + icon */}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#3c5c46] bg-white dark:bg-neutral-900 dark:border-[#09add6b2] shadow-md sm:h-12 sm:w-12">
        <Icon className="h-4 w-4 text-[#3c5c46] dark:text-[#09add6b2] sm:h-5 sm:w-5" />
      </div>

      {/* Card */}
      <div className="min-w-0 flex-1 pb-12 sm:pb-14">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/80 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              <Calendar className="h-3 w-3" />
              {item.date}
            </span>
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                item.status === "completed"
                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
              )}
            >
              {item.status === "completed" ? (
                <CheckCircle2 className="mr-1 h-3 w-3" />
              ) : null}
              {item.tag}
            </span>
          </div>
          <h3 className="font-gloock text-lg font-semibold text-neutral-900 dark:text-white sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 font-figtree text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="w-full" aria-label="Journey timeline">
      <div className="mx-auto max-w-3xl">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
