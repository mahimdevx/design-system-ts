import ThemeToggle from "@components/layouts/theme-toggle";

import { Button } from "@components/elements/button";
import { Icon } from "@components/elements/icon";
import { Text } from "@components/elements/text";
import {
  Tooltip,
  TooltipContent,
  TooltipRoot,
  TooltipTrigger
} from "@components/elements/tooltip";
import { Typography } from "@components/elements/typography";

const TYPOGRAPHY_TYPES = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "small"] as const;

const BUTTON_SIZES = ["xs", "sm", "base", "lg", "xl"] as const;
const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "accent",
  "soft",
  "outline",
  "muted",
  "destructive",
  "link"
] as const;

const ICON_SIZES = ["xs", "sm", "base", "lg", "xl"] as const;

const TOOLTIP_VARIANTS = [
  "primary",
  "secondary",
  "accent",
  "muted",
  "destructive"
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-12">
      <header className="flex w-full items-start justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Typography type="h2">Design System</Typography>
          <Text type="small" className="text-muted-foreground">
            Component variants &amp; types
          </Text>
        </div>

        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-6">
        <Typography type="h4">Typography</Typography>

        <div className="border-border bg-background rounded-lg border p-6">
          <div className="flex flex-col gap-4">
            {TYPOGRAPHY_TYPES.map((type) => (
              <div key={type} className="grid grid-cols-1 gap-3 md:grid-cols-[7rem_1fr]">
                <Text type="small" className="text-muted-foreground">
                  {type}
                </Text>
                <Text type={type}>
                  The quick brown fox jumps over the lazy dog. 0123456789
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6" id="buttons">
        <Typography type="h4">Buttons</Typography>

        <div className="border-border bg-background rounded-lg border p-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Typography type="h6">Variants</Typography>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {BUTTON_VARIANTS.map((variant) => (
                  <Button key={variant} variant={variant} className="justify-between">
                    <span className="truncate">{variant}</span>
                    <Icon name="ArrowRight" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">Sizes</Typography>
              <div className="flex flex-wrap items-center gap-3">
                {BUTTON_SIZES.map((size) => (
                  <Button key={size} size={size} variant="secondary">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">Rounded</Typography>
              <div className="flex flex-wrap items-center gap-3">
                <Button rounded>Rounded</Button>
                <Button variant="outline" rounded>
                  Rounded outline
                </Button>
                <Button variant="accent" rounded>
                  Rounded accent
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">Icon Only</Typography>
              <div className="flex flex-wrap items-center gap-3">
                {BUTTON_SIZES.map((size) => (
                  <Button
                    key={size}
                    size={size}
                    variant="outline"
                    rounded
                    iconOnly
                    aria-label={`Icon only ${size}`}
                  >
                    <Icon name="Star" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">As Child</Typography>
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild variant="link">
                  <a href="#buttons">Anchor (link)</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#buttons">Anchor (outline)</a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">States</Typography>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>
                  Disabled secondary
                </Button>
                <Button variant="destructive" disabled>
                  Disabled destructive
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <Typography type="h4">Icons</Typography>

        <div className="border-border bg-background rounded-lg border p-6">
          <div className="flex flex-col gap-4">
            <Typography type="h6">Sizes</Typography>
            <div className="flex flex-wrap items-center gap-4">
              {ICON_SIZES.map((size) => (
                <div key={size} className="flex items-center gap-3">
                  <Text type="small" className="text-muted-foreground w-10">
                    {size}
                  </Text>
                  <Icon name="Sun" size={size} />
                  <Icon name="Moon" size={size} />
                  <Icon name="Search" size={size} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6" id="tooltips">
        <Typography type="h4">Tooltips</Typography>

        <div className="border-border bg-background rounded-lg border p-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Typography type="h6">Default</Typography>
              <div className="flex flex-wrap items-center gap-3">
                <Tooltip content="This is the default tooltip">
                  <Button variant="secondary">Hover me</Button>
                </Tooltip>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">Variants</Typography>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {TOOLTIP_VARIANTS.map((variant) => (
                  <TooltipRoot key={variant}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="justify-between">
                        {variant}
                        <Icon name="Info" />
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent variant={variant} side="top">
                      {variant} tooltip
                    </TooltipContent>
                  </TooltipRoot>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">Sides</Typography>
              <div className="flex flex-wrap items-center gap-3">
                {(["top", "right", "bottom", "left"] as const).map((side) => (
                  <TooltipRoot key={side}>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">{side}</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="primary" side={side}>
                      {side} side
                    </TooltipContent>
                  </TooltipRoot>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
