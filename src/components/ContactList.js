import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilterList(list);
    } else {
      setFilterList(contactList);
    }
  }, [contactList, keyword]);
  return (
    <div>
      <SearchBox />
      <div>
        <span>num:{filterList.length}</span>
        {filterList.map((item) => (
          <ContactItem id={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
