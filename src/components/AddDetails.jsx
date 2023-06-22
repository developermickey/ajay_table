import React from 'react'

const AddDetails = () => {
  return (
    <>
    <table className="table-full" cellSpacing="0" cellPadding="0">
      <tr>
        <td className="row-half-20">
          <span>TOTAL H/U:</span>
          <input type="text" style={{ marginTop: "13px", width: "calc(100% - 83px)", border: "0px", backgroundColor: "#f1f4ff", padding: "6px 0px" }} />
        </td>
        <td className="row-half-80">
          <span> <span class="star">&#9734;</span> MARK “X” OR “RQ” IN THE HM COLUMN TO DESIGNATE HAZARDOUS MATERIALS OR REPORTABLE QUANTITY AS DEFINED IN DOT REGULATIONS.</span>
        </td>
      </tr>
    </table>
    <table className="table-full" cellSpacing="0" cellPadding="0">
      <tr>
        <td className="row-half-50 font-size-14px">
          <span>HM EMERGENCY CONTACT PHONE NUMBER</span>
          <input type="text" style={{ width: "calc(100% - 324px)", border: "0px", backgroundColor: "#f1f4ff", padding: "11px 0px" }} />
          <br />
          <span style={{ marginTop: "8px", fontSize: "14px" }}>
            <b>CUSTOMER REGISTERED W/EMERGENCY RESPONSE INFO. PROVIDER or CONTRACT #</b>
          </span>
          <input type="text" style={{ width: "calc(100% - 0px)", border: "0px", backgroundColor: "#f1f4ff", padding: "10px 0px" }} />
          <span>
            NOTE (1) Where the rate and carrier’s liability for loss or damage may be dependent on value, shippers must state specifically in writing the agreed or declared value of the property as follows: “The agreed or declared value of the property is specifically stated by the shipper to be not exceeding
            <input type="text" style={{ width: "calc(100% - 85%)", border: "0px", backgroundColor: "#f1f4ff", padding: "5px 0px", borderBottom: "2px solid #452b93" }} />
            per
            <input type="text" style={{ width: "calc(100% - 85%)", border: "0px", backgroundColor: "#f1f4ff", padding: "5px 0px", borderBottom: "2px solid #452b93" }} />
            "</span>
          <br />
           <span>Note (2) liability limitation for loss or damage on this shipment shall be applicable as provided by contract
or in the current NMFC or this carrier’s governing tariffs. See FXF 100 Series Rules Tariff for complete
limited liability provisions. Carrier’s maximum standard liability is limited to $25 per pound per package
for NEW articles and $.50 per pound per package (or its equivalent in Mexican Pesos (MXN) or Canadian
Dollars (CAD), at the rate of exchange which is in effect at the place and on the date of shipment) for USED
or RECONDITIONED articles. In no case shall carrier liability exceed $100,000 per occurrence (or its equivalent
in MXN or CAD at the rate of exchange which is in effect at the place and on the date of shipment) for NEW
articles or $10,000 per occurrence (or its equivalent in MXN or CAD at the rate of exchange which is in effect
at the place and on the date of shipment) for USED or RECONDITIONED articles. For availability and limits
of excess liability coverage and applicable rates and charges, please refer to FXF 100 Series Rules Tariff. Not
selecting an additional coverage option is considered to be a waiver of same and standard liability coverage
will apply.</span>
<span>
        <input type="checkbox" />
        Articles are NEW, and require Excess Liability Coverage in the amount of
        <input
          type="text"
          style={{ width: "calc(100% - 85%)", border: "0px", backgroundColor: "#f1f4ff", padding: "5px 0px", borderBottom: "2px solid #452b93" }}
        />
        <span> USD </span>
        <span> CAD </span>
        <span> MXN </span>
        <span> per </span>
        <span> lb. or </span>
        <span> kg. </span>
        <span> Additional charges will apply. </span>
      </span>
      <br />
      <span>
        <input type="checkbox" />
        Articles are USED or RECONDITIONED and require Excess Liability Coverage. Additional charges will apply.
      </span>
      <br />
      <span>
        NOTE (3) Commodities requiring special or additional care or attention in handling or stowing must be so
        marked and packaged as to ensure safe transportation with ordinary care. See Sec. 2(e) of NMFC Item 360.
      </span>
        </td>
        <td className="row-half-50">
  <span className="blue-strip-text-blue">FOR INTERNATIONAL SHIPMENTS INDICATE BROKER NAME, FAX AND PHONE NUMBERS</span>
  <table style={{ width: '100%' }} cellSpacing="0" cellPadding="0">
    <tr>
      <td style={{ verticalAlign: 'top', border: '1px solid #452b93', width: '60%', borderTop: '0' }}>
        <span style={{ fontSize: '14px', fontWeight: '700' }}>EEI/SED Number or Exception</span>
        <input type="text" style={{ width: 'calc(100% - 199px)', border: '0', backgroundColor: '#f1f4ff', padding: '10px 0' }} />
      </td>
      <td style={{ verticalAlign: 'top', border: '1px solid #452b93', width: '40%', borderTop: '0' }}>
        <span style={{ fontSize: '14px', fontWeight: '700' }}>Phone #</span>
        <input type="text" style={{ width: 'calc(100% - 58px)', border: '0', backgroundColor: '#f1f4ff', padding: '10px 0' }} />
      </td>
    </tr>
    <tr>
      <td style={{ verticalAlign: 'top', border: '1px solid #452b93', width: '60%', borderTop: '0' }}>
        <span style={{ fontSize: '14px', fontWeight: '700' }}>Broker Name</span>
        <input type="text" style={{ width: 'calc(100% - 88px)', border: '0', backgroundColor: '#f1f4ff', padding: '10px 0' }} />
      </td>
      <td style={{ verticalAlign: 'top', border: '1px solid #452b93', width: '40%', borderTop: '0' }}>
        <span style={{ fontSize: '14px', fontWeight: '700' }}>FAX #</span>
        <input type="text" style={{ width: 'calc(100% - 42px)', border: '0', backgroundColor: '#f1f4ff', padding: '10px 0' }} />
      </td>
    </tr>
  </table>

   <span className="blue-strip-text-blue">FOR FREIGHT COLLECT SHIPMENTS</span>
<span>Subject to Section 7 of conditions of applicable Bill of Lading. If this shipment is to be delivered to the consignee,without recourse on the consignor, the consignor shall sign the following statement. The carrier may decline tomake delivery of this shipment without payment of freight and all other lawful charges.
  </span>
 <span>Consignor Signature</span>
  <u style={{ width: "calc(100% - 158px)", marginLeft: "5px", height: "20px", borderBottom: "2px solid #452b93", display: "inline-block" }}></u>
  <span className="blue-strip-text-blue">SHIPPER CERTIFICATION</span>
  <span>I hereby declare that the contents of this consignment are fully and accurately described above by the proper shipping name, and are classified, packaged, marked and labeled/placarded, and are in all respects in proper condition for transport according to applicable international and national governmental regulations.
  </span>
    <span className="blue-strip-text-blue">CARRIER CERTIFICATION</span>
  <span>Carrier acknowledges receipt of packages and required placards.Carrier certifies emergency response information was made available and/or carrier has the DOT emergency response guidebook or equivalent document in the vehicle.</span>
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <tbody>
      <tr>
        <td style={{ verticalAlign: 'top', border: '1px solid #ffffff', width: '18%', borderBottom: 0, borderLeft: 0 }}>
          <span style={{ display: 'inline-block', fontSize: 14, color: '#ffffff', fontWeight: 700, backgroundColor: '#452b93', width: '100%', padding: '5px 0px' }}>DATE</span>
          <br />
          <span style={{ width: '100%', height: 50, display: 'block', borderRight: '1px solid #452b93' }}></span>
        </td>
        <td style={{ verticalAlign: 'top', border: '1px solid #ffffff', width: '52%', borderBottom: 0 }}>
          <span style={{ display: 'inline-block', fontSize: 14, color: '#ffffff', fontWeight: 700, backgroundColor: '#452b93', width: '100%', padding: '5px 0px' }}>DRIVER/EMPLOYEE NUMBER</span>
          <br />
          <span style={{ width: '100%', height: 50, display: 'block', borderRight: '1px solid #452b93' }}></span>
        </td>
        <td style={{ verticalAlign: 'top', border: '1px solid #ffffff', width: '18%', borderBottom: 0 }}>
          <span style={{ display: 'inline-block', fontSize: 14, color: '#ffffff', fontWeight: 700, backgroundColor: '#452b93', width: '100%', padding: '5px 0px' }}>PIECE COUNT</span>
          <br />
          <span style={{ width: '100%', height: 50, display: 'block', borderRight: '1px solid #452b93' }}></span>
        </td>
        <td style={{ verticalAlign: 'top', border: '1px solid #ffffff', width: '12%', borderBottom: 0, borderRight: 0 }}>
          <span style={{ display: 'inline-block', fontSize: 14, color: '#ffffff', fontWeight: 700, backgroundColor: '#452b93', width: '100%', padding: '5px 0px' }}>TRAILER #</span>
          <br />
          <span style={{ width: '100%', height: 50, display: 'block', borderRight: '1px solid #452b93' }}></span>
        </td>
      </tr>
    </tbody>
  </table>

  </td>
      </tr>
    </table>
    </>
  )
}

export default AddDetails
