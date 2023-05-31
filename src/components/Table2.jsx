import React, { useState, useRef } from 'react'
import FedEx_Freight from './OTRT.jpg'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore'
import { app } from '../firebase.config'
import emailjs from '@emailjs/browser'

const Table2 = () => {
  const db = getFirestore(app)
  const [order, setOrder] = useState('')
  const [date, setDate] = useState('')
  const [otrtreference, setOTRTReference] = useState('')
  const [billoflading, setBilloflading] = useState('')
  const [pickup, setPickup] = useState('')
  const [po, setPo] = useState('')
  const [carrier, setCarrier] = useState('')
  const [isChecked, setIsChecked] = useState([])
  const [trailerLoaded, setTrailerLoaded] = useState([])
  const [freightCounted, setFreightCounted] = useState([])
  const [serviceType, setServiceType] = useState([])
  const [shipFrom, setShipFrom] = useState([])
  const [shipTo, setShipTo] = useState([])
  const [specialInstructions, setSpecialInstructions] = useState([])
  const [totalHU, setTotalHU] = useState([])
  const [billFreightChargesTo, setBillFreightChargesTo] = useState([])
  const [shippingDims, setShippingDims] = useState([])


  const handleChange = (e) => {
    const value = e.target.value
    const checked = e.target.checked
    console.log(value, checked)
    if (checked) {
      setIsChecked([...isChecked, value])
    } else {
      setIsChecked(isChecked.filter((e) => e !== value))
    }
  }
  const handleChanges = (e) => {
    const value = e.target.value
    const cchecked = e.target.checked
    console.log(value, cchecked)
    if (cchecked) {
      setTrailerLoaded([...trailerLoaded, value])
    } else {
      setTrailerLoaded(trailerLoaded.filter((e) => e !== value))
    }
  }
  const handleChangess = (e) => {
    const value = e.target.value
    const ccchecked = e.target.checked
    console.log(value, ccchecked)
    if (ccchecked) {
      setFreightCounted([...freightCounted, value])
    } else {
      setFreightCounted(freightCounted.filter((e) => e !== value))
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted!')
    const id = Math.floor(100000 + Math.random() * 90000).toString()

    const orders = {
      ID: id,
      Name: order,
      Date: date,
      "OTRT Reference": otrtreference,
      "Bill Of Landing": billoflading,
      Pickup: pickup,
      PO: po,
      Carrier: carrier,
      "Freight Charges": isChecked,
      "Service Type": serviceType,
      "Ship From": shipFrom,
      "Ship To": shipTo,
      "Trailer Loaded": trailerLoaded,
      "Freight Counted": freightCounted,
      "Special Instructions": specialInstructions,
      "Bill Freight Charges To": billFreightChargesTo,
      "Shipping Dims": shippingDims,
      "Total HU": totalHU,
    }

    if (order) {
      console.log(orders)
      setDoc(doc(db, 'order_data', id), orders)
    }
    const pdf = new jsPDF()
    const tableData = Object.entries(orders).map(([key, value]) => [key, value])
    pdf.autoTable({
      head: [['Name', 'Client Details']],
      body: tableData,
    });
    const pdfData = pdf.output('datauristring');
    const attachment = {
      data: pdfData,
      fileName: 'OnTheRightTrack.pdf',
    };

    // Send email
    const templateParams = {
      ID: id,
      Name: order,
      Date: date,
      "OTRT Reference": otrtreference,
      "Bill Of Landing": billoflading,
      Pickup: pickup,
      PO: po,
      Carrier: carrier,
      "Freight Charges": isChecked,
      "Service Type": serviceType,
      "Ship From": shipFrom,
      "Ship To": shipTo,
      "Trailer Loaded": trailerLoaded,
      "Freight Counted": freightCounted,
      "Special Instructions": specialInstructions,
      "Bill Freight Charges To": billFreightChargesTo,
      "Shipping Dims": shippingDims,
      "Total HU": totalHU,
    }

    try {
      await emailjs.send(
        'service_67sdcul',
        'template_woh3a2i',
        templateParams,
        'xnoXqBMQa8cUpnPHk',
        attachment
      )
      console.log('Email sent successfully!')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  // Rest of your code

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table
          style={{
            border: '1px solid #482e92',
            width: '100%',
            padding: '0px',
            borderSpacing: 'none',
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
                  width: 'calc(100% - 0px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                onChange={(event) => {
                  setDate(event.target.value)
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
                  width: 'calc(100% - 0px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                onChange={(event) => {
                  setOTRTReference(event.target.value)
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
                  width: 'calc(100% - 0px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                onChange={(event) => {
                  setBilloflading(event.target.value)
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
                  width: 'calc(100% - 0px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                onChange={(event) => {
                  setPickup(event.target.value)
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
                  width: 'calc(100% - 0px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                onChange={(event) => {
                  setPo(event.target.value)
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
                  width: 'calc(100% - 0px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                onChange={(event) => {
                  setOrder(event.target.value)
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
                  name={isChecked}
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
                onChange={(event) => {
                  setCarrier(event.target.value)
                }}
                style={{ marginTop: '15px' }}
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
              <select
                style={{ marginTop: '15px' }}
                value={serviceType}
                onChange={(event) => {
                  setServiceType(event.target.value)
                }}
              >
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
                marginBottom: '20px',
                height: '50px',
                width: 'calc(100% - 0px)',
                border: '1px solid #452b93',
                padding: '6px 0px',
                color: '#452b93',
              }}
            >
              <span>Ship From :</span>
              <br />
              <select
                style={{ marginTop: '15px', width: '100%' }}
                value={shipFrom}
                onChange={(event) => {
                  setShipFrom(event.target.value)
                }}
              >
                <option value="">Select An Address</option>
                <option
                  value="On the Right Track Systems, Inc.174 Hudson Street New York, NY
                  – 10013"
                >
                  On the Right Track Systems, Inc.174 Hudson Street New York, NY
                  – 10013
                </option>
                <option
                  value="On the Right Track Systems, Inc.140 Broad StreetMontgomery, PA
                  – 17752"
                >
                  On the Right Track Systems, Inc.140 Broad StreetMontgomery, PA
                  – 17752
                </option>
              </select>
            </td>
          </tr>
        </table>

        <table className="table-full" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className="row-half-100">
                <span>Ship To: </span>
                <br />
                <input
                  name="shipTo"
                  type="text"
                  style={{
                    height: '50px',
                    width: 'calc(100% - 0px)',
                    border: '0px',
                    backgroundColor: '#f1f4ff',
                    padding: '6px 0px',
                  }}
                  onChange={(event) => {
                    setShipTo(event.target.value)
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table-full" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className="row-half-100">
                <span>Bill Freight Charges To: </span>
                <br />
                <input
                  name='billFreightChargesTo'
                  type="text"
                  style={{
                    height: '50px',
                    width: 'calc(100% - 0px)',
                    border: '0px',
                    backgroundColor: '#f1f4ff',
                    padding: '6px 0px',
                  }}
                  onChange={(event) => {
                    setBillFreightChargesTo(event.target.value)
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table-full" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td className="row-half-100">
                <span>Shipping Dims:</span>
                <br />
                <input
                  name='shippingDims'
                  type="text"
                  style={{
                    height: '50px',
                    width: 'calc(100% - 0px)',
                    border: '0px',
                    backgroundColor: '#f1f4ff',
                    padding: '6px 0px',
                  }}
                  onChange={(event) => {
                    setShippingDims(event.target.value)
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table
          style={{ width: '100%', backgroundColor: '#452b93' }}
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td className="row-half-8">
              <span>Pallets</span>
            </td>
            <td className="row-half-8">
              <span>Cartons</span>
            </td>
            <td className="row-half-3">
              <span>Weight (lbs.)</span>
            </td>
            <td className="row-half-4 orange-4">
              <span>Size (in)</span>
            </td>
            <td className="row-half-46">
              <span>Description</span>
              <select style={{ width: '100%' }}>
                <option value="">-- Select option --</option>
                <option value="Disposable Curtains">Disposable Curtains</option>
                <option value="Hospital Track">Hospital Track</option>
                <option value="custom">Custom</option>
              </select>
            </td>
            <td className="row-half-10">
              <span>Class</span>
              <select style={{ width: '100%' }}>
                <option value="">-- Select option --</option>
                <option value="85">85</option>
                <option value="125">125</option>
                <option value="custom">Custom</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-46 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-10 blue-border">
              <input type="text" className="same-input" />
            </td>
          </tr>
          <tr>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-46 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-10 blue-border">
              <input type="text" className="same-input" />
            </td>
          </tr>
          <tr>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-46 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-10 blue-border">
              <input type="text" className="same-input" />
            </td>
          </tr>
          <tr>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-46 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-10 blue-border">
              <input type="text" className="same-input" />
            </td>
          </tr>
          <tr>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-46 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-10 blue-border">
              <input type="text" className="same-input" />
            </td>
          </tr>
          <tr>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-8 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-4 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-46 blue-border">
              <input type="text" className="same-input" />
            </td>
            <td className="row-half-10 blue-border">
              <input type="text" className="same-input" />
            </td>
          </tr>
        </table>
        <table className="table-full" cellSpacing="0" cellPadding="0">
          <tr>
            <td className="row-half-20">
              <span>TOTAL H/U:</span>
              <input
                name='totalHU'
                type="text"
                style={{
                  marginTop: '13px',
                  width: 'calc(100% - 83px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
                onChange={(event) => {
                    setTotalHU(event.target.value)
                }}
                
              />
            </td>
            <td className="row-half-20">
              <input
                type="text"
                style={{
                  marginTop: '13px',
                  width: 'calc(100% - 83px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
              />
            </td>
            <td className="row-half-20">
              <input
                type="text"
                style={{
                  marginTop: '13px',
                  width: 'calc(100% - 83px)',
                  border: '0px',
                  backgroundColor: '#f1f4ff',
                  padding: '6px 0px',
                }}
              />
            </td>
          </tr>
        </table>
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
                    height: '50px',
                    width: 'calc(100% - 0px)',
                    border: '0px',
                    backgroundColor: '#f1f4ff',
                    padding: '6px 0px',
                  }}
                  onChange={(event) => {
                    setSpecialInstructions(event.target.value)
                }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <table
          style={{
            border: '1px solid #482e92',
            width: '100%',
            padding: '0px',
            borderSpacing: 'none',
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
                  width: 'calc(100% - 120px)',
                  marginLeft: '5px',
                  height: '10px',
                  borderBottom: '2px solid #452b93',
                  display: 'inline-block',
                }}
              />
              <br />
              <br />
              <b style={{ color: '#452b93' }}>
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
                <input
                  name={trailerLoaded}
                  onChange={handleChanges}
                  type="checkbox"
                  value="By Shipper"
                />
                By Shipper
              </label>
              <br />
              <label>
                <input  
                  name={trailerLoaded}
                  onChange={handleChanges}
                  type="checkbox" 
                  value="By Driver" />
                By Driver
              </label>
            </td>
            <td className="required-service">
              <b>Freight Counted: </b>
              <br />
              <label>
                <input  
                  name={freightCounted}
                  onChange={handleChangess}
                  type="checkbox" 
                  value="By Shipper" />
                By shipper
              </label>
              <br />
              <label>
                <input
                 name={freightCounted}
                  onChange={handleChangess}
                  type="checkbox"
                  value="By Driver/Pallets Said To Contain"
                />
                By driver/pallets said to contain
              </label>
              <br />
              <label>
                <input  
                  name={freightCounted}
                  onChange={handleChangess}
                  type="checkbox" 
                  value="By Driver/Pieces" />
                By driver/pieces
              </label>
            </td>
            <td className="required-service">
              <b>Carrier Signature/Picked Date</b>
              <br />
              <br />
              <u
                style={{
                  width: 'calc(100% - 120px)',
                  marginLeft: '5px',
                  height: '10px',
                  borderBottom: '2px solid #452b93',
                  display: 'inline-block',
                }}
              />
              <br />

              <br />
              <b style={{ color: '#452b93' }}>
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
        {/* <input type="text" name="email_from" id="emailFrom" className="email__from" placeholder="person@example.com" /> */}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Table2
