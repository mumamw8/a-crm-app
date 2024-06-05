"use client";

import SubmitFormButton from "@/components/buttons/SubmitFormButton";
import { type SelectedPerson } from "@/types";
import { EditIcon, SaveIcon } from "lucide-react";
import React, { useState } from "react";

type Props = {
  person: SelectedPerson;
};

function PersonDetailsForm(props: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [changesMade, setChanagesMade] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full">
      {!editMode && <button onClick={() => setEditMode(true)} className="mb-2"><EditIcon className="w-6 h-6 text-gray-500" /></button>}
        <form>
          <fieldset disabled={!editMode}>
            <div className="divide-y divide-gray-100 text-sm">
              <div className="input-container">
                <label className="input-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  defaultValue={props.person.firstName ?? ""}
                  placeholder="John Doe"
                  onChange={() => setChanagesMade(true)}
                />
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  defaultValue={props.person.lastName ?? ""}
                  placeholder="John Doe"
                  onChange={() => setChanagesMade(true)}
                />
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  defaultValue={props.person.email ?? ""}
                  placeholder="example@email.com"
                  onChange={() => setChanagesMade(true)}
                />
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  defaultValue={props.person.phone ?? ""}
                  placeholder="+1 --- --- ----"
                  onChange={() => setChanagesMade(true)}
                />
              </div>
              {/* <label className="input-label" htmlFor="bioIn">Bio</label>
            <textarea
              name="bio"
              defaultValue={page.bio}
              id="bioIn"
              placeholder="Your bio goes here..." /> */}
              {changesMade && <div className="max-w-[200px]">
                <SubmitFormButton>
                  <SaveIcon className="w-5 h-5" />
                  <span>Save</span>
                </SubmitFormButton>
              </div>}
            </div>
          </fieldset>
        </form>
    </div>
  );
}

export default PersonDetailsForm;
