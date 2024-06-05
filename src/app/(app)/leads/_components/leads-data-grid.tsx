/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import { useEffect, useRef } from "react";
import {
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
import Link from "next/link";

function LeadsDataGrid(this: any) {
  useEffect(() => {
    renderComplete();
  });
  const grid = useRef<GridComponent>(null);
  const data: object | undefined = [];
  const BASE_URL = "/api/lead";

  function renderComplete() {
    const state = { skip: 0, take: 10000 };
    dataStateChange(state);
  }

  function dataStateChange(state: DataStateChangeEventArgs) {
    void execute(state).then((gridData) => {
      if (grid?.current) {
        grid.current.dataSource = gridData.result;
        grid.current.dataBind();
      }
      // grid.dataSource = gridData
    });
  }

  function execute(state: DataStateChangeEventArgs): Promise<DataResult> {
    return getData(state);
  }

  const ajax: Ajax = new Ajax({
    type: "GET",
    mode: true,
    onFailure: (e: Error) => {
      console.error(e);
      return false;
    },
  });
  function getData(state: DataStateChangeEventArgs): Promise<DataResult> {
    const pageQuery = `skip=${state.skip}&take=${state.take}`;
    let sortQuery = "";

    if (state.sorted && state.sorted.length > 0) {
      sortQuery =
        `&orderby=` +
        state.sorted
          .map((obj: Sorts) => {
            return obj.direction === "descending"
              ? `${obj.name} desc`
              : obj.name;
          })
          .reverse()
          .join(",");
    }

    ajax.url = `${BASE_URL}?${pageQuery}${sortQuery}`;

    return ajax.send().then((response: any) => {
      const data = JSON.parse(response);
      return { result: data["data"], count: parseInt(data["count"], 10) };
    });
  }

  const dateFormatter = (field: string, data: any, _column: ColumnModel) => {
    return new Date(data[field]);
  };
  const detailsButton = (props: any) => {
    return (
      <Link
        className="text-blue-500 hover:underline"
        href={`/leads/${props.id}`}
      >
        Details
      </Link>
    );
  };

  return (
    <GridComponent
      dataSource={data}
      ref={grid}
      dataStateChange={dataStateChange.bind(this)}
      allowGrouping={true}
      allowSorting={true}
      allowFiltering={true}
      allowPaging={true}
      pageSettings={{ pageCount: 4, pageSize: 20 }}
      filterSettings={{ type: "CheckBox" }}
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
        <ColumnDirective headerText="Fist Name" field="firstName" width="150" />
        <ColumnDirective headerText="Last Name" field="lastName" width="150" />
        <ColumnDirective headerText="Email" field="email" width="150" />
        <ColumnDirective headerText="Phone" field="phone" width="150" />
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
      <Inject services={[Page, Sort, Group, Filter]} />
    </GridComponent>
  );
}
export default LeadsDataGrid;
