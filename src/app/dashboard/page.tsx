"use client";

import { useState } from "react";

import Navbar from "@components/layouts/navbar";
import Footer from "@components/layouts/footer";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@components/layouts/accordion";

interface StatCard {
  label: string;
  value: string | number;
  change: number;
  icon: keyof typeof import("lucide-react").icons;
  color: "primary" | "accent" | "destructive" | "emerald";
}

interface Order {
  id: string;
  customer: string;
  amount: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  date: string;
}

interface Activity {
  id: string;
  type: "order" | "customer" | "review" | "feedback";
  title: string;
  description: string;
  timestamp: string;
  icon: keyof typeof import("lucide-react").icons;
}

const STATS: StatCard[] = [
  {
    label: "Total Orders",
    value: "2,543",
    change: 12.5,
    icon: "ShoppingCart",
    color: "primary"
  },
  {
    label: "Total Revenue",
    value: "$127,450",
    change: 8.2,
    icon: "DollarSign",
    color: "accent"
  },
  {
    label: "New Customers",
    value: "482",
    change: -5.3,
    icon: "Users",
    color: "primary"
  },
  {
    label: "Pending Orders",
    value: "38",
    change: 3.1,
    icon: "AlertCircle",
    color: "destructive"
  }
];

const RECENT_ORDERS: Order[] = [
  {
    id: "ORD-001",
    customer: "John Smith",
    amount: 299.99,
    status: "completed",
    date: "2024-04-08"
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    amount: 149.99,
    status: "processing",
    date: "2024-04-08"
  },
  {
    id: "ORD-003",
    customer: "Mike Davis",
    amount: 899.99,
    status: "pending",
    date: "2024-04-07"
  },
  {
    id: "ORD-004",
    customer: "Emma Wilson",
    amount: 549.99,
    status: "completed",
    date: "2024-04-07"
  },
  {
    id: "ORD-005",
    customer: "Alex Brown",
    amount: 199.99,
    status: "cancelled",
    date: "2024-04-06"
  }
];

const ACTIVITIES: Activity[] = [
  {
    id: "1",
    type: "order",
    title: "New Order Received",
    description: "Order #ORD-002 from Sarah Johnson",
    timestamp: "2 hours ago",
    icon: "ShoppingCart"
  },
  {
    id: "2",
    type: "customer",
    title: "New Customer Signup",
    description: "Welcome Emma Wilson to our platform",
    timestamp: "4 hours ago",
    icon: "UserPlus"
  },
  {
    id: "3",
    type: "review",
    title: "5-Star Review",
    description: "Customer gave 5-star rating to Adidas Ultraboost",
    timestamp: "6 hours ago",
    icon: "Star"
  },
  {
    id: "4",
    type: "feedback",
    title: "Customer Feedback",
    description: "Received feedback about checkout experience",
    timestamp: "8 hours ago",
    icon: "MessageSquare"
  }
];

const getStatusColor = (status: "pending" | "processing" | "completed" | "cancelled") => {
  switch (status) {
    case "completed":
      return "text-emerald-600 bg-emerald-50";
    case "processing":
      return "text-blue-600 bg-blue-50";
    case "pending":
      return "text-yellow-600 bg-yellow-50";
    case "cancelled":
      return "text-red-600 bg-red-50";
  }
};

const getStatColor = (color: StatCard["color"]) => {
  switch (color) {
    case "primary":
      return "from-primary/10 to-primary/5";
    case "accent":
      return "from-accent/10 to-accent/5";
    case "destructive":
      return "from-destructive/10 to-destructive/5";
    case "emerald":
      return "from-emerald-100 to-emerald-50";
  }
};

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  return (
    <Main>
      {/* Navbar */}
      <Navbar />

      {/* Welcome Section */}
      <Section className="from-primary/5 to-accent/5 bg-gradient-to-r">
        <Container>
          <Box className="py-8">
            <Box className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <Box className="flex flex-col gap-2">
                <Typography type="h2">Welcome back, John! 👋</Typography>
                <Text type="small" className="text-muted-foreground">
                  Here's what's happening with your store today.
                </Text>
              </Box>

              <Box className="flex gap-2">
                <Button variant="outline">
                  <Icon name="Download" size="sm" />
                  Export Report
                </Button>
                <Button>
                  <Icon name="Plus" size="sm" />
                  New Order
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section>
        <Container>
          <Box className="flex flex-col gap-6">
            <Box className="flex items-center justify-between">
              <Typography type="h4">Performance Overview</Typography>
              <Box className="flex gap-2">
                {["day", "week", "month", "year"].map((period) => (
                  <Button
                    key={period}
                    variant={selectedPeriod === period ? "primary" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedPeriod(period)}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </Button>
                ))}
              </Box>
            </Box>

            <Grid className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat) => (
                <GridItem key={stat.label}>
                  <Box
                    className={`border-border rounded-lg border bg-gradient-to-br ${getStatColor(stat.color)} p-6`}
                  >
                    <Box className="flex items-start justify-between">
                      <Box className="flex flex-col gap-2">
                        <Text type="small" className="text-muted-foreground">
                          {stat.label}
                        </Text>
                        <Typography type="h4">{stat.value}</Typography>
                      </Box>
                      <Box className="bg-background rounded-lg p-2">
                        <Icon name={stat.icon} className="text-muted-foreground" />
                      </Box>
                    </Box>
                    <Box className="mt-4 flex items-center gap-1">
                      <Icon
                        name={stat.change > 0 ? "TrendingUp" : "TrendingDown"}
                        size="sm"
                        className={stat.change > 0 ? "text-emerald-600" : "text-red-600"}
                      />
                      <Text
                        type="small"
                        className={
                          stat.change > 0
                            ? "font-medium text-emerald-600"
                            : "font-medium text-red-600"
                        }
                      >
                        {stat.change > 0 ? "+" : ""}
                        {stat.change}% from last {selectedPeriod}
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </Container>
      </Section>

      {/* Main Content Section */}
      <Section>
        <Container>
          <Grid className="grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Recent Orders */}
            <GridItem className="lg:col-span-2">
              <Box className="border-border bg-background rounded-lg border p-6">
                <Box className="mb-6 flex items-center justify-between">
                  <Typography type="h5">Recent Orders</Typography>
                  <Button variant="ghost" size="sm">
                    View All
                    <Icon name="ArrowRight" size="sm" />
                  </Button>
                </Box>

                <Box className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-border border-b">
                        <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">
                          Order ID
                        </th>
                        <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">
                          Customer
                        </th>
                        <th className="text-muted-foreground px-4 py-3 text-right text-sm font-medium">
                          Amount
                        </th>
                        <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">
                          Status
                        </th>
                        <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {RECENT_ORDERS.map((order) => (
                        <tr
                          key={order.id}
                          className="border-border hover:bg-muted border-b"
                        >
                          <td className="px-4 py-3">
                            <Text type="small" className="font-medium">
                              {order.id}
                            </Text>
                          </td>
                          <td className="px-4 py-3">
                            <Text type="small">{order.customer}</Text>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Text type="small" className="font-medium">
                              ${order.amount.toFixed(2)}
                            </Text>
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(order.status)}`}
                            >
                              {order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <Text type="small" className="text-muted-foreground">
                              {order.date}
                            </Text>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              </Box>
            </GridItem>

            {/* Activity Feed & Quick Actions */}
            <GridItem className="flex flex-col gap-6">
              {/* Quick Actions */}
              <Box className="border-border bg-background rounded-lg border p-6">
                <Typography type="h5" className="mb-4">
                  Quick Actions
                </Typography>
                <Box className="flex flex-col gap-2">
                  <Button variant="outline" className="justify-start">
                    <Icon name="Plus" size="sm" />
                    Create Product
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Icon name="Mail" size="sm" />
                    Send Newsletter
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Icon name="BarChart3" size="sm" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Icon name="Users" size="sm" />
                    Manage Customers
                  </Button>
                </Box>
              </Box>

              {/* Activity Feed */}
              <Box className="border-border bg-background rounded-lg border p-6">
                <Typography type="h5" className="mb-4">
                  Recent Activity
                </Typography>
                <Box className="flex flex-col gap-4">
                  {ACTIVITIES.map((activity) => (
                    <Box
                      key={activity.id}
                      className="border-border flex gap-3 border-b pb-4 last:border-b-0"
                    >
                      <Box className="bg-muted flex-shrink-0 rounded-lg p-2">
                        <Icon name={activity.icon} size="sm" />
                      </Box>
                      <Box className="min-w-0 flex-1">
                        <Text type="small" className="font-medium">
                          {activity.title}
                        </Text>
                        <Text type="small" className="text-muted-foreground truncate">
                          {activity.description}
                        </Text>
                        <Text type="small" className="text-muted-foreground mt-1 text-xs">
                          {activity.timestamp}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Section>

      {/* Charts Section */}
      <Section>
        <Container>
          <Box className="flex flex-col gap-6">
            <Typography type="h4">Analytics Overview</Typography>

            <Grid className="grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Sales Chart Placeholder */}
              <GridItem>
                <Box className="border-border bg-background rounded-lg border p-6">
                  <Box className="mb-6 flex items-center justify-between">
                    <Typography type="h6">Sales Trend</Typography>
                    <Button variant="ghost" size="sm">
                      <Icon name="MoreHorizontal" size="sm" />
                    </Button>
                  </Box>
                  <Box className="flex h-48 items-end justify-between gap-2">
                    {[40, 60, 50, 70, 80, 65, 90, 75].map((height, i) => (
                      <Box
                        key={i}
                        className="from-primary to-primary/50 flex-1 rounded-t-lg bg-gradient-to-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </Box>
                  <Box className="mt-4 flex justify-between">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Today"].map(
                      (day) => (
                        <Text key={day} type="small" className="text-muted-foreground">
                          {day}
                        </Text>
                      )
                    )}
                  </Box>
                </Box>
              </GridItem>

              {/* Top Products */}
              <GridItem>
                <Box className="border-border bg-background rounded-lg border p-6">
                  <Box className="mb-6 flex items-center justify-between">
                    <Typography type="h6">Top Products</Typography>
                    <Button variant="ghost" size="sm">
                      <Icon name="MoreHorizontal" size="sm" />
                    </Button>
                  </Box>

                  <Box className="flex flex-col gap-4">
                    {[
                      { name: "Adidas Ultraboost", sales: 324, color: "bg-primary" },
                      { name: "Adidas NMD R1", sales: 289, color: "bg-accent" },
                      { name: "Adidas Superstar", sales: 267, color: "bg-destructive" },
                      { name: "Adidas Stan Smith", sales: 198, color: "bg-emerald-500" }
                    ].map((product, i) => (
                      <Box key={i}>
                        <Box className="mb-2 flex items-center justify-between">
                          <Text type="small" className="font-medium">
                            {product.name}
                          </Text>
                          <Text type="small" className="text-muted-foreground">
                            {product.sales} sales
                          </Text>
                        </Box>
                        <Box className="bg-muted h-2 w-full overflow-hidden rounded-full">
                          <Box
                            className={`h-full ${product.color}`}
                            style={{
                              width: `${(product.sales / 324) * 100}%`
                            }}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <Box className="max-w-3xl">
            <Typography type="h4" className="mb-6">
              Frequently Asked Questions
            </Typography>

            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>How do I add a new product?</AccordionTrigger>
                <AccordionContent>
                  <Text type="small" className="text-muted-foreground">
                    Click on the "New Order" button in the welcome section, or use the
                    "Create Product" option in Quick Actions. Fill in the product details
                    including name, price, images, and description.
                  </Text>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>How can I track order fulfillment?</AccordionTrigger>
                <AccordionContent>
                  <Text type="small" className="text-muted-foreground">
                    All orders are displayed in the "Recent Orders" table with their
                    current status. You can click on any order to see detailed tracking
                    information and shipping updates.
                  </Text>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>How do I view detailed analytics?</AccordionTrigger>
                <AccordionContent>
                  <Text type="small" className="text-muted-foreground">
                    Click on "View Analytics" in the Quick Actions section. You can select
                    different time periods (day, week, month, year) to analyze your sales
                    trends and top performing products.
                  </Text>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>Can I export my data?</AccordionTrigger>
                <AccordionContent>
                  <Text type="small" className="text-muted-foreground">
                    Yes! Click the "Export Report" button at the top of the dashboard. You
                    can export orders, customer data, and analytics reports in various
                    formats.
                  </Text>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Box>
        </Container>
      </Section>

      {/* Footer */}
      <Footer />
    </Main>
  );
}
