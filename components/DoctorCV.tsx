import type { ReactNode } from "react";
import {
  Stethoscope,
  GraduationCap,
  Trophy,
  Users,
  BookOpen,
  Briefcase,
  FileText,
  CalendarDays,
  Building2,
} from "lucide-react";
import {
  academicQualifications,
  awards,
  conferences,
  currentDesignations,
  medicalEducation,
  memberships,
  organisationalExperience,
  publications,
  teachingRoles,
  workExperience,
} from "@/lib/doctor-cv";

function SectionHeading({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Icon className="text-accent flex-shrink-0" size={28} />
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        {children}
      </h2>
    </div>
  );
}

function RoleList({
  items,
}: {
  items: { title: string; detail: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={`${item.title}-${item.detail}`}
          className="rounded-2xl border border-border bg-card p-5 shadow-sm border-l-4 border-l-primary"
        >
          <p className="font-semibold text-foreground leading-snug">
            {item.title}
          </p>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="text-accent font-bold mt-0.5">•</span>
          <span className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CvTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
      <table className="w-full min-w-[520px] border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-muted">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left font-semibold text-foreground border-b border-border"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="bg-card even:bg-muted/40 hover:bg-muted/60 transition-colors"
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className={`px-4 py-3 align-top border-b border-border last:border-b-0 ${
                    cellIdx === 0
                      ? "whitespace-nowrap font-medium text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DoctorCV() {
  return (
    <>
      {/* Current Designations */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={Stethoscope}>
            Current Designations & Roles
          </SectionHeading>
          <RoleList items={currentDesignations} />
        </div>
      </section>

      {/* Teaching & Faculty Roles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={GraduationCap}>
            Teaching & Faculty Appointments
          </SectionHeading>
          <RoleList items={teachingRoles} />
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={Trophy}>Awards & Fellowships</SectionHeading>
          <BulletList items={awards} />
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={Users}>
            Professional Memberships
          </SectionHeading>
          <BulletList items={memberships} />
        </div>
      </section>

      {/* Medical Education */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={BookOpen}>
            Medical Education & Training
          </SectionHeading>
          <CvTable
            headers={["Year", "Certification / Course", "Awarding Body"]}
            rows={medicalEducation.map((item) => [
              item.year,
              item.course,
              item.body,
            ])}
          />
        </div>
      </section>

      {/* Academic Qualifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={GraduationCap}>
            Academic Qualifications
          </SectionHeading>
          <CvTable
            headers={["Year", "Degree", "University / Institution"]}
            rows={academicQualifications.map((item) => [
              item.year,
              item.degree,
              item.institution,
            ])}
          />
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={Briefcase}>Work Experience</SectionHeading>
          <BulletList items={workExperience} />
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={FileText}>
            Publications & Presentations
          </SectionHeading>
          <BulletList items={publications} />
        </div>
      </section>

      {/* Conferences */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={CalendarDays}>
            Conferences, Summits & Events
          </SectionHeading>
          <CvTable
            headers={["Event", "Year", "Role"]}
            rows={conferences.map((item) => [
              item.event,
              item.year,
              item.role,
            ])}
          />
        </div>
      </section>

      {/* Organisational Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading icon={Building2}>
            Organisational & Academic Experience
          </SectionHeading>
          <BulletList items={organisationalExperience} />
        </div>
      </section>
    </>
  );
}