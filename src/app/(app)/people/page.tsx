/* eslint-disable @typescript-eslint/no-unsafe-return */

import { columns } from "./_components/person-columns";
import ReactDataTable from "../_components/react-data-table";

// async function getData(): Promise<{ data: SelectedPerson[] }> {
//   const res = await fetch("http://localhost:3000/api/people");

//   if (!res.ok) {
//     throw new Error("Fetch error");
//   }

//   return res.json();
// }

async function PeoplePage() {
  // const data = await getData();

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold">People</h2>
      <ReactDataTable columns={columns} baseURL="http://localhost:3000/api/people" />
    </div>
  );
}

export default PeoplePage;
