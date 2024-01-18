import "./header.css"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
const Header = () => {
  const [openDate, setOpenDate]= useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    }
  ]);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Smeštaj</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Letovi</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Iznajmljivanje automobila</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Atrakcije</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi od/do aerodroma</span>
            </div>
        </div>
        <h1 className="headerTitle">"Istražujte više, trošite manje!"</h1>
        <p className="headerDesc">
        Iskoristite sjajne ponude na našoj aplikaciji za rezervaciju i putujte pametno. Vaše avanture su na dohvat ruke, a uštede čekaju da budu iskusene. 
        Pronađite idealan smeštaj i uživajte u putovanjima bez brige o budžetu.
        </p>
        <button className="headerBtn">Ulogujte se / Registrujte se</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} classname="headerIcon" />
                <input 
                type="text" 
                placeholder="Gde idete?" 
                className="headerSearchInput"
                />
          </div>
          <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} classname="headerIcon" />
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} do ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                classname="date"
          />}
          </div>
          <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} classname="headerIcon" />
                <span className="headerSearchText">2 odrasla 2 dece 1 jedinica</span>
          </div>
          <div className="headerSearchItem">
                <button className="headerBtn">Traži</button>
          </div>
        </div>
           
      </div>
    </div>
  )
}

export default Header