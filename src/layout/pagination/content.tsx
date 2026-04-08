import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";

type PropsPaginationListTicketBus = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataTicketBus: any;
  ITEM_PER_PAGE: number;
  currentPage: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCurrentPage: any;
};

export default function PaginationListTicketBus(
  props: PropsPaginationListTicketBus,
) {
  const { dataTicketBus, ITEM_PER_PAGE, currentPage, setCurrentPage } = props;
  const totalPages = Math.ceil(dataTicketBus.length / ITEM_PER_PAGE);

  function getPaginationRange(current: number, total: number) {
    const range: number[] = [];
    const rangeWithDots: (number | "...")[] = [];
    let lastNum: number | undefined;

    if (total <= 0) return [];

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
        range.push(i);
      }
    }

    for (const i of range) {
      if (lastNum && i - lastNum > 1) {
        rangeWithDots.push("...");
      }
      rangeWithDots.push(i);
      lastNum = i;
    }

    return rangeWithDots;
  }
  return (
    <Pagination className="mt-5 flex justify-around items-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            size="default"
            onClick={() =>
              setCurrentPage((page: number) => Math.max(page - 1, 1))
            }
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
        {getPaginationRange(currentPage, totalPages).map((item, i) => (
          <PaginationItem key={i}>
            {item === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                size="default"
                isActive={currentPage === item}
                onClick={() => setCurrentPage(item)}
              >
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            size="default"
            onClick={() =>
              setCurrentPage((page: number) => Math.min(page + 1, totalPages))
            }
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
