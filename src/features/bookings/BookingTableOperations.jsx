import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by Date (Recent first)" },
          { value: "startDate-asc", label: "Sort by Date (Earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by Amount (High first)",
          },
          { value: "totalPrice-asc", label: "Sort by Amount (Low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
