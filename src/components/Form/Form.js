import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import contactPage from "@/data/contactPage";
import { Col, Container, Row } from "react-bootstrap";

const typeOptions = ["City tour", "Issyk lake", "Ethno-village"].map((it) => ({
    value: it,
    label: it,
  }));
  
  const customStyle = {
    valueContainer: (provided) => ({
      ...provided,
      paddingTop: 20,
      paddingBottom: 20,
      color: "#787780",
      fontSize: 13,
      fontWeight: 500,
    }),
    singleValue: (provided) => ({
      ...provided,
      cursor: "pointer",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: 5,
      border: "none",
      boxShadow: "none",
      zIndex: 10,
    }),
    option: (provided, state) => ({
      ...provided,
      color: "white",
      padding: "4px 20px",
      backgroundColor: state.isSelected ? "#e8604c" : "#313041",
      transition: "all 0.4s ease",
      cursor: "pointer",
      borderBottom:
        state.label === typeOptions[typeOptions.length - 1].label
          ? "none"
          : "0.5px solid #ffffff33",
      "&:hover": {
        backgroundColor: "#e8604c",
      },
      borderRadius:
        state.label === typeOptions[typeOptions.length - 1].label
          ? "0 0 8px 8px"
          : 0,
      fontSize: 16,
      fontWeight: 500,
    }),
    control: (base) => ({
      ...base,
      borderColor: "transparent",
      boxShadow: "none",
      borderRadius: "8px",
      "&:hover": {
        borderColor: "transparent",
      },
      padding: 14,
    }),
  };

export default function Form() {

    const [type, setType] = useState("City tour");
  const [ticket, setTicket] = useState("Adventure");
  const [startDate, setStartDate] = useState(new Date());

  const handleSelectType = ({ value }) => {
    setType(value);
  };

  const handleSelectTicket = ({ value }) => {
    setTicket(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      type,
      ticket,
      place: formData.get("place"),
      when: formData.get("when"),
      date: startDate,
    };
    console.log(data);
  };

  const { tagline, title, socials } = contactPage;

  return (
    <Row style={{justifyContent:'center'}}>
      <Col xl={4} lg={5}>
        <div className="contact-page__left">
          <div className="section-title">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        </div>
      </Col>
      <Col xl={5} lg={7}>
        <div className="tour-details-two__book-tours">
          <form
            onSubmit={handleSubmit}
            className="tour-details-two__sidebar-form"
            id="form"
          >
            <div className="tour-details-two__sidebar-form-input">
              <input type="text" placeholder="Your name" name="name" />
            </div>
            <div className="tour-details-two__sidebar-form-input">
              <input type="text" placeholder="Phone number" name="number" />
            </div>
            <div className="tour-details-two__sidebar-form-input">
              <input type="text" placeholder="Number of tourists (including children)" name="tourists" />
            </div>
            <div className="tour-details-two__sidebar-form-input">
                <input type="text" placeholder="Which tour?" name="tour" />
              {/* <Select
                name="tour"
                options={typeOptions}
                onChange={handleSelectType}
                styles={customStyle}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                }}
                placeholder="Which tour?"
                instanceId="tourTypeSelect10"
              /> */}
              {/* <div className="tour-details-two__sidebar-form-icon">
                <i className="fa fa-angle-down"></i>
              </div> */}
            </div>
            <div className="tour-details-two__sidebar-form-input">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Estimated tour date"
                id="datepicker"
              />
              {/* <div className="tour-details-two__sidebar-form-icon">
                <i className="fa fa-angle-down"></i>
              </div> */}
            </div>
            <div className="tour-details-two__sidebar-form-input">
              {/* <Select
                name="ticket"
                options={typeOptions}
                onChange={handleSelectTicket}
                styles={customStyle}
                isSearchable={false}
                components={{
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                }}
                placeholder="Choose Ticket"
                instanceId="tourTypeSelect15"
              />
              <div className="tour-details-two__sidebar-form-icon">
                <i className="fa fa-angle-down"></i>
              </div> */}
              <h3 className="form-text">If you have any kids please write inside comments, number of kids, and their age. (For example: 2 kids, 13 and 15 years old)</h3>
              <textarea className="form-comments" />
            </div>
            <button
              style={{ zIndex: 0 }}
              type="submit"
              className="thm-btn tour-details-two__sidebar-btn"
            >
              Submit the form
            </button>
          </form>
        </div>
      </Col>
    </Row>
  )
}