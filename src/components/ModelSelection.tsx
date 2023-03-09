"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () =>
  fetch(`${window.location.origin}/api/getEngines`).then((res) => res.json());

const ModelSelection = () => {
  // Fetch the list of models
  const { data: models, isLoading } = useSWR("models", fetchModels);
  // Get the selected model
  const { data: selectedModel, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      {/* Model selection dropdown */}
      <Select
        className="mt-2"
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-#434654 border-#434654",
        }}
        placeholder={selectedModel}
        options={models?.modelOptions}
        onChange={(e: any) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
