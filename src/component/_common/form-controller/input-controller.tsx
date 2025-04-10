import React, { ChangeEventHandler, ComponentProps } from "react";
import {
  Control,
  Controller,
  DeepRequired,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Path,
} from "react-hook-form";

import { Box } from "@/component/ui/box";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Typography } from "@/component/ui/typography";
import { cn } from "@/script/util/ui-utils";

interface Props<T extends FieldValues> extends ComponentProps<"input"> {
  control: Control<T>;
  name: Path<T>;
  customOnChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

const InputController = <T extends FieldValues>({
  control,
  name,
  customOnChange,
  label,
  ...props
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, ...field },
        formState: { errors },
      }) => {
        const errorMessage = name.includes(".")
          ? name
              .split(".")
              .reduce((acc, part) => {
                return acc?.[part] as FieldErrorsImpl<DeepRequired<T>>;
              }, errors as FieldErrors<T>)
              ?.message?.toString() || ""
          : errors[name]?.message?.toString() || "";

        return (
          <Box className="flex size-full flex-col items-start gap-1.5">
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
              className={cn(
                "flex min-w-16 flex-1 self-stretch",
                errorMessage &&
                  "border-destructive focus-visible:ring-destructive"
              )}
              id={name}
              value={value}
              onChange={(e) => {
                if (customOnChange) {
                  customOnChange(e);
                }
                onChange(e.target.value);
              }}
              {...field}
              {...props}
            />
            {errorMessage && (
              <Typography className="text-start text-destructive" variant="p">
                {errorMessage}
              </Typography>
            )}
          </Box>
        );
      }}
    />
  );
};

export default InputController;
