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
