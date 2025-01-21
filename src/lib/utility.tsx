interface isErrorProps {
  isError: string;
  message: string;
}

export const renderErrorMessage = (isError: isErrorProps) => {
  <div className="text-[#58151c] bg-[#f8d7da] p-4 text-base rounded-lg w-full">
    Error Loading : {isError.message}
  </div>;
};
