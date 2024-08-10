import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="flex lg:justify-start justify-center  ">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
          className={`flex items-center ${currentPage === 1 && "disabled:opacity-50 disabled:cursor-not-allowed" }`}
            onClick={() => paginate( currentPage ==1 ? currentPage : currentPage - 1)}
            size="sm"
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              backgroundColor: currentPage === 1 ? '#0001' : '#fff',
              color: currentPage === 1 ? '#999' : '#000',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={currentPage === 1} 
          >
          </PaginationPrevious>
        </PaginationItem>

        {pageNumbers.map((number) => (
          <PaginationItem key={number}>
            <PaginationLink
              onClick={() => paginate(number)}
              isActive={currentPage === number}
              size="sm"
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                backgroundColor: currentPage === number ? '#007bff' : '#fff',
                color: currentPage === number ? '#fff' : '#000',
                cursor: 'pointer',
                border: '1px solid #ddd',
              }}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {pageNumbers.length > 5 && currentPage < pageNumbers.length - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => paginate(currentPage === pageNumbers.length ? currentPage : currentPage + 1)}
            size="sm"
            style={{
              padding: '8px 12px',
              borderRadius: '4px',
              color: currentPage === pageNumbers.length ? '#999' : '#000',
              backgroundColor: pageNumbers.length ? '#0001' : '#fff',
              cursor: currentPage === pageNumbers.length ? 'not-allowed' : 'pointer',
            }}
            aria-disabled={currentPage === pageNumbers.length} 
          >
            Nex
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
