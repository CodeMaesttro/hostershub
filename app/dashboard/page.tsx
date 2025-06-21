"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, ShoppingBag, CreditCard, Download, RefreshCw, AlertCircle, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="container py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Kamil!</h1>
            <p className="text-muted-foreground">Manage your hosting services and orders</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Hosting</CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Plans active</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$486.50</div>
                <p className="text-xs text-muted-foreground">This year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">Open ticket</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="hosting" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="hosting">Hosting</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Hosting Tab */}
            <TabsContent value="hosting" className="space-y-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Professional Plan</CardTitle>
                        <CardDescription>hostershub.com</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium">Storage Used</div>
                        <div className="text-2xl font-bold">23.5 GB</div>
                        <Progress value={47} className="mt-2" />
                        <div className="text-xs text-muted-foreground mt-1">47% of 50 GB</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Bandwidth Used</div>
                        <div className="text-2xl font-bold">156 GB</div>
                        <Progress value={31} className="mt-2" />
                        <div className="text-xs text-muted-foreground mt-1">31% of 500 GB</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-sm font-medium">Next Renewal</div>
                        <div className="text-sm text-muted-foreground">March 15, 2024</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Renew
                        </Button>
                        <Button size="sm">Manage</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Starter Plan</CardTitle>
                        <CardDescription>myblog.hostershub.com</CardDescription>
                      </div>
                      <Badge variant="secondary">Expiring Soon</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium">Storage Used</div>
                        <div className="text-2xl font-bold">8.2 GB</div>
                        <Progress value={82} className="mt-2" />
                        <div className="text-xs text-muted-foreground mt-1">82% of 10 GB</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Bandwidth Used</div>
                        <div className="text-2xl font-bold">67 GB</div>
                        <Progress value={67} className="mt-2" />
                        <div className="text-xs text-muted-foreground mt-1">67% of 100 GB</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="text-sm font-medium">Expires</div>
                        <div className="text-sm text-red-600">January 28, 2024</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Renew Now
                        </Button>
                        <Button size="sm">Upgrade</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your order history and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: "#HH-001",
                        item: "Premium Hoodie - Black (L)",
                        status: "Shipped",
                        date: "Jan 15, 2024",
                        amount: "$49.99",
                      },
                      {
                        id: "#HH-002",
                        item: "Professional Hosting Plan",
                        status: "Active",
                        date: "Jan 10, 2024",
                        amount: "$19.99",
                      },
                      {
                        id: "#HH-003",
                        item: "Developer T-Shirt - Navy (M)",
                        status: "Delivered",
                        date: "Dec 28, 2023",
                        amount: "$24.99",
                      },
                    ].map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <div className="font-medium">{order.item}</div>
                          <div className="text-sm text-muted-foreground">
                            {order.id} • {order.date}
                          </div>
                        </div>
                        <div className="text-right space-y-1">
                          <div className="font-medium">{order.amount}</div>
                          <Badge
                            variant={
                              order.status === "Delivered"
                                ? "default"
                                : order.status === "Shipped"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Invoices Tab */}
            <TabsContent value="invoices" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Invoices & Receipts</CardTitle>
                  <CardDescription>Download your payment receipts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: "INV-2024-001",
                        description: "Professional Hosting Plan",
                        date: "Jan 10, 2024",
                        amount: "$19.99",
                        status: "Paid",
                      },
                      {
                        id: "INV-2023-012",
                        description: "Premium Hoodie",
                        date: "Dec 28, 2023",
                        amount: "$49.99",
                        status: "Paid",
                      },
                      {
                        id: "INV-2023-011",
                        description: "Starter Hosting Plan",
                        date: "Dec 15, 2023",
                        amount: "$9.99",
                        status: "Paid",
                      },
                    ].map((invoice) => (
                      <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <div className="font-medium">{invoice.description}</div>
                          <div className="text-sm text-muted-foreground">
                            {invoice.id} • {invoice.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right space-y-1">
                            <div className="font-medium">{invoice.amount}</div>
                            <Badge variant="outline" className="bg-green-50 text-green-700">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              {invoice.status}
                            </Badge>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <div className="mt-1 p-2 border rounded-md">Kamil</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <div className="mt-1 p-2 border rounded-md">Mohammed</div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <div className="mt-1 p-2 border rounded-md">malbakamil0087@gmail.com</div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <div className="mt-1 p-2 border rounded-md">+233 59 170 3545</div>
                  </div>

                  <Button>Edit Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
