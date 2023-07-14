import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [contactList, keyword]);
  return (
    <div className="contact-list">
      <SearchBox />
      <div className="num-count">num : {filteredList.length} </div>
      {filteredList.map((item) => (
        <ContactItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
