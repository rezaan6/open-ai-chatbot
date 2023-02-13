"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () =>
  fetch(`${window.location.origin}/api/getEngines`).then((res) => res.json());

export default function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        placeholder={model}
        options={models?.modelOptions}
        onChange={(e: any) => setModel(e.value)}
      />
    </div>
  );
}
