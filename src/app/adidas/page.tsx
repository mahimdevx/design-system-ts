"use client";

import { useState } from "react";

import Navbar from "@components/layouts/navbar";
import Footer from "@components/layouts/footer";
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
  ProductBadge,
  ProductPrice,
  ProductRating,
  ProductAction
} from "@components/layouts/product-card";

export default function AdidasPage() {
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("10");
  const [quantity, setQuantity] = useState(1);

  const colors = ["white", "black", "red", "blue"];
  const sizes = ["5", "6", "7", "8", "9", "10", "11", "12", "13"];
  const features = [
    "Lightweight Boost cushioning technology",
    "Responsive and energetic feel",
    "Durable mesh upper with synthetic overlays",
    "Signature three stripes design",
    "Perfect for running and casual wear"
  ];

  const relatedProducts = [
    {
      name: "Adidas Ultraboost 21",
      price: 179.99,
      original: 219.99,
      rating: 4.8,
      reviews: 512
    },
    {
      name: "Adidas NMD R1",
      price: 129.99,
      original: 159.99,
      rating: 4.6,
      reviews: 389
    },
    {
      name: "Adidas Superstar",
      price: 99.99,
      original: 129.99,
      rating: 4.7,
      reviews: 621
    },
    {
      name: "Adidas ZX 500",
      price: 89.99,
      original: 119.99,
      rating: 4.5,
      reviews: 276
    }
  ];

  return (
    <Main>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Section className="from-primary/10 to-background bg-gradient-to-b">
        <Container>
          <Box className="py-8">
            <Box className="mb-6 flex flex-col gap-2">
              <Typography type="h1">Adidas Ultraboost 22</Typography>
              <Text type="small" className="text-muted-foreground max-w-md">
                Experience ultimate comfort and performance with the latest Adidas
                technology
              </Text>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* Product Details Section */}
      <Section>
        <Container>
          <Grid className="grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <Box className="flex flex-col gap-4">
              <Box className="border-border bg-muted relative overflow-hidden rounded-lg border p-6">
                <div className="relative flex h-96 items-center justify-center">
                  <ProductBadge className="absolute top-4 right-4">
                    New Arrival
                  </ProductBadge>
                  <ProductIcon name="Shoe" size="lg" />
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
            </Box>

            {/* Product Details */}
            <Box className="flex flex-col gap-6">
              {/* Rating & Price */}
              <Box className="flex flex-col gap-4">
                <Box className="flex items-center justify-between">
                  <ProductRating rating={4.8} reviews={1203} />
                  <Button variant="outline" iconOnly rounded aria-label="Add to wishlist">
                    <Icon name="Heart" />
                  </Button>
                </Box>

                <ProductPrice current={179.99} original={229.99} />

                <Text type="small" className="text-muted-foreground">
                  Premium running shoes with advanced Boost cushioning technology. Perfect
                  for athletes and casual wearers. Lightweight, responsive, and incredibly
                  comfortable for all-day wear.
                </Text>
              </Box>

              {/* Color Selection */}
              <Box className="flex flex-col gap-3">
                <Typography type="h6">Color: {selectedColor}</Typography>
                <Box className="flex gap-3">
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
                                ? "#1e40af"
                                : "#dc2626"
                      }}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </Box>
              </Box>

              {/* Size Selection */}
              <Box className="flex flex-col gap-3">
                <Typography type="h6">Size (US)</Typography>
                <Box className="grid grid-cols-4 gap-2">
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
                </Box>
              </Box>

              {/* Quantity Selector */}
              <Box className="flex flex-col gap-3">
                <Typography type="h6">Quantity</Typography>
                <Box className="border-border inline-flex items-center rounded-lg border">
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
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box className="flex gap-3">
                <Button className="flex-1" icon="ShoppingCart" iconPosition="left">
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  Buy Now
                </Button>
              </Box>

              {/* Info Box */}
              <Box className="border-border bg-muted flex gap-3 rounded-lg border p-4">
                <Icon name="Truck" className="text-primary mt-1 flex-shrink-0" />
                <Box className="flex flex-col gap-1">
                  <Text type="small" className="font-medium">
                    Free shipping on orders over $100
                  </Text>
                  <Text type="small" className="text-muted-foreground">
                    60-day return policy & authentic guarantee
                  </Text>
                </Box>
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
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" />
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
                    <Box className="space-y-2">
                      <Box className="flex justify-between">
                        <Text type="small" className="font-medium">
                          Weight:
                        </Text>
                        <Text type="small" className="text-muted-foreground">
                          310g (size 10)
                        </Text>
                      </Box>
                      <Box className="flex justify-between">
                        <Text type="small" className="font-medium">
                          Material:
                        </Text>
                        <Text type="small" className="text-muted-foreground">
                          Primeknit + Synthetic
                        </Text>
                      </Box>
                      <Box className="flex justify-between">
                        <Text type="small" className="font-medium">
                          Cushioning:
                        </Text>
                        <Text type="small" className="text-muted-foreground">
                          Boost Technology
                        </Text>
                      </Box>
                      <Box className="flex justify-between">
                        <Text type="small" className="font-medium">
                          Origin:
                        </Text>
                        <Text type="small" className="text-muted-foreground">
                          Made in Vietnam
                        </Text>
                      </Box>
                    </Box>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="warranty">
                  <AccordionTrigger>Warranty & Authenticity</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      100% authentic Adidas products. 1-year manufacturer warranty
                      covering defects. Free shoe cleaning kit with every purchase. All
                      products verified by Adidas quality control.
                    </Text>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="care">
                  <AccordionTrigger>Care & Maintenance</AccordionTrigger>
                  <AccordionContent>
                    <Text type="small" className="text-muted-foreground">
                      Hand wash only with cold water. Use soft brush for cleaning. Air dry
                      away from direct heat or sunlight. Do not use washing machine or
                      dryer. Apply waterproof spray after first cleaning for extended
                      protection.
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

          <Box className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Box key={i} className="border-border rounded-lg border p-4">
                <Box className="mb-3 flex items-start justify-between">
                  <Box>
                    <Typography type="h6" className="mb-1">
                      {["Sarah M.", "John D.", "Emma L."][i]}
                    </Typography>
                    <ProductRating
                      rating={[4.8, 4.5, 5][i]}
                      reviews={
                        ["Verified Purchase", "Verified Purchase", "Verified Purchase"][i]
                      }
                    />
                  </Box>
                  <Text type="small" className="text-muted-foreground">
                    {["2 weeks ago", "1 month ago", "2 months ago"][i]}
                  </Text>
                </Box>
                <Text type="small" className="text-muted-foreground">
                  {
                    [
                      "Amazing shoes! The cushioning is incredible and they feel light on my feet. Perfect for running marathons.",
                      "Great quality and true to size. A bit pricey but worth every penny for long-term durability.",
                      "Best purchase I've made all year! Comfortable for all-day wear and looks great too."
                    ][i]
                  }
                </Text>
              </Box>
            ))}
          </Box>
        </Container>
      </Section>

      {/* Related Products */}
      <Section>
        <Container>
          <Typography type="h4" className="mb-6">
            Related Products
          </Typography>

          <Grid className="grid-cols-4">
            {relatedProducts.map((product, i) => (
              <ProductCard key={i}>
                <ProductImage>
                  <Box className="flex h-full items-center justify-center">
                    <ProductIcon name="Shoe" size="lg" />
                  </Box>
                </ProductImage>
                <Box className="p-4">
                  <ProductCard>
                    <Typography
                      type="h6"
                      className="mb-2 line-clamp-2 text-sm font-semibold"
                    >
                      {product.name}
                    </Typography>
                  </ProductCard>
                  <ProductPrice current={product.price} original={product.original} />
                  <ProductRating rating={product.rating} reviews={product.reviews} />
                  <ProductAction>
                    <Icon name="ShoppingCart" size="sm" />
                    Quick Add
                  </ProductAction>
                </Box>
              </ProductCard>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </Main>
  );
}
