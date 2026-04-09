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
  ProductIcon,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductRating,
  ProductAction,
  ProductBadge
} from "@components/layouts/product-card";

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

// Adidas Products Data
const ADIDAS_PRODUCTS = [
  {
    name: "Adidas Ultraboost 22",
    price: 179.99,
    original: 229.99,
    rating: 4.8,
    reviews: 1203,
    badge: "-20%",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
  },
  {
    name: "Adidas NMD R1",
    price: 129.99,
    original: 159.99,
    rating: 4.6,
    reviews: 891,
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop"
  },
  {
    name: "Adidas Superstar",
    price: 99.99,
    original: 129.99,
    rating: 4.7,
    reviews: 1521,
    badge: "Classic",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop"
  },
  {
    name: "Adidas Stan Smith",
    price: 94.99,
    original: null,
    rating: 4.5,
    reviews: 756,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
  },
  {
    name: "Adidas ZX 500",
    price: 89.99,
    original: 119.99,
    rating: 4.4,
    reviews: 634,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"
  },
  {
    name: "Adidas Gazelle",
    price: 109.99,
    original: null,
    rating: 4.9,
    reviews: 2143,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&h=500&fit=crop"
  }
];

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
              <Typography type="h6">3 Columns Product Grid - Adidas</Typography>
              <Grid className="grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ADIDAS_PRODUCTS.map((product, i) => (
                  <GridItem key={i}>
                    <ProductCard>
                      <ProductImage src={product.image} alt={product.name}>
                        {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
                      </ProductImage>
                      <ProductContent>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductRating
                          rating={product.rating}
                          reviews={product.reviews}
                        />
                        <ProductPrice
                          current={product.price}
                          original={product.original}
                        />
                        <ProductAction icon="ShoppingCart">Add to Cart</ProductAction>
                      </ProductContent>
                    </ProductCard>
                  </GridItem>
                ))}
              </Grid>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">2 Columns Large Cards - Premium Adidas</Typography>
              <Grid className="grid-cols-1 gap-4 sm:grid-cols-2">
                {ADIDAS_PRODUCTS.slice(0, 4).map((product, i) => (
                  <GridItem key={i}>
                    <ProductCard>
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="relative flex h-64 items-center justify-center"
                      >
                        {i === 0 && <ProductBadge>Deal</ProductBadge>}
                      </ProductImage>
                      <ProductContent>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductRating
                          rating={product.rating}
                          reviews={product.reviews}
                        />
                        <ProductPrice
                          current={product.price}
                          original={product.original}
                        />
                        <ProductAction icon="ArrowRight" iconPosition="right">
                          View Details
                        </ProductAction>
                      </ProductContent>
                    </ProductCard>
                  </GridItem>
                ))}
              </Grid>
            </div>

            <div className="flex flex-col gap-4">
              <Typography type="h6">
                4 Columns Compact Grid - Adidas Collection
              </Typography>
              <Grid className="grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {ADIDAS_PRODUCTS.map((product, i) => (
                  <GridItem key={i}>
                    <ProductCard>
                      <ProductImage
                        src={product.image}
                        alt={product.name}
                        className="relative flex h-32 items-center justify-center"
                      />
                      <ProductContent className="gap-2 p-3">
                        <ProductTitle className="text-xs">{product.name}</ProductTitle>
                        <ProductPrice current={product.price} />
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
