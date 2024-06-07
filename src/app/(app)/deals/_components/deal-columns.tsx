/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/dot-notation */
"use client";

import { type SelectedDeal } from "@/types";
import Link from "next/link";
import { type TableColumn } from "react-data-table-component";

export const columns: TableColumn<SelectedDeal>[] = [
  {
    name: "",
    cell: (row) => {
        return (
          <Link
          className="text-blue-500 hover:underline"
          href={`/deals/${row.id}`}
          >
            Details
          </Link>
        );
    },
  },
  {
    name: "Title",
    selector: row => row.title ?? "",
    sortable: true
  },
  {
    name: "Description",
    selector: row => row.description ?? "",
    sortable: true
  },
  {
    name: "Created",
    selector: row => new Date(row.createdAt).toLocaleDateString(),
    sortable: true
  },
  {
    name: "Updated",
    selector: row => new Date(row.createdAt).toLocaleDateString(),
    sortable: true
  },
];