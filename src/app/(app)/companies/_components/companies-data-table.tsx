/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import {
  type Grid,
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Group,
  type Sorts,
  type DataResult,
  Sort,
  Inject,
  type DataStateChangeEventArgs,
  type ColumnModel,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { Ajax } from "@syncfusion/ej2-base";
import { companiesData } from "@/lib/data";
import Link from "next/link";

export default function CompaniesDataTable() {
  const pageSettings: object = { pageSize: 6 };
  const filterSettings: object = { type: "Excel" };
  const dateFormatter = (field: string, data: any, column: ColumnModel) => {
    return new Date(data[field]);
  };
  const detailsButton = (props: any) => {
    return (
      <Link className='text-blue-500 hover:underline' href={`/companies/${props.id}`}>Details</Link>
    )
  }
  
  return (
    <>
      <GridComponent
        dataSource={companiesData}
        allowGrouping={true}
        allowSorting={true}
        allowFiltering={true}
        allowPaging={true}
        pageSettings={pageSettings}
        filterSettings={filterSettings}
        height={"auto"}
        rowHeight={50}
        gridLines="Both"
      >
        <ColumnsDirective>
          <ColumnDirective
            headerText=""
            width="100"
            template={detailsButton}
            textAlign="Center"
          />
          <ColumnDirective headerText="Name" field="name" width="250" />
          <ColumnDirective headerText="Email" field="email" width="250" />
          <ColumnDirective headerText="Phone" field="phone" width="250" />
          <ColumnDirective headerText="Website" field="website" width="350" />
          <ColumnDirective
            allowFiltering={false}
            headerText="Created"
            field="createdAt"
            width="150"
            format={"yMd"}
            type="Date"
            valueAccessor={dateFormatter}
          />
          <ColumnDirective
            allowFiltering={false}
            headerText="Updated"
            field="updatedAt"
            width="150"
            format={"yMd"}
            type="Date"
            valueAccessor={dateFormatter}
          />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </>
  );
}
