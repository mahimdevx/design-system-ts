"use client";

import { useState } from "react";

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
import { Typography } from "@components/elements/typography";
import { Section } from "@components/elements/section";
import { Container } from "@components/elements/container";
import { Main } from "@components/elements/main";
import { Box } from "@components/elements/box";
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

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const colors = ["black", "white", "blue", "red"];
  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
  const features = [
    "Premium quality fabric",
    "Machine washable",
    "UV protection technology",
    "Moisture-wicking material",
    "Available in 6 sizes"
  ];

  return (
    <Main>
      <Section>
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <Typography type="h1">Premium Wireless Headphones</Typography>
            <ThemeToggle />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid className="grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <div className="flex flex-col gap-4">
              <Box className="border-border bg-muted relative overflow-hidden rounded-lg border p-6">
                <div className="relative flex h-96 items-center justify-center">
                  <ProductBadge className="absolute top-4 right-4">
                    Limited Stock
                  </ProductBadge>
                  <ProductIcon name="Headphones" size="lg" />
                </div>
              </Box>

              {/* Thumbnail Gallery */}
              <Grid className="grid-cols-4 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Box
                    key={i}
                    className="border-border bg-muted hover:border-primary cursor-pointer rounded-lg border-2 p-3 transition-all"
                  >
                    <div className="flex h-20 items-center justify-center">
                      <Icon name="Image" size="sm" className="text-muted-foreground" />
                    </div>
                  </Box>
                ))}
              </Grid>
            </div>

            {/* Product Details */}
            <Box className="flex flex-col gap-6">
              {/* Rating & Price */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <ProductRating rating={4.5} reviews={238} />
                  <Button variant="outline" iconOnly rounded aria-label="Add to wishlist">
                    <Icon name="Heart" />
                  </Button>
                </div>

                <ProductPrice current={149.99} original={199.99} />

                <Text type="small" className="text-muted-foreground">
                  High-quality wireless headphones with active noise cancellation and
                  30-hour battery life. Perfect for travel, work, and everyday use.
                </Text>
              </div>

              {/* Color Selection */}
              <div className="flex flex-col gap-3">
                <Typography type="h6">Color: {selectedColor}</Typography>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`h-10 w-10 rounded-full border-2 capitalize transition-all ${
                        selectedColor === color
                          ? "border-primary ring-primary ring-2 ring-offset-2"
                          : "border-border"
                      }`}
                      style={{
                        backgroundColor:
                          color === "black"
                            ? "#000"
                            : color === "white"
                              ? "#fff"
                              : color === "blue"
                                ? "#3b82f6"
                                : "#ef4444"
                      }}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="flex flex-col gap-3">
                <Typography type="h6">Size</Typography>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "primary" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className="w-full"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex flex-col gap-3">
                <Typography type="h6">Quantity</Typography>
                <div className="border-border inline-flex items-center rounded-lg border">
                  <Button
                    variant="ghost"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-none px-3 py-2"
                    aria-label="Decrease quantity"
                  >
                    <Icon name="Minus" size="sm" />
                  </Button>
                  <span className="flex w-12 items-center justify-center font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-none px-3 py-2"
                    aria-label="Increase quantity"
                  >
                    <Icon name="Plus" size="sm" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1" icon="ShoppingCart" iconPosition="left">
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  Buy Now
                </Button>
              </div>

              {/* Info */}
              <Box className="border-border bg-muted flex gap-3 rounded-lg border p-4">
                <Icon name="Truck" className="text-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <Text type="small" className="font-medium">
                    Free shipping on orders over $50
                  </Text>
                  <Text type="small" className="text-muted-foreground">
                    30-day money back guarantee
                  </Text>
                </div>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Features & Specifications */}
      <Section>
        <Container>
          <Typography type="h4" className="mb-6">
            Features & Specifications
          </Typography>

          <Grid className="grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Features List */}
            <Box>
              <Typography type="h6" className="mb-4">
                Key Features
              </Typography>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <Icon name="Check" className="mt-0.5 flex-shrink-0 text-green-500" />
                    <Text type="small">{feature}</Text>
                  </li>
                ))}
              </ul>
            </Box>

            {/* Accordion Specs */}
            <Box>
              <Accordion type="single" collapsible defaultValue="specs">
                <AccordionItem value="specs">
                  <AccordionTrigger>Technical Specifications</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Text type="small" className="font-medium">
                          Battery Life:
                        </Text>
                        <Text type="small" className="text-muted-foreground">
                          30 hours
                        </Text>
                      </div>
                      <div className="flex justify-between">
                        <Text type="small" className="font-medium">
                          Charging Time:
                        </Text>
                        <Text type="small" className="text-muted-foreground">
                          2 hours
                        </Text>
                      </div>
                      <div className="flex justify-between">
                        <Text type="small" className="font-medium">
                          Driver Size:
                        </Text>
                        <Text type="small" className="text-muted-foreground">
                          40mm
                        </Text>
                      </div>
                      <div className="flex justify-between">
                        <Text type="small" className="font-medium">
                          Connectivity:
                        </Text>
                        <Text type="small" className="text-muted-foreground">
                          Bluetooth 5.0
                        </Text>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="warranty">
                  <AccordionTrigger>Warranty & Support</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      2-year manufacturer warranty covering defects in materials and
                      workmanship. Free technical support and customer service available
                      24/7.
                    </Text>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      Free standard shipping on all orders. Express shipping available.
                      30-day return policy with free returns. No questions asked.
                    </Text>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Customer Reviews */}
      <Section>
        <Container>
          <Typography type="h4" className="mb-6">
            Customer Reviews
          </Typography>

          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Box key={i} className="border-border rounded-lg border p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <Text type="small" className="font-medium">
                      Customer {i + 1}
                    </Text>
                    <ProductRating rating={5 - i * 0.5} />
                  </div>
                  <Text type="small" className="text-muted-foreground">
                    2 weeks ago
                  </Text>
                </div>
                <Text type="small" className="text-muted-foreground">
                  {
                    [
                      "Absolutely amazing quality! Best headphones I've ever owned. Highly recommend!",
                      "Great sound quality and very comfortable. Battery life is impressive.",
                      "Good value for money. Solid build quality and great features."
                    ][i]
                  }
                </Text>
              </Box>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Products */}
      <Section>
        <Container>
          <Typography type="h4" className="mb-6">
            Related Products
          </Typography>

          <Grid className="grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <GridItem key={i}>
                <ProductCard>
                  <ProductImage className="from-primary/20 to-accent/20 relative flex items-center justify-center bg-gradient-to-br">
                    {i === 0 && <ProductBadge>New</ProductBadge>}
                    <ProductIcon name="Headphones" size="lg" />
                  </ProductImage>
                  <ProductContent>
                    <ProductTitle>Related Product {i + 1}</ProductTitle>
                    <ProductRating rating={4 + (i % 2) * 0.5} reviews={120 + i * 30} />
                    <ProductPrice current={99.99 + i * 20} />
                    <ProductAction icon="Eye" iconPosition="left">
                      View
                    </ProductAction>
                  </ProductContent>
                </ProductCard>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Section>
    </Main>
  );
}
