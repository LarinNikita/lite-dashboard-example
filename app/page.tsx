'use client'

import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  User,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AxisOptions, Chart } from "react-charts"
import React from "react"

interface IServerData {
  label: string;
  data: number[];
}

const servers = [
  {
    label: "Сервер1",
    type: "СП",
    os: "Windows",
    cpu_ram: "4 ядра, 16 ГБ ОЗУ"
  },
  {
    label: "Сервер2",
    type: "ТС",
    os: "Linux",
    cpu_ram: "8 ядер, 32 ГБ ОЗУ"
  },
  {
    label: "Сервер3",
    type: "СУБД",
    os: "Windows",
    cpu_ram: "2 ядра, 8 ГБ ОЗУ"
  },
  {
    label: "Сервер4",
    type: "ТС",
    os: "Linux",
    cpu_ram: "16 ядер, 64 ГБ ОЗУ"
  },
  {
    label: "Сервер5",
    type: "СУБД",
    os: "Windows",
    cpu_ram: "1 ядро, 4 ГБ ОЗУ"
  },
  {
    label: "Сервер6",
    type: "СП",
    os: "Linux",
    cpu_ram: "32 ядра, 128 ГБ ОЗУ"
  }
]

const incidents = [
  {
    label: "Инцидент1",
    cpu_threshold: 90,
    cpu_current: 85,
    date: "01-01-2023 12:00"
  },
  {
    label: "Инцидент2",
    cpu_threshold: 90,
    cpu_current: 88,
    date: "01-01-2023 13:00"
  },
  {
    label: "Инцидент3",
    cpu_threshold: 90,
    cpu_current: 92,
    date: "01-01-2023 14:00"
  },
  {
    label: "Инцидент4",
    cpu_threshold: 90,
    cpu_current: 87,
    date: "01-01-2023 15:00"
  },
  {
    label: "Инцидент5",
    cpu_threshold: 90,
    cpu_current: 89,
    date: "01-01-2023 16:00"
  },
  {
    label: "Инцидент6",
    cpu_threshold: 90,
    cpu_current: 91,
    date: "01-01-2023 17:00"
  }
]

const now = new Date();

const day = now.getDate().toString().padStart(2, '0');
const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Январь имеет индекс 0
const year = now.getFullYear();

const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');

const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;

export default function Dashboard() {

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Home className="h-5 w-5" />
            <span className="sr-only">Dashboard</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <LineChart className="h-5 w-5" />
            <span className="sr-only">Orders</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Package className="h-5 w-5" />
            <span className="sr-only">Products</span>
          </Link>

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Users2 className="h-5 w-5" />
            <span className="sr-only">Customers</span>
          </Link>

        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">

          <Link
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>

        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <User className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="active">СУБД</TabsTrigger>
                <TabsTrigger value="draft">СП</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  ТС
                </TabsTrigger>
                <TabsTrigger value="incidents" className="hidden sm:flex">
                  Инциденты
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Фильтр
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Экспорт
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Добавить сервер
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Сервера</CardTitle>
                  <CardDescription>
                    Мониторьте метрики серверов и управляйте своей инфраструктурой в режиме реального времени.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Название сервера</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Тип
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          ОС
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          ЦП/ОЗУ
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {servers.map((server) => (
                        <TableRow key={server.label}>
                          <TableCell className="font-medium">
                            {server.label}
                          </TableCell>
                          <TableCell>
                            {/* <Badge variant="outline">Draft</Badge> */}
                            {server.type}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {server.os}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {server.cpu_ram}
                          </TableCell>
                          <TableCell>


                            <Dialog>
                              <DialogTrigger>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Инцидент</DialogTitle>
                                  <DialogDescription>
                                    Метрики сервера {server.label}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4">
                                  <div className="grid grid-cols-2 space-y-2">
                                    <div>
                                      Пороговое значение ЦП
                                    </div>
                                    <div>
                                      90%
                                    </div>
                                    <div>
                                      Текущие значение ЦП
                                    </div>
                                    <div className="text-rose-500">
                                      89%
                                    </div>
                                    <div>
                                      Дата
                                    </div>
                                    <div>
                                      {formattedDate}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                  <DialogClose asChild>
                                    <Button variant="secondary">
                                      Закрыть
                                    </Button>
                                  </DialogClose>
                                  <Button variant="default">
                                    Перейти к инциденту
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}

                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Отображены <strong>1-6</strong> из <strong>32</strong>{" "}
                    серверов
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="incidents">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Инциденты</CardTitle>
                  <CardDescription>
                    Мониторьте метрики серверов и управляйте своей инфраструктурой в режиме реального времени.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Инцидент</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Пороговое значение ЦП
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Текущие значение ЦП
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Дата
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {incidents.map((incident) => (
                        <TableRow key={incident.label}>
                          <TableCell className="font-medium">
                            {incident.label}
                          </TableCell>
                          <TableCell>
                            {/* <Badge variant="outline">Draft</Badge> */}
                            {incident.cpu_threshold}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {incident.cpu_current}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {incident.date}
                          </TableCell>
                          <TableCell>


                            <Dialog>
                              <DialogTrigger>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Инцидент</DialogTitle>
                                  <DialogDescription>
                                    Метрики сервера {incident.label}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4">
                                  <div className="grid grid-cols-2 space-y-2">
                                    <div>
                                      Пороговое значение ЦП
                                    </div>
                                    <div>
                                      90%
                                    </div>
                                    <div>
                                      Текущие значение ЦП
                                    </div>
                                    <div className="text-rose-500">
                                      89%
                                    </div>
                                    <div>
                                      Дата
                                    </div>
                                    <div>
                                      {formattedDate}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                  <DialogClose asChild>
                                    <Button variant="secondary">
                                      Закрыть
                                    </Button>
                                  </DialogClose>
                                  <Button variant="default">
                                    Перейти к инциденту
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}

                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Отображены <strong>1-6</strong> из <strong>32</strong>{" "}
                    серверов
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
