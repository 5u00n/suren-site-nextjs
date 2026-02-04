"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  Linkedin,
  Mail,
  Github,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Code2,
  Sparkles,
  Activity,
  FolderGit2,
  Users,
} from "lucide-react";

const experiences = [
  {
    role: "Computer Science Teacher",
    company: "Eden International School",
    period: "Nov 2024 – Present",
    location: "Talegaon, Maharashtra",
    description:
      "Teaching documents & computer basics (Class 7), core Java programming and critical thinking (Class 8–12).",
  },
  {
    role: "Cloud Engineer",
    company: "Cloudnautic",
    period: "Jan 2023 – Jul 2023",
    location: "Pune, Maharashtra",
    description: "IT Services & Consulting. Cloud and engineering solutions.",
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "MIT World Peace University",
    period: "2021 – 2023",
    detail: "Computer Science · GPA 3.7 / 91%",
  },
  {
    degree: "Bachelor's in Computer Application (BCA)",
    school: "Spicer Adventist University",
    period: "2017 – 2020",
    detail: "Activities: Pathfinder, AV",
  },
  {
    degree: "Higher Secondary, Computer Science",
    school: "DAV Public School Baharagora",
    period: "2014 – 2016",
    detail: "Science Fair Winner 2015 — C++ robot control program",
  },
];

const certifications = [
  { name: "Automate Approval Process — SharePoint & Power Automate", org: "Coursera" },
  { name: "Java (Basic) Certificate", org: "HackerRank" },
  { name: "React — The Complete Guide (Router & Redux)", org: "Udemy" },
  { name: "App Design — UX, UI and Design Thinking", org: "Udemy" },
];

function contributionLevel(count) {
  const n = Number(count) || 0;
  if (n === 0) return "bg-gray-100 dark:bg-gray-700/50";
  if (n <= 2) return "bg-[#458a4e]/40 dark:bg-emerald-500/40";
  if (n <= 5) return "bg-[#458a4e]/70 dark:bg-emerald-500/70";
  return "bg-[#458a4e] dark:bg-emerald-500";
}

export default function AboutPage() {
  const [githubStats, setGithubStats] = useState(null);
  const [githubError, setGithubError] = useState(false);

  useEffect(() => {
    fetch("/api/github/stats")
      .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
      .then(({ ok, data }) => {
        if (ok && data && data.user) setGithubStats(data);
        else setGithubError(true);
      })
      .catch(() => setGithubError(true));
  }, []);

  const user = githubStats?.user;
  const contributions = githubStats?.contributions ?? null;
  const weeks = Array.isArray(contributions?.weeks) ? contributions.weeks : [];

  return (
    <main className="relative mx-auto flex flex-col items-center lg:max-w-[1280px] w-full min-h-screen">
      {/* Hero — Profile card with beams */}
      <section className="relative w-full md:px-16 sm:px-5 pt-6 pb-12 overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden bg-[#F1BABA] dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 min-h-[420px] flex flex-col md:flex-row">
          <BackgroundBeams className="absolute inset-0 h-full w-full opacity-80" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 w-full">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-white/80 shadow-2xl ring-2 ring-[#458a4e]/30">
                <Image
                  src="/images/suren.jpg"
                  alt="Suren Hembram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 208px"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col text-center md:text-left">
              <h1 className="font-gloock text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Suren Hembram
              </h1>
              <p className="font-figtree text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-1 flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-[#458a4e]" />
                Full-stack Developer · Web & App Developer · CS Teacher
              </p>
              <p className="font-figtree text-sm text-gray-600 dark:text-gray-300 flex items-center justify-center md:justify-start gap-1 mt-1">
                <MapPin className="w-4 h-4" />
                Talegaon, Maharashtra, India
              </p>
              <p className="font-figtree text-base text-gray-700 dark:text-gray-200 mt-4 max-w-xl">
                Always looking for new effective solutions. 6+ years in web/mobile development, 3+ years IT Admin. I focus on quality, clear processes, and long-term results.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/surenhembram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-medium px-5 py-3 font-figtree transition-all shadow-lg hover:shadow-xl"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
                <Link
                  href="/#contact-section"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#458a4e] hover:bg-[#185c20] text-white font-medium px-5 py-3 font-figtree transition-all shadow-lg hover:shadow-xl dark:bg-emerald-600 dark:hover:bg-emerald-700"
                >
                  <Mail className="w-5 h-5" />
                  Get in touch
                </Link>
                <a
                  href="https://github.com/5u00n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-[#458a4e] dark:hover:border-emerald-500 text-gray-700 dark:text-gray-200 font-medium px-5 py-3 font-figtree transition-all"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="w-full md:px-16 sm:px-5 py-12">
        <h2 className="font-gloock text-heading1 font-bold mb-8 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-[#458a4e]" />
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-gloock text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="font-figtree text-[#458a4e] dark:text-emerald-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="font-figtree text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="font-figtree text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </p>
              <p className="font-figtree text-gray-600 dark:text-gray-300 mt-3">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="w-full md:px-16 sm:px-5 py-12">
        <h2 className="font-gloock text-heading1 font-bold mb-8 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-[#458a4e]" />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="font-gloock text-lg font-bold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="font-figtree text-[#458a4e] dark:text-emerald-400 font-medium mt-1">
                {edu.school}
              </p>
              <p className="font-figtree text-sm text-gray-500 dark:text-gray-400 mt-1">
                {edu.period}
              </p>
              <p className="font-figtree text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full md:px-16 sm:px-5 py-12">
        <h2 className="font-gloock text-heading1 font-bold mb-8 flex items-center gap-3">
          <Award className="w-8 h-8 text-[#458a4e]" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-md hover:shadow-lg transition-shadow flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-[#458a4e]/10 dark:bg-emerald-500/10">
                <Award className="w-5 h-5 text-[#458a4e] dark:text-emerald-400" />
              </div>
              <div>
                <p className="font-figtree font-medium text-gray-900 dark:text-white text-sm">
                  {cert.name}
                </p>
                <p className="font-figtree text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {cert.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub activity */}
      <section className="w-full md:px-16 sm:px-5 py-12">
        <h2 className="font-gloock text-heading1 font-bold mb-8 flex items-center gap-3">
          <Activity className="w-8 h-8 text-[#458a4e]" />
          GitHub activity
        </h2>
        {githubError && (
          <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/10 p-6 font-figtree text-amber-800 dark:text-amber-200 text-sm">
            Unable to load GitHub stats.{" "}
            <a
              href="https://github.com/5u00n"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View profile on GitHub
            </a>
          </div>
        )}
        {!githubError && user && (
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-md">
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-[#458a4e] dark:text-emerald-400" />
                <span className="font-figtree font-medium text-gray-900 dark:text-white">
                  {user?.public_repos ?? 0} public repos
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#458a4e] dark:text-emerald-400" />
                <span className="font-figtree font-medium text-gray-900 dark:text-white">
                  {user?.followers ?? 0} followers · {user?.following ?? 0} following
                </span>
              </div>
              <a
                href="https://github.com/5u00n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#458a4e] dark:text-emerald-400 hover:underline"
              >
                <Github className="w-4 h-4" />
                @{user?.login ?? "5u00n"}
              </a>
            </div>
            {contributions && typeof contributions.totalLastYear === "number" && (
              <div>
                <p className="font-figtree text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Last 12 months: <strong className="text-gray-900 dark:text-white">{contributions.totalLastYear.toLocaleString()}</strong> contributions
                </p>
                <div className="flex gap-0.5 overflow-x-auto pb-2" style={{ minHeight: "120px" }}>
                  {weeks.slice(-53).map((week, wi) => {
                    const slots = Array(7).fill(null);
                    (week.contributionDays ?? []).forEach((d) => {
                      if (d && typeof d.weekday === "number" && d.weekday >= 0 && d.weekday < 7) {
                        slots[d.weekday] = d;
                      }
                    });
                    return (
                      <div key={wi} className="flex flex-col gap-0.5 flex-shrink-0">
                        {slots.map((day, di) => (
                          <div
                            key={day?.date ?? `${wi}-${di}`}
                            className={`w-2.5 h-2.5 rounded-sm ${day ? contributionLevel(day.contributionCount) : "bg-transparent"}`}
                            title={day ? `${day.date}: ${Number(day.contributionCount) || 0} contributions` : undefined}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
                <p className="font-figtree text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Less · More
                </p>
              </div>
            )}
          </div>
        )}
        {!githubError && !user && (
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-md font-figtree text-gray-500 dark:text-gray-400">
            Loading GitHub activity…
          </div>
        )}
      </section>

      {/* Skills highlight & CTA */}
      <section className="w-full md:px-16 sm:px-5 py-12 pb-16">
        <div className="rounded-2xl bg-gradient-to-br from-[#458a4e] to-[#2d5c38] dark:from-emerald-700 dark:to-emerald-900 p-8 md:p-12 text-center">
          <Code2 className="w-12 h-12 text-white/90 mx-auto mb-4" />
          <h2 className="font-gloock text-2xl md:text-3xl font-bold text-white mb-2">
            Tech I work with
          </h2>
          <p className="font-figtree text-white/90 max-w-xl mx-auto mb-6">
            React · Next.js · Node.js · Python · .NET · Java · Google Cloud · AWS · Mobile apps · UI/UX
          </p>
          <a
            href="https://www.linkedin.com/in/surenhembram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-[#458a4e] hover:bg-gray-100 font-medium px-6 py-3 font-figtree transition-all shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
            View full profile on LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
