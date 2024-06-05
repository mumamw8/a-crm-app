/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */


import SectionBox from "@/components/layouts/section-box";
import { lusitana } from "@/lib/fonts";
import { type SelectedPerson } from "@/types";
import PersonDetailsForm from "../_components/person-details-form";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  params: { personId: string};
}

async function PersonPage({ params }: Props) {
  const personId = params.personId;

  const getData = async (id:string) => {
    const res = await fetch(`http://localhost:3000/api/people/${id}`);
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  const data = await getData(personId);
  const person: SelectedPerson = data.data[0] as SelectedPerson;

  return (
    <div className={`flex flex-col gap-y-8`}>
      <SectionBox className="sm:flex gap-x-4 w-full">
        <div className="w-[350px] flex flex-col items-center">
          {/* <h3 className={`${lusitana.className} text-4xl font-semibold mb-4`}>{person.firstName} {person.lastName}</h3> */}
          <div className="overflow-hidden h-[154px] w-[154px] mx-auto rounded-full border-4 border-white shadow shadow-black/50">
            <Image
              className="w-full h-full object-cover"
              src={person.companyId ?? "https://images.unsplash.com/photo-1716724854567-9ec995836d19?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt={'avatar'}
              width={154} height={154} />
          </div>
        </div>
        <PersonDetailsForm person={person} />
      </SectionBox>
      <SectionBox>
      <Tabs defaultValue="deals" className="">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="deals" className="p-1">Deals</TabsTrigger>
          <TabsTrigger value="notes" className="p-1">Notes</TabsTrigger>
          <TabsTrigger value="files" className="p-1">Files</TabsTrigger>
          <TabsTrigger value="tasks" className="p-1">Tasks</TabsTrigger>
        </TabsList>
        {/* Deals */}
        <TabsContent value="deals">
          Deals
        </TabsContent>
        {/* Profile Settings */}
        <TabsContent value="notes">
          Notes
        </TabsContent>
        {/* Files */}
        <TabsContent value="files">
          files
        </TabsContent>
        {/* Tasks */}
        <TabsContent value="tasks">
          Tasks
        </TabsContent>
      </Tabs>
      </SectionBox>
    </div>
  )
}

export default PersonPage;