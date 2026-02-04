"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ProjectHero from "@/public/images/heroproject.svg";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  BookOpen,
  Database,
  Code2,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, scalable websites and web apps with React, Next.js, Node.js, and modern JavaScript/TypeScript. From landing pages to full-stack products.",
    highlights: ["React & Next.js", "Node.js backends", "REST & APIs"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "iOS and Android apps with React Native and related tooling. Automated solutions like attendance with Wi‑Fi positioning and face recognition.",
    highlights: ["React Native", "Cross-platform", "PWA support"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-friendly interfaces and design thinking for web and mobile. Clean, accessible layouts that users love.",
    highlights: ["Design systems", "Prototyping", "Responsive UI"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud setup and automation with Google Cloud, AWS, and modern DevOps practices. Reliable, scalable infrastructure.",
    highlights: ["Google Cloud & AWS", "CI/CD", "Containers"],
  },
  {
    icon: BookOpen,
    title: "Teaching & Training",
    description:
      "Computer Science teaching and training: documents, basics for younger students, core Java and critical thinking for higher classes.",
    highlights: ["Java programming", "Computer basics", "Critical thinking"],
  },
  {
    icon: Database,
    title: "ERP & School Systems",
    description:
      "Admin panels and school management systems. Superadmin, admin, and staff workflows for academic and administrative tasks.",
    highlights: ["School ERP", "Admin panels", "Firebase/Backend"],
  },
];

const process = [
  { step: 1, title: "Discuss", text: "We align on goals, scope, and timeline." },
  { step: 2, title: "Plan", text: "Architecture, stack, and milestones." },
  { step: 3, title: "Build", text: "Iterative development with regular updates." },
  { step: 4, title: "Launch", text: "Deploy, handover, and support as needed." },
];

export default function ServicesPage() {
  return (
    <main className="relative mx-auto flex flex-col items-center lg:max-w-[1280px] w-full min-h-screen">
      {/* Hero with beams */}
      <section className="relative w-full overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden bg-[#3c5c46] dark:bg-gray-900 min-h-[340px] flex flex-col items-center justify-center">
          <Image
            src={ProjectHero}
            alt=""
            fill
            className="object-cover opacity-40 dark:opacity-30"
          />
          <BackgroundBeams className="absolute inset-0 h-full w-full opacity-60" />
          <div className="relative z-10 flex flex-col items-center justify-center p-10 text-center">
            <div className="p-3 rounded-2xl bg-white/10 dark:bg-white/5 mb-4">
              <Code2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-gloock text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Services
            </h1>
            <p className="font-figtree text-lg md:text-xl text-white/90 mt-3 max-w-2xl">
              Web development, mobile apps, cloud, teaching, and custom software — built with clarity and quality.
            </p>
          </div>
        </div>
      </section>

      {/* What I offer */}
      <section
        id="services-offerings"
        className="w-full md:px-16 sm:px-5 py-12"
      >
        <div className="mb-10">
          <h2 className="font-gloock text-heading1 font-bold flex items-center gap-3">
            <Zap className="w-8 h-8 text-[#458a4e]" />
            What I offer
          </h2>
          <p className="font-figtree text-body text-gray-600 dark:text-gray-300 max-w-2xl mt-2">
            From full-stack web and mobile to cloud, teaching, and school systems — here’s how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-md hover:shadow-xl hover:border-[#458a4e]/30 dark:hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-[#458a4e]/10 dark:bg-emerald-500/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[#458a4e] dark:text-emerald-400" />
                </div>
                <h3 className="font-gloock text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {svc.title}
                </h3>
                <p className="font-figtree text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {svc.description}
                </p>
                <ul className="space-y-1">
                  {svc.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 font-figtree text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-[#458a4e] dark:text-emerald-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="font-figtree text-sm text-gray-500 dark:text-gray-400 mt-8">
          Need something specific?{" "}
          <Link
            href="/#contact-section"
            className="text-[#458a4e] dark:text-emerald-400 hover:underline font-medium"
          >
            Get in touch
          </Link>
          .
        </p>
      </section>

      {/* How I work */}
      <section className="w-full md:px-16 sm:px-5 py-12">
        <h2 className="font-gloock text-heading1 font-bold mb-8">
          How I work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#458a4e] dark:bg-emerald-600 text-white font-gloock font-bold text-lg">
                {item.step}
              </span>
              <h3 className="font-gloock text-lg font-bold text-gray-900 dark:text-white mt-4">
                {item.title}
              </h3>
              <p className="font-figtree text-sm text-gray-600 dark:text-gray-300 mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full md:px-16 sm:px-5 py-12 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-[#458a4e] to-[#2d5c38] dark:from-emerald-700 dark:to-emerald-900 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-gloock text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to build something?
            </h2>
            <p className="font-figtree text-white/90 max-w-xl">
              Let’s discuss your project — web, mobile, cloud, or training. I’m available for freelance and full-time opportunities.
            </p>
          </div>
          <Link
            href="/#contact-section"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-[#458a4e] hover:bg-gray-100 font-medium px-6 py-3 font-figtree transition-all shadow-lg whitespace-nowrap"
          >
            Get in touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
