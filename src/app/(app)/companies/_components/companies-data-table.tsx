/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";

import {
  ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Page, Sort, Filter, Group,
  type ColumnModel
} from '@syncfusion/ej2-react-grids';
import { companiesData } from '@/lib/data';

export default function CompaniesDataTable() {
  const pageSettings: object = { pageSize: 6 };
  const filterSettings: object = { type: 'Excel' };
  const dateFormatter = (field: string, data: any, column: ColumnModel ) => {
    return new Date(data[field]);
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
        gridLines='Both'
      >
        <ColumnsDirective>
          <ColumnDirective headerText='Name' field="name" width="250" />
          <ColumnDirective headerText='Email' field="email" width="250" />
          <ColumnDirective headerText='Phone' field="phone" width="250" />
          <ColumnDirective headerText='Website' field="website" width="350" />
          <ColumnDirective allowFiltering={false} headerText='Created' field="createdAt" width="150" format={"yMd"} type='Date' valueAccessor={dateFormatter} />
          <ColumnDirective allowFiltering={false} headerText='Updated' field="updatedAt" width="150" format={"yMd"} type='Date' valueAccessor={dateFormatter} />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </>
  )
}