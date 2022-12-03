import { Disclosure } from "@headlessui/react";
import React from "react";
import Paragraph from "./Paragraph";

const DropdownItem = (props) => {
  return (
    <>
      <Disclosure.Panel className="bg-th-blue-dark p-5" key={props.key}>
        <div className="bg-th-darken p-5">
          <h5 className={`font-bold text-2xl capitalize ${props.className}`}>
            {props.title}
          </h5>
          <Paragraph>{props.description}</Paragraph>
        </div>
      </Disclosure.Panel>
    </>
  );
};

export default DropdownItem;
