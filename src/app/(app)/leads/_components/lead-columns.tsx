/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/dot-notation */
"use client";

import { type SelectedLead } from "@/types";
import Link from "next/link";
import { type TableColumn } from "react-data-table-component";

export const columns: TableColumn<SelectedLead>[] = [
  {
    name: "",
    cell: (row) => {
        return (
          <Link
          className="text-blue-500 hover:underline"
          href={`/leads/${row.id}`}
          >
            Details
          </Link>
        );
    },
  },
  {
    name: "First Name",
    selector: row => row.firstName ?? "",
    sortable: true
  },
  {
    name: "Last Name",
    selector: row => row.lastName ?? "",
    sortable: true
  },
  {
    name: "Email",
    selector: row => row.email ?? ""
  },
  {
    name: "Phone",
    selector: row => row.phone ?? ""
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