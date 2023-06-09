
import React, { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import FedEx_Freight from "./OTRT.jpg";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { addDoc, collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import firebase from "../firebase.config";
import emailjs from "@emailjs/browser";
import html2canvas from 'html2canvas';
import app from '../firebase.config';


const Table2 = () => {
  const db = getFirestore(app);
  const [order, setOrder] = useState("");
  const [date, setDate] = useState("");
  const [otrtreference, setOTRTReference] = useState("");
  const [billoflading, setBilloflading] = useState("");
  const [pickup, setPickup] = useState("");
  const [po, setPo] = useState("");
  const [carrier, setCarrier] = useState("");
  const [isChecked, setIsChecked] = useState([]);
  const [serviceType, setServiceType] = useState([]);
  const [shipFrom, setShipFrom] = useState([]);
  const [shipTo, setShipTo] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [totalPallets, setTotalPallets] = useState(0);
  const [totalCartons, setTotalCartons] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setIsChecked([
        ...isChecked, value
      ])
    }else {
      setIsChecked(isChecked.filter((e) => (e !== value)));
    }
  }
    const componentRef = useRef();
    const handlePrint = () => {
      const capture = document.querySelector('#demoss');
      html2canvas(capture).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF('p', 'in', 'a4');
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const canvasAspectRatio = canvas.width / canvas.height;
        const pdfAspectRatio = pageWidth / pageHeight;
        let width, height;
    
        if (canvasAspectRatio >= pdfAspectRatio) {
          width = pageWidth;
          height = canvas.height * (pageWidth / canvas.width);
        } else {
          height = pageHeight;
          width = canvas.width * (pageHeight / canvas.height);
        }
        doc.addImage(imgData, 'PNG', 0, 0, width, height);
        doc.save('ott.pdf');
  
        const storageRef = firebase.storage.ref;
        const pdfRef = storageRef.child('ott.pdf');
        const pdfData = new Blob([doc.output()], { type: 'application/pdf' });
    
        pdfRef.put(pdfData)
          .then(() => {
            const email = {
              to: "mukeshpathak345@gmail.com",
              message: {
                subject: 'Your OTT PDF',
                text: 'Please find the attached PDF file with your OTT data.',
                attachments: [
                  {
                    filename: 'ott.pdf',
                    contentType: 'application/pdf',
                    path: pdfRef.fullPath
                  }
                ]
              }
            };
            firebase.functions().httpsCallable('sendEmail')(email)
              .then(() => {
                console.log('Email sent successfully.');
              })
              .catch((error) => {
                console.error('Error sending email:', error);
              });
          })
          .catch((error) => {
            console.error('Error uploading PDF:', error);
          });
      });
    };


    const handleInputChange1 = (event, rowIndex, columnIndex) => {
      const value = parseInt(event.target.value, 10);
    
      const updatedTotalPallets = [...Array(6)].reduce((sum, _, index) => {
        const inputValue = parseInt(document.getElementById(`pallets-${index}`).value, 10);
        return sum + (index === rowIndex ? value : inputValue);
      }, 0);  
      setTotalPallets(updatedTotalPallets);
  
    };

    const handleInputChange2 = (event, rowIndex, columnIndex) => {
      const value = parseInt(event.target.value, 10);
    
      const updatedTotalCartons = [...Array(6)].reduce((sum, _, index) => {
        const inputValue = parseInt(document.getElementById(`cartons-${index}`).value, 10);
        return sum + (index === rowIndex ? value : inputValue);
      }, 0);
  
      setTotalCartons(updatedTotalCartons);
    };

    const handleInputChange3 = (event, rowIndex, columnIndex) => {
      const value = parseInt(event.target.value, 10);
    
          const updatedTotalWeight = [...Array(6)].reduce((sum, _, index) => {
        const inputValue = parseInt(document.getElementById(`weight-${index}`).value, 10);
        return sum + (index === rowIndex ? value : inputValue);
      }, 0);
  
      setTotalWeight(updatedTotalWeight);
    };

    const handleInputChange4 = (event, rowIndex, columnIndex) => {

    };


  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted!");
    const id = Math.floor(100000 + Math.random() * 90000).toString();

    console.log("Input values:", inputValues);
    const orders = {
      name: order,
      date: date,
      otrtreference: otrtreference,
      id: id,
      billoflading: billoflading,
      pickup: pickup,
      po: po,
      carrier: carrier,
      isChecked: isChecked,
      serviceType: serviceType,
      shipFrom: shipFrom,
      shipTo: shipTo,
    };

    if (order) {
      console.log(orders);
      setDoc(doc(db, "order_data", id), orders);
    }
    // const pdf = new jsPDF();
    // const tableData = Object.entries(orders).map(([key, value]) => [key, value]);
    // pdf.autoTable({
    //   head: [["Field", "Value"]],
    //   body: tableData,
    // });
    // pdf.save("form.pdf");
    // setAttachment(pdf);


    // Send email
    const templateParams = {
      name: order,
      date: date,
      otrtreference: otrtreference,
      billoflading: billoflading,
      pickup: pickup,
      id: id,
      po: po,
      carrier: carrier,
      isChecked: isChecked,
      serviceType: serviceType,
      shipFrom: shipFrom,
      shipTo: shipTo,
      

    };

    try {
      await emailjs.send(
        "service_67sdcul",
        "template_woh3a2i",
        templateParams,
        "xnoXqBMQa8cUpnPHk",
      );
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
   
    // console.log("Input values:", values); 
  };

  // Rest of your code

  return (
    <div>
      <form  id="demoss" onSubmit={handleSubmit}>
      <div ref={componentRef} style={{width: '100%'}}>
        <table
          style={{
            border: "1px solid #482e92",
            width: "100%",
            padding: "0px",
            borderSpacing: "none"
          }}
          cellSpacing="0"
          cellPadding="0"
        >
          <tr>
            <td rowspan="2" className="fedex-logo">
              <img src={FedEx_Freight} />
            </td>
            <td className="date-div">
              <b>Date</b>
              <br />
              <input
                name="date"
                type="date"
                style={{
                  width: "calc(100% - 0px)",
                  border: "0px",
                  backgroundColor: "#f1f4ff",
                  padding: "6px 0px"
                }}
                onChange={event => {
                  setDate(event.target.value);
                }}
              />
            </td>

            <td className="date-div">
              <b>OTRT Reference: </b>
              <br />
              <input
                name="otrtreference"
                type="text"
                style={{
                  width: "calc(100% - 0px)",
                  border: "0px",
                  backgroundColor: "#f1f4ff",
                  padding: "6px 0px"
                }}
                onChange={event => {
                  setOTRTReference(event.target.value);
                }}
              />
            </td>
            <td className="date-div">
              <b>Bill of Lading:</b>
              <br />
              <input
                name="billoflading"
                type="text"
                style={{
                  width: "calc(100% - 0px)",
                  border: "0px",
                  backgroundColor: "#f1f4ff",
                  padding: "6px 0px"
                }}
                onChange={event => {
                  setBilloflading(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="date-div">
              <b>Pickup: </b>
              <br />
              <input
                name="pickup"
                type="text"
                style={{
                  width: "calc(100% - 0px)",
                  border: "0px",
                  backgroundColor: "#f1f4ff",
                  padding: "6px 0px"
                }}
                onChange={event => {
                  setPickup(event.target.value);
                }}
              />
            </td>

            <td className="date-div">
              <b>PO: </b>
              <br />
              <input
                name="po"
                type="text"
                style={{
                  width: "calc(100% - 0px)",
                  border: "0px",
                  backgroundColor: "#f1f4ff",
                  padding: "6px 0px"
                }}
                onChange={event => {
                  setPo(event.target.value);
                }}
              />
            </td>
            <td className="date-div">
              <b>Order:</b>
              <br />
              <input
                name="order"
                type="text"
                style={{
                  width: "calc(100% - 0px)",
                  border: "0px",
                  backgroundColor: "#f1f4ff",
                  padding: "6px 0px"
                }}
                onChange={event => {
                  setOrder(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td />
            <td className="required-service">
              <b>Freight Charges: Please select a service type</b>
              <br />
              <label>
                <input
                name={isChecked}
                  onChange={handleChange}
                  type="checkbox"
                  value="Prepaid"
                />
                Prepaid
              </label>
              <br />
              <label>
                <input 
                name={isChecked}
				type="checkbox" 
        onChange={handleChange}
                value="3rd Party"
				/>
                3rd Party
              </label>
              <br />
              <label>
                <input 
				name="isChecked"
				type="checkbox" 
        onChange={handleChange}
                value="Collect"
				/>
                Collect
              </label>
            </td>
            <td className="required-service">
              <b>Carrier: </b>
              <br />
              <select
                value={carrier}
                onChange={event => {
                  setCarrier(event.target.value);
                }}
                style={{ marginTop: "15px" }}
              >
                <option value="">Select A Carrier</option>
                <option value="FedEx Freight">FedEx Freight</option>
                <option value="A Duie Pyle">A Duie Pyle</option>
                <option value="YRC">YRC</option>
                <option value="ODFL">ODFL</option>
              </select>
            </td>
            <td className="required-service">
              <b>Service Type: </b>
              <br />
              <select style={{ marginTop: "15px" }} value={serviceType}
                onChange={event => {
                  setServiceType(event.target.value);
                }}>
                <option value="">Select A Service Type</option>
                <option value="Economy Freight">Economy Freight</option>
                <option value="Priority Freight">Priority Freight</option>
              </select>
            </td>
          </tr>
        </table>
        <table className="table-full" cellSpacing="0" cellPadding="0">
          <tr>
            <td
              className=""
              style={{
                marginBottom: "20px",
                height: "50px",
                width: "calc(100% - 0px)",
                border: "1px solid #3e3e3e",
                padding: "6px 0px",
                color: "#3e3e3e"
              }}
            >
              <span style={{fontSize: "20px"}}>Ship From :</span>
              <br />
              <select style={{ marginTop: "15px", width: "100%" }} value={shipFrom}
                onChange={event => {
                  setShipFrom(event.target.value)
                  }}>
                <option value="">Select An Address</option>
                <option value="On the Right Track Systems, Inc.174 Hudson Street New York, NY
                  – 10013">
                  On The Right Track Systems, Inc.174 Hudson Street New York, NY
                  – 10013
                </option>
                <option value="On the Right Track Systems, Inc.140 Broad StreetMontgomery, PA
                  – 17752">
                  On The Right Track Systems, Inc.140 Broad StreetMontgomery, PA
                  – 17752
                </option>
              </select>
            </td>
          </tr>
        </table>

        <table className="table-full" cellSpacing="0" cellPadding="0">
  <tbody>
    <tr>
      <td className="row-half-100" colSpan="5">
        <span>Ship To: </span>
      </td>
    </tr>
    <tr>
      <td className="date-div">
        <b>Company name: </b>
        <br />
        <input
          name="pickup"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setPickup(event.target.value);
          }}
        />
      </td>
      <td className="date-div">
        <b>Street: </b>
        <br />
        <input
          name="po"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setPo(event.target.value);
          }}
        />
      </td>
      <td className="date-div">
        <b>City:</b>
        <br />
        <input
          name="order"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setOrder(event.target.value);
          }}
        />
      </td>
      <td className="date-div">
        <b>State:</b>
        <br />
        <input
          name="order"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setOrder(event.target.value);
          }}
        />
      </td>
      <td className="date-div">
        <b>Zip:</b>
        <br />
        <input
          name="order"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setOrder(event.target.value);
          }}
        />
      </td>
    </tr>
  </tbody>
</table>

<table className="table-full" cellSpacing="0" cellPadding="0">
  <tbody>
    <tr>
      <td className="row-half-100" colSpan="5">
        <span>Bill Freight Charges To: </span>
      </td>
    </tr>
    <tr>
      <td className="date-div">
        <b>Company name: </b>
        <br />
        <input
          name="pickup"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setPickup(event.target.value);
          }}
        />
      </td>
      <td className="date-div">
        <b>Street: </b>
        <br />
        <input
          name="po"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setPo(event.target.value);
          }}
        />
      </td>
      <td className="date-div">
        <b>City:</b>
        <br />
        <input
          name="order"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setOrder(event.target.value);
          }}
        />
      </td>
      <td className="date-div">
        <b>State:</b>
        <br />
        <input
          name="order"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setOrder(event.target.value);
          }}
        />
      </td>
      <td className="date-div">
        <b>Zip:</b>
        <br />
        <input
          name="order"
          type="text"
          style={{
            width: "100%",
            border: "0px",
            backgroundColor: "#f1f4ff",
            padding: "6px 0px"
          }}
          onChange={event => {
            setOrder(event.target.value);
          }}
        />
      </td>
    </tr>
  </tbody>
</table>
        
<table className="table-full" cellSpacing="0" cellPadding="0">
  <tbody>
    <tr>
      <td className="row-half-100" style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "bold" }}>Shipping Dims:</span>
        <br />
      </td>
    </tr>
  </tbody>
</table>


<div>
<table style={{ width: '100%', backgroundColor: '##a8b72f' }} cellSpacing="0" cellPadding="0">
        <thead>
          <tr>
            <th className="row-half-8" style={{ textAlign: 'center', backgroundColor: '#a8b72f', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px' }}>
              <span>Pallets</span>
            </th>
            <th className="row-half-8" style={{ textAlign: 'center', backgroundColor: '#a8b72f', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px'  }}>
              <span>Cartons</span>
            </th>
            <th className="row-half-3" style={{ textAlign: 'center', backgroundColor: '#a8b72f', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px'  }}>
              <span>Weight (lbs.)</span>
            </th>
            <th className="row-half-4 orange-4" style={{ textAlign: 'center', backgroundColor: '#a8b72f', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px'  }}>
              <span>Size (in)</span>
            </th>
            <th className="row-half-46" style={{ textAlign: 'center', backgroundColor: '#a8b72f' , verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px'  }}>
              <span>Description</span>
            </th>
            <th className="row-half-10" style={{ textAlign: 'center', backgroundColor: '##a8b72f', verticalAlign: 'middle', paddingTop: '20px', paddingBottom: '20px'  }}>
              <span>Class</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="row-half-8 blue-border">
                <input
                  type="text"
                  className="same-input"
                  style={{
                  width: '134px'}}
                  defaultValue={0}
                  id={`pallets-${rowIndex}`}
                  onChange={(e) => handleInputChange1(e, rowIndex, 0)}
                />
              </td>
              <td className="row-half-8 blue-border">
                <input
                  type="text"
                  className="same-input"
                  style={{
                  width: '134px'}}
                  defaultValue={0}
                  id={`cartons-${rowIndex}`}
                  onChange={(e) => handleInputChange2(e, rowIndex, 1)}
                />
              </td>
              <td className="row-half-8 blue-border">
                <input
                  type="text"
                  className="same-input"
                  style={{
                  width: '100px'}}
                  defaultValue={0}
                  id={`weight-${rowIndex}`}
                  onChange={(e) => handleInputChange3(e, rowIndex, 2)}
                />
              </td>
              <td className="row-half-8 blue-border">
                <input
                  type="text"
                  className="same-input"
                  onChange={(e) => handleInputChange4(e, rowIndex, 3)}
                />
              </td>
              <td className="row-half-46 blue-border">
              <select
                style={{ width: '100%' }}
                onChange={(event) => {
                  const selectElement = event.target;
                  const customInput = document.getElementById('custom-input');

                  if (selectElement.value === 'custom') {
                    if (!customInput) {
                      const input = document.createElement('input');
                      input.id = 'custom-input';
                      input.type = 'text';
                      input.style.width = '100%';
                      selectElement.parentNode.appendChild(input);
                    }
                  } else {
                    if (customInput) {
                      customInput.parentNode.removeChild(customInput);
                    }
                  }
                }}
              >
                <option value="">Select</option>
                <option value="Disposable Curtains">Disposable Curtains</option>
                <option value="Hospital Track">Hospital Track</option>
                <option value="custom">Custom</option>
              </select>
              </td>
              <td className="row-half-10 blue-border" >
              <select
                style={{ width: '100%' }}
                onChange={(event) => {
                  const selectElement = event.target;
                  const customInput = document.getElementById('class-custom-input');

                  if (selectElement.value === 'custom') {
                    if (!customInput) {
                      const input = document.createElement('input');
                      input.id = 'class-custom-input';
                      input.type = 'text';
                      input.style.width = '100%';
                      selectElement.parentNode.appendChild(input);
                    }
                  } else {
                    if (customInput) {
                      customInput.parentNode.removeChild(customInput);
                    }
                  }
                }}
              >
                <option value="">Select</option>
                <option value="85">85</option>
                <option value="125">125</option>
                <option value="custom">Custom</option>
              </select>
              </td>
            </tr>
          ))}
          <tr>
      <td className="row-half-8 blue-border">
      <input
                type="number"
                style={{
                  marginTop: '13px',
                  width: '134px',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                value={totalPallets}
                readOnly
              />
              </td>
              <td className="row-half-8 blue-border">
              <input
                type="number"
                style={{
                  marginTop: '13px',
                  width: '134px',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                value={totalCartons}
                readOnly
              />
              </td>
              <td className="row-half-8 blue-border">
              <input
                type="number"
                style={{
                  marginTop: '13px',
                  width: '108px',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                value={totalWeight}
                readOnly
              />
              </td>
              <td className="row-half-8 blue-border" colSpan="3">
              </td>
          
    </tr>
       
        </tbody>
      </table>
    </div>
        <table className="table-full" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className="row-half-100">
                <span>Special Instructions</span>
                <br />
                <input
                  name="specialInstructions"
                  type="text"
                  style={{
                    height: "50px",
                    width: "calc(100% - 0px)",
                    border: "0px",
                    backgroundColor: "#f1f4ff",
                    padding: "6px 0px"
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table
          style={{
            border: "1px solid #482e92",
            width: "100%",
            padding: "0px",
            borderSpacing: "none"
          }}
          cellSpacing="0"
          cellPadding="0"
        >
          <tr>
            <td />
            <td className="required-service">
              <b>Signature/Date</b>
              <br />
              <br />
              <u
                style={{
                  width: "calc(100% - 120px)",
                  marginLeft: "5px",
                  height: "10px",
                  borderBottom: "2px solid #452b93",
                  display: "inline-block"
                }}
              />
              <br />
              <br />
              <b style={{ color: "#452b93" }}>
                This is to certify that the above named materials
                <br /> classified packaged, marked, and labeled, and
                <br /> are in proper condition for transportation
                <br /> according to the applicable regulation of DOT.
              </b>
            </td>

            <td className="required-service">
              <b>Trailer Loaded: </b>
              <br />
              <label>
                <input type="checkbox" value="By Shipper" />
                By Shipper
              </label>
              <br />
              <label>
                <input type="checkbox" value="By Driver" />
                By Driver
              </label>
            </td>
            <td className="required-service">
              <b>Freight Counted:: </b>
              <br />
              <label>
                <input type="checkbox" value="By Shipper" />
                By shipper
              </label>
              <br />
              <label>
                <input type="checkbox" value="By Driver/Pallets Said To Contain" />
                By driver/pallets said to contain
              </label>
              <br />
              <label>
                <input type="checkbox" value="By Driver/Pieces" />
                By driver/pieces
              </label>
            </td>
            <td className="required-service">
              <b>Carrier Signature/Picked Date</b>
              <br />
              <br />
              <u
                style={{
                  width: "calc(100% - 120px)",
                  marginLeft: "5px",
                  height: "10px",
                  borderBottom: "2px solid #452b93",
                  display: "inline-block"
                }}
              />
              <br />

              <br />
              <b style={{ color: "#452b93" }}>
                Carrier acknowledges receipt packages and required <br />
                placards ,Carrier certifies emergency response information
                <br />
                was made available and/or carrier has the DOT emergency <br />
                response guidebook or euivalent documantation in the
                <br />
                vehical. Property described above is received in good order,
                <br />
                except as noted.
              </b>
            </td>
          </tr>

        </table>
        </div>
        <button style={{display: "none"}}type="submit" onClick={handleSubmit} >
          Submit
        </button>
        <button onClick={handlePrint}>Submit</button>
      </form>
    </div>
  );
};

export default Table2;
