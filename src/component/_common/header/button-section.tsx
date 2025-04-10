"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";

import { Box } from "@/component/ui/box";
import { Button } from "@/component/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/component/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";
import { MENUS } from "@/script/constant/route-constants";

interface Menu {
  name: string;
  link: string;
  child: Array<{
    name: string;
    link: string;
  }>;
}

const ButtonSection = () => {
  const { setTheme, resolvedTheme, theme } = useTheme();

  return (
    <Box className="flex items-center gap-x-4">
      {MENUS.map((menu) => {
        if (menu.child.length === 0) {
          return (
            <Button
              key={menu.name}
              aria-label={menu.name}
              data-gtm-id={`header:go-to-${menu.link || "home"}`}
              size="sm"
              variant="ghost"
              asChild>
              <Link href={`/${menu.link}`} tabIndex={-1}>
                {menu.name}
                <span className="sr-only">{menu.name}</span>
              </Link>
            </Button>
          );
        } else {
          return (
            <DropdownMenu key={menu.name}>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label={menu.name}
                  data-gtm-id={`header:${menu.link || "home"}`}
                  size="sm"
                  variant="ghost">
                  {menu.name}
                  <span className="sr-only">{menu.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup
                  value={theme || "system"}
                  onValueChange={setTheme}>
                  {menu.child.map((child) => (
                    <DropdownMenuRadioItem key={child.name} value={child.name}>
                      {child?.name || ""}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }
      })}
      <Select defaultValue={theme || "system"} onValueChange={setTheme}>
        <SelectTrigger
          className="w-fit border-transparent bg-transparent"
          isArrowIcon={false}
          size="sm">
          <SelectValue asChild>
            {resolvedTheme === "dark" ? (
              <Moon className="size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            ) : (
              <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            )}
          </SelectValue>
          <span className="sr-only">Toggle theme</span>
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="light">라이트 모드</SelectItem>
          <SelectItem value="dark">다크 모드</SelectItem>
          <SelectItem value="system">시스템 설정</SelectItem>
        </SelectContent>
      </Select>
    </Box>
  );
};

export default ButtonSection;
