"use client";

import {
  ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Page, Sort, Filter, Group
} from '@syncfusion/ej2-react-grids';
import { peopleData } from '@/lib/data';

export default function PeopleDataTable() {
  const pageSettings: object = { pageSize: 6 };
  const filterSettings: object = { type: 'Excel' };
  return (
    <>
      <GridComponent
        dataSource={peopleData}
        // allowGrouping={true}
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
          {/* <ColumnDirective field="OrderID" width="100" textAlign="Right" />
          <ColumnDirective field="CustomerID" width="100" />
          <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
          <ColumnDirective
            field="Freight"
            width="100"
            format="C2"
            textAlign="Right"
          /> */}
          <ColumnDirective headerText='Name' field="fullName" width="100" />
          <ColumnDirective headerText='Email' field="email" width="100" />
          <ColumnDirective headerText='Phone' field="phone" width="100" />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
      </GridComponent>
    </>
  )
}