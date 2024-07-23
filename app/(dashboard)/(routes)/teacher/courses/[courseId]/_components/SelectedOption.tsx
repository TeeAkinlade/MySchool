"use client"

import { cn } from "@/lib/utils"
import React from "react";

interface ComboBoxProps {
    options: { label: string, value: string }[];
    value?: string;
    onChange: (value: string ) => void
  }
  
  
  export const SelectBox = ({ options, value, onChange }: ComboBoxProps) => {
    const [open, setOpen] = React.useState(false);
    const selectBox = (
      <select
        value={value}
      >
        {options.map((option) => (
          <option key={option.value}
          onSelect={() => {
            onChange(option.value === value ? "" : option.value)
            setOpen(false)
          }}>
            <p className={cn("mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
          </option>
        ))}
      </select>
    );
  
    return <div>{selectBox}</div>;
  };