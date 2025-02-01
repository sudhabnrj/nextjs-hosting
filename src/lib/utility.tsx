import { PageComponent, PageData } from "@/types/types";

interface isErrorProps {
  isError: string;
  message: string;
}

export const renderErrorMessage = (isError: isErrorProps) => {
  return (
    <div className="alert alert-error p-4 text-base rounded-lg w-full">
      Error Loading: {isError.message}
    </div>
  );
};

export const filterBaseUrl = (
  url: string | undefined,
  baseUrl: string
): string => {
  return typeof url === "string" ? url.replace(baseUrl || "", "") : "";
};

// export const getSectionData = (page: PageData, layout: string) => {
//   const data = page?.acf?.page_component.find(
//     (section: SectionData) => section.acf_fc_layout === layout
//   );
//   return data ?? { section_title: "", description: "" };
// };

export const getSectionData = (
  page: PageData,
  layout: string
): PageComponent | undefined => {
  return page?.acf?.page_component.find(
    (section: PageComponent) => section.acf_fc_layout === layout
  );
};

export const getCommonSectionData = (
  page: PageData,
  layout: string
): PageComponent | undefined => {
  if (
    !page?.acf?.common_component ||
    !Array.isArray(page.acf.common_component)
  ) {
    return undefined; // Ensure there's no error if the data is missing
  }
  return page.acf.common_component.find(
    (section: PageComponent) => section.acf_fc_layout === layout
  );
};
