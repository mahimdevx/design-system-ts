import clsx from "clsx";

import { Typography } from "@components/elements/typography";
// import { Icon } from "@components/elements/icon";
import { Button } from "@components/elements/button";

import { Tooltip } from "@components/elements/tooltip";

// import ThemeToggle from "@components/layouts/theme-toggle";
import { Text } from "@components/elements/text";

export default function Home() {
  return (
    <main className="flex w-full max-w-3xl flex-col items-center justify-between px-16 py-32 2xl:items-start">
      <div className="outline-foreground/50 flex flex-wrap items-center gap-4 rounded-lg p-6 shadow-md outline">
        <div className={clsx("bg-background", "h-12 w-12", "rounded-md")}></div>

        <Text type="h1" className={clsx("text-foreground font-poppins!")}>
          HEading 1
        </Text>

        <div className={clsx("bg-foreground", "h-12 w-12", "rounded-md")}></div>
        <div className={clsx("bg-primary", "h-12 w-12", "rounded-md")}></div>
        <div className={clsx("bg-secondary", "h-12 w-12", "rounded-md")}></div>
        <div className={clsx("bg-accent animate-bounce", "h-12 w-12", "rounded-md")}></div>
        {/* <ThemeToggle /> */}
        <div className={clsx("bg-muted", "h-12 w-12", "rounded-md")}></div>
        <div className={clsx("bg-destructive", "h-12 w-12", "rounded-md")}></div>
      </div>

      <div className={clsx("mt-16 flex flex-wrap gap-4")}>
        <Button variant="destructive" size="xs">
          Primary Extra Small
          {/* <Icon name="Search" size="sm" /> */}
        </Button>

        <Button variant="destructive" size="sm">
          Primary Large
        </Button>

        <Button variant="destructive">Primary Large</Button>

        <Button variant="destructive" size="lg">
          Primary Large
        </Button>

        <Button variant="destructive" size="xl">
          Primary Large
        </Button>

        <h5>
          lrem ipsum dolor sit amet
          <Tooltip content="This is a simple tooltip">
            <span className="rounded-md">consectetur</span>
          </Tooltip>
          adipisicing elit. Voluptas
        </h5>
      </div>
    </main>
  );
}
