"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@components/elements/button";
import { Icon } from "@components/elements/icon";
import { Box } from "@components/elements/box";
import { Container } from "@components/elements/container";
import ThemeToggle from "@components/layouts/theme-toggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Wireless Headphones" },
    { href: "/adidas", label: "Adidas Shoes" },
    { href: "/", label: "Shop All" }
  ];

  return (
    <Box className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <Container>
        <Box className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Icon name="Package" size="lg" className="text-primary" />
            <span className="text-lg font-bold">Design Store</span>
          </Link>

          {/* Desktop Navigation */}
          <Box className="hidden gap-1 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="muted">{link.label}</Button>
              </Link>
            ))}
          </Box>

          {/* Right Actions */}
          <Box className="flex items-center gap-2">
            {/* Search Button */}
            <Button variant="muted" iconOnly rounded aria-label="Search">
              <Icon name="Search" />
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Cart */}
            <Button
              variant="muted"
              iconOnly
              rounded
              aria-label="Shopping cart"
              className="relative"
            >
              <Icon name="ShoppingCart" />
              <span className="bg-primary text-primary-foreground absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                0
              </span>
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="muted"
              iconOnly
              rounded
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Icon name={isOpen ? "X" : "Menu"} />
            </Button>
          </Box>
        </Box>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box className="border-border flex flex-col gap-1 border-t py-4 md:hidden">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                <Button variant="muted" className="w-full justify-start">
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
