import React, { ReactNode } from "react";

interface PaginationPortfolioProps {
  children: ReactNode;
}

interface PaginationInfoProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
}

const PaginationPortfolio: React.FC<PaginationPortfolioProps> & {PaginationInfo: React.FC<PaginationInfoProps>;PaginationButton: React.FC<PaginationButtonProps>;} = ({ children }) => {
  return <div className="flex flex-col items-center mt-6">{children}</div>;
};

const PaginationInfo: React.FC<PaginationInfoProps> = ({
  currentPage,
  itemsPerPage,
  totalItems,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900">{startItem}</span>{" "}
      to <span className="font-semibold text-gray-900">{endItem}</span> of{" "}
      <span className="font-semibold text-gray-900">{totalItems}</span> Entries
    </span>
  );
};

const PaginationButton: React.FC<PaginationButtonProps> = ({
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

PaginationPortfolio.PaginationInfo = PaginationInfo;
PaginationPortfolio.PaginationButton = PaginationButton;

export default PaginationPortfolio;
