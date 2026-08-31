const skills = [
  "TypeScript",
  "NestJS",
  "Spring Boot",
  "Golang",
  "PostgreSQL",
  "React",
  "Kafka",
  "RabbitMQ",
  "Prisma",
  "Docker",
  "AWS",
  "Redis",
  "gRPC",
  "Microservices",
];

export default function Marquee() {
  return (
    <section className="border-y border-border bg-card py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-6">
        <p className="text-[12px] uppercase tracking-[0.15em] text-muted">
          Tools I work with day to day
        </p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-display italic text-foreground/80 whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-display italic text-foreground/80 whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
