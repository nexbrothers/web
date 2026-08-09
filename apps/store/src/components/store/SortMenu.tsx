"use client";

import { Select } from "@repo/ui/ui";
import type { AppFilters } from "../../services/appService";

const OPTIONS: { value: NonNullable<AppFilters["sort"]>; label: string }[] = [
  { value: "relevance", label: "Relevance" },
  { value: "rating", label: "Highest rated" },
  { value: "downloads", label: "Most downloaded" },
  { value: "updated", label: "Recently updated" },
  { value: "name", label: "Name (A–Z)" },
];

export function SortMenu({
  value,
  onChange,
}: {
  value: AppFilters["sort"];
  onChange: (v: AppFilters["sort"]) => void;
}) {
  return (
    <div className="w-44 shrink-0">
      <Select
        aria-label="Sort apps"
        value={value}
        onChange={(e) => onChange(e.target.value as AppFilters["sort"])}
        options={OPTIONS}
        className="!py-2 !text-xs"
      />
    </div>
  );
}
