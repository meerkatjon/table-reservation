import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
      setDate(e);
      props.dispatch(e);

  }

    function handleSubmit(e){
        e.preventDefault();
        props.submitForm(e);
    }
    

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="formField">
          <div>
             <label htmlFor="fName">First Name</label> <br></br>
             <input
                type="text"
                id="fName"
                placeholder="First Name"
                required
                minLength={2}
                maxLength={50}
                value={fName}
                onChange={(e) => setFName(e.target.value)}></input>
            </div>
            <div>
            <label htmlFor="lName">Last Name</label> <br></br>
            <input
                type="text"
                id="lName"
                placeholder="Last Name"
                minLength={2}
                maxLength={50}
                value={lName}
                onChange={(e) => setLName(e.target.value)}>
             </input>
            </div>
            <div>
            <label htmlFor="email">Email</label> <br></br>
            <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                required
                minLength={4}
                maxLength={200}
                onChange={(e) => setEmail(e.target.value)}>
                </input>
            </div>
            <div>
            <label htmlFor="phone">Phone Number</label> <br></br>
            <input
                type="tel"
                id="phone"
                placeholder="(xxx)-xxx-xxxx"
                value={tel}
                required
                minLength={10}
                maxLength={25}
                onChange={(e) => setTel(e.target.value)}>

                </input>
            </div>
            <div>
              <label htmlFor="date">Select Date</label>
              <input 
                    type="date" 
                    id="date" 
                    required
                    value={date} 
                    onChange={(e) => handleDateChange(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="time">Choose Time</label>
              <select 
                    id="time" 
                    value={times} 
                    required
                    onChange={(e) => setTimes(e.target.value)} >
                <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="guests">Number of Guests</label>
              <input 
                type="number"
                id="guests" 
                placeholder={0}
                value={guests}
                min={1} 
                max={10}
                onChange={(e) => {setGuests(e.target.value)}}
                required>
                </input>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
              </select>
            </div>
            <div className="btnReceive">
              <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};


export default BookingForm;