"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Menu, MonitorCog, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Box } from "@/component/ui/box";
import { Button } from "@/component/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/component/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/component/ui/toggle-group";
import { MENUS } from "@/script/constant/route-constants";

const MenuSheet = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger aria-label="hamburger menu trigger">
        <Menu aria-label="hamburger menu icon" />
      </SheetTrigger>
      <SheetContent
        className="flex max-w-72 flex-col gap-0 p-0"
        isClose={false}>
        <SheetHeader isClose>
          <SheetTitle>어디로 이동할까요?</SheetTitle>
        </SheetHeader>
        <Box className="flex flex-1 flex-col gap-y-4 p-4">
          {MENUS.map((menu) => {
            return (
              <Button
                key={menu.name}
                className="flex justify-start rounded-md py-2 text-left text-lg"
                data-gtm-id={`mobile-menu-sheet:go-to-${menu.link || "home"}`}
                variant="none-style"
                asChild>
                <SheetPrimitive.Close asChild>
                  <Link href={`/${menu.link}`}>
                    {menu.name}
                    <span className="sr-only">{menu.name}</span>
                  </Link>
                </SheetPrimitive.Close>
              </Button>
            );
          })}
        </Box>
        <SheetFooter className="flex w-full items-center justify-end border-t border-t-light-gray px-4 py-2">
          <ToggleGroup
            className="flex w-full items-center justify-end"
            defaultValue={theme || "system"}
            type="single"
            onValueChange={setTheme}>
            <ToggleGroupItem size="sm" value="light">
              <Sun />
            </ToggleGroupItem>
            <ToggleGroupItem size="sm" value="dark">
              <Moon />
            </ToggleGroupItem>
            <ToggleGroupItem size="sm" value="system">
              <MonitorCog />
            </ToggleGroupItem>
          </ToggleGroup>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
