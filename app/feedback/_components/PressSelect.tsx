// PressSelect.tsx
"use client";

import Select from "react-select";

interface PressOption {
  value: string;
  label: string;
}

interface PressSelectProps {
  options: PressOption[];
  selectedPress: string;
  setSelectedPress: (value: string) => void;
}

export default function PressSelect({
  options,
  selectedPress,
  setSelectedPress,
}: PressSelectProps) {
  return (
    <Select
      id="press"
      options={options}
      value={options.find((option) => option.value === selectedPress)}
      onChange={(option) => setSelectedPress(option?.value || "")}
      placeholder="언론사를 검색하세요"
      isClearable
      isSearchable
      classNamePrefix="select"
      noOptionsMessage={() => "검색 결과가 없습니다"}
    />
  );
}
