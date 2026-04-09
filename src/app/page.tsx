import ThemeToggle from "@components/layouts/theme-toggle";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/layouts/accordion";
import { Button } from "@components/elements/button";
import { Icon } from "@components/elements/icon";
import { Text } from "@components/elements/text";
import {
  Tooltip,
  TooltipContent,
  TooltipRoot,
  TooltipTrigger
} from "@components/layouts/tooltip";
import { Typography } from "@components/elements/typography";
import { Section } from "@components/elements/section";
import { Grid, GridItem } from "@components/layouts/grid";
import {
  ProductCard,
  ProductImage,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductRating,
  ProductAction,
  ProductBadge
} from "@components/elements/product-card";

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

      <Section className="flex flex-col gap-6">
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
      </Section>

      <Section className="flex flex-col gap-6" id="buttons">
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
      </Section>

      <Section className="flex flex-col gap-6">
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
      </Section>

      <Section className="flex flex-col gap-6" id="tooltips">
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
      </Section>

      <Section className="flex flex-col gap-6" id="accordion">
        <Typography type="h4">Accordion</Typography>

        <div className="border-border bg-background rounded-lg border p-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <Typography type="h6">Single</Typography>
              <Accordion type="single" collapsible defaultValue="single-1">
                <AccordionItem value="single-1">
                  <AccordionTrigger>What is this?</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      A simple single accordion (collapsible) using Radix under the hood.
                    </Text>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="single-2">
                  <AccordionTrigger>Keyboard support?</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      Radix handles accessibility and keyboard navigation by default.
                    </Text>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="single-3" disabled>
                  <AccordionTrigger>Disabled item</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      You should not be able to open this item.
                    </Text>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">Multiple</Typography>
              <Accordion type="multiple" defaultValue={["multi-1"]}>
                <AccordionItem value="multi-1">
                  <AccordionTrigger>Multiple open</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      In multiple mode, more than one item can be open at once.
                    </Text>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="multi-2">
                  <AccordionTrigger>Works with other components</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm" variant="secondary">
                        Action
                      </Button>
                      <Button size="sm" variant="outline" iconOnly aria-label="Star">
                        <Icon name="Star" />
                      </Button>
                      <Tooltip content="Tooltip inside accordion">
                        <Button size="sm" variant="link">
                          Hover
                        </Button>
                      </Tooltip>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="multi-3">
                  <AccordionTrigger>Animation</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      Uses `animate-accordion-up` / `animate-accordion-down` based on
                      state.
                    </Text>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </Section>

      <Section className="flex flex-col gap-6" id="grid">
        <Typography type="h4">Grid with Product Cards</Typography>

        <div className="border-border bg-background rounded-lg border p-6">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Typography type="h6">3 Columns Product Grid</Typography>
              <Grid className="grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <GridItem key={i}>
                    <ProductCard>
                      <ProductImage className="from-primary/20 to-accent/20 relative flex items-center justify-center bg-gradient-to-br">
                        {i === 1 && <ProductBadge>-20%</ProductBadge>}
                        <Icon
                          name="Package"
                          className="text-muted-foreground"
                          size="lg"
                        />
                      </ProductImage>
                      <ProductContent>
                        <ProductTitle>Product {i + 1}</ProductTitle>
                        <ProductRating rating={4 + (i % 2)} reviews={120 + i * 20} />
                        <ProductPrice
                          current={29.99 + i * 10}
                          original={i === 1 ? 39.99 + i * 10 : undefined}
                        />
                        <ProductAction>Add to Cart</ProductAction>
                      </ProductContent>
                    </ProductCard>
                  </GridItem>
                ))}
              </Grid>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">2 Columns Large Cards</Typography>
              <Grid className="grid-cols-1 gap-4 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <GridItem key={i}>
                    <ProductCard>
                      <ProductImage className="from-primary/20 to-accent/20 relative flex h-64 items-center justify-center bg-gradient-to-br">
                        {i === 0 && <ProductBadge>New</ProductBadge>}
                        <Icon
                          name="ShoppingBag"
                          className="text-muted-foreground"
                          size="lg"
                        />
                      </ProductImage>
                      <ProductContent>
                        <ProductTitle>Premium Product {i + 1}</ProductTitle>
                        <ProductRating rating={5} reviews={250 + i * 50} />
                        <ProductPrice current={99.99 + i * 50} />
                        <ProductAction>View Details</ProductAction>
                      </ProductContent>
                    </ProductCard>
                  </GridItem>
                ))}
              </Grid>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">4 Columns Compact Grid</Typography>
              <Grid className="grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <GridItem key={i}>
                    <ProductCard>
                      <ProductImage className="from-primary/20 to-accent/20 relative flex h-32 items-center justify-center bg-gradient-to-br">
                        <Icon name="Package" size="base" />
                      </ProductImage>
                      <ProductContent className="gap-2 p-3">
                        <ProductTitle className="text-xs">Item {i + 1}</ProductTitle>
                        <ProductPrice current={19.99 + i * 5} />
                      </ProductContent>
                    </ProductCard>
                  </GridItem>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
