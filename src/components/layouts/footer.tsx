"use client";

import Link from "next/link";

import { Box } from "@components/elements/box";
import { Container } from "@components/elements/container";
import { Icon } from "@components/elements/icon";
import { Typography } from "@components/elements/typography";
import { Text } from "@components/elements/text";
import { Button } from "@components/elements/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: [
      { label: "All Products", href: "/" },
      { label: "Men", href: "/" },
      { label: "Women", href: "/" },
      { label: "Kids", href: "/" },
      { label: "Sale", href: "/" }
    ],
    Support: [
      { label: "Contact Us", href: "/" },
      { label: "Help Center", href: "/" },
      { label: "Shipping Info", href: "/" },
      { label: "Returns", href: "/" },
      { label: "FAQs", href: "/" }
    ],
    Company: [
      { label: "About Us", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Blog", href: "/" },
      { label: "Press", href: "/" },
      { label: "Partnerships", href: "/" }
    ],
    Legal: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
      { label: "Cookie Policy", href: "/" },
      { label: "Accessibility", href: "/" }
    ]
  };

  return (
    <Box className="border-border bg-muted border-t">
      <Container>
        {/* Footer Content */}
        <Box className="py-12">
          <Box className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* Brand Section */}
            <Box className="col-span-full md:col-span-1 lg:col-span-1">
              <Box className="mb-4 flex items-center gap-2">
                <Icon name="Package" size="lg" className="text-primary" />
                <span className="text-lg font-bold">Design Store</span>
              </Box>
              <Text type="small" className="text-muted-foreground mb-4">
                Your one-stop shop for premium products and exclusive deals.
              </Text>

              {/* Social Links */}
              <Box className="flex gap-2">
                <Button variant="ghost" iconOnly rounded size="sm" aria-label="Facebook">
                  <Icon name="Facebook" size="sm" />
                </Button>
                <Button variant="ghost" iconOnly rounded size="sm" aria-label="Twitter">
                  <Icon name="Twitter" size="sm" />
                </Button>
                <Button variant="ghost" iconOnly rounded size="sm" aria-label="Instagram">
                  <Icon name="Instagram" size="sm" />
                </Button>
                <Button variant="ghost" iconOnly rounded size="sm" aria-label="Linkedin">
                  <Icon name="Linkedin" size="sm" />
                </Button>
              </Box>
            </Box>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <Box key={title}>
                <Typography type="h6" className="mb-4 font-semibold">
                  {title}
                </Typography>
                <Box className="flex flex-col gap-2">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Text
                        type="small"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Text>
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Newsletter Section */}
          <Box className="border-border mt-12 border-t pt-8">
            <Box className="max-w-md">
              <Typography type="h6" className="mb-2">
                Subscribe to Our Newsletter
              </Typography>
              <Text type="small" className="text-muted-foreground mb-4">
                Get the latest updates on new products and upcoming sales.
              </Text>
              <Box className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-border bg-background placeholder:text-muted-foreground focus:ring-primary flex-1 rounded-md border px-3 py-2 text-sm transition-colors focus:ring-2 focus:outline-none"
                />
                <Button>Subscribe</Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Box className="border-border flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
          <Text type="small" className="text-muted-foreground">
            © {currentYear} Design Store. All rights reserved.
          </Text>
          <Box className="flex gap-4">
            <Link href="/">
              <Text
                type="small"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Text>
            </Link>
            <Link href="/">
              <Text
                type="small"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Text>
            </Link>
            <Link href="/">
              <Text
                type="small"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Text>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
