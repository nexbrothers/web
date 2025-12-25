"use client";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl",
            "backdrop-blur-sm",
            "border",
            "focus:outline-none focus:ring-1",
            "transition-all duration-300",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          style={{
            backgroundColor: "var(--background-card)",
            borderColor: error ? undefined : "var(--border)",
            color: "var(--text-primary)",
          }}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl min-h-[120px] resize-y",
            "backdrop-blur-sm",
            "border",
            "focus:outline-none focus:ring-1",
            "transition-all duration-300",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          style={{
            backgroundColor: "var(--background-card)",
            borderColor: error ? undefined : "var(--border)",
            color: "var(--text-primary)",
          }}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl",
            "backdrop-blur-sm",
            "border",
            "focus:outline-none focus:ring-1",
            "transition-all duration-300",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          style={{
            backgroundColor: "var(--background-card)",
            borderColor: error ? undefined : "var(--border)",
            color: "var(--text-primary)",
          }}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              style={{ backgroundColor: "var(--background-secondary)" }}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
