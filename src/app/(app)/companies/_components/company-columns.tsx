/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/dot-notation */
"use client";

import { type SelectedCompany } from "@/types";
import Link from "next/link";
import { type TableColumn } from "react-data-table-component";

export const columns: TableColumn<SelectedCompany>[] = [
  {
    name: "",
    cell: (row) => {
        return (
          <Link
          className="text-blue-500 hover:underline"
          href={`/companies/${row.id}`}
          >
            Details
          </Link>
        );
    },
  },
  {
    name: "Name",
    selector: row => row.name ?? "",
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
    name: "Website",
    selector: row => row.website ?? "",
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