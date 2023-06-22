import React from 'react'

const AddressForm = () => {
  return (
    <div>
       <table className="table-full" cellspacing="0" cellpadding="0">
        <tr>
          <td className="row-half-50">
            <span>Address</span>
            <br />
            <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} />
          </td>
          <td className="row-half-50">
            <span>Address</span>
            <br />
            <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} />
          </td>
        </tr>
      </table>
      <table className="table-full" cellspacing="0" cellpadding="0">
        <tr>
          <td className="row-half-50">
            <span>Address (Store, Dept., Ste., Flr., Apt., Div.)</span>
            <br />
            <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} />
          </td>
          <td className="row-half-50">
            <span>Address (Store, Dept., Ste., Flr., Apt., Div.)</span>
            <br />
            <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} />
          </td>
        </tr>
      </table>
      <table className="table-full" cellspacing="0" cellpadding="0">
        <tr>
          <td className="row-half-50">
            <span>Address</span>
            <br />
            <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} />
          </td>
          <td className="row-half-50">
            <span>Address</span>
            <br />
            <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} />
          </td>
        </tr>
      </table>
      <table className="table-full" cellspacing="0" cellpadding="0">
        <tr>
          <td className="row-half-50">
            <span>City</span>
            <br />
            <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} />
          </td>
          <td className="row-half-50">
            <span>City</span>
            <br />
            <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} />
          </td>
        </tr>
      </table>
      <table className="table-full" cellSpacing="0" cellPadding="0">
  <tr>
    <td className="row-half-25">
      <span>State/Province</span><br />
      <input
        type="text"
        style={{
          width: "calc(100% - 0px)",
          border: "0px",
          backgroundColor: "#f1f4ff",
          padding: "6px 0px",
        }}
      />
    </td>
    <td className="row-half-14">
      <span>ZIP/Postal Code</span><br />
      <input
        type="text"
        style={{
          width: "calc(100% - 0px)",
          border: "0px",
          backgroundColor: "#f1f4ff",
          padding: "6px 0px",
        }}
      />
    </td>
    <td className="row-half-11">
      <span>Country</span><br />
      <input
        type="text"
        style={{
          width: "calc(100% - 0px)",
          border: "0px",
          backgroundColor: "#f1f4ff",
          padding: "6px 0px",
        }}
      />
    </td>
    <td className="row-half-25">
      <span>State/Province</span><br />
      <input
        type="text"
        style={{
          width: "calc(100% - 0px)",
          border: "0px",
          backgroundColor: "#f1f4ff",
          padding: "6px 0px",
        }}
      />
    </td>
    <td className="row-half-14">
      <span>ZIP/Postal Code</span><br />
      <input
        type="text"
        style={{
          width: "calc(100% - 0px)",
          border: "0px",
          backgroundColor: "#f1f4ff",
          padding: "6px 0px",
        }}
      />
    </td>
    <td className="row-half-11">
      <span>Country</span><br />
      <input
        type="text"
        style={{
          width: "calc(100% - 0px)",
          border: "0px",
          backgroundColor: "#f1f4ff",
          padding: "6px 0px",
        }}
      />
    </td>
  </tr>
</table>
<table className="table-full" cellSpacing="0" cellPadding="0">
  <tr>
    <td className="row-half-50">
      <span>Optional or Additional Service Fees and Charges</span>
      <label>
        <input type="checkbox" />
        Liftgate
      </label>
      <label>
        <input type="checkbox" />
        Inside Pickup
      </label>
      <label>
        <input type="checkbox" />
        Limited Access
      </label>
    </td>
  
  </tr>
</table>
<table className="table-full" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td className="row-half-50">
              <span>Shipper Bill of Lading #</span>
              <input
                type="text"
                style={{ width: 'calc(100% - 175px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }}
              />
            </td>
            <td className="row-half-50">
              <input type="checkbox" />
              <span>Custom Delivery Window:</span>
              <input
                type="text"
                style={{ width: 'calc(100% - 210px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table-full" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td className="row-half-100">
              <span>Special Instructions</span>
              <br />
              <input
                type="text"
                style={{ height: '50px', width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="blue-strip-row-100" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td className="blue-strip-text">BILL FREIGHT CHARGES TO (if different than above):</td>
          </tr>
        </tbody>
      </table>
      <table className="table-full" cellSpacing="0" cellPadding="0">
        <tbody>
          <tr>
            <td className="row-half-38">
              <span>Name</span>
              <br />
              <input
                type="text"
                style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }}
              />
            </td>
            <td className="row-half-22">
              <span>FXF Acct. #</span>
              <br />
              <input
                type="text"
                style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }}
              />
            </td>
            <td className="row-half-40">
              <span>Mailing Address</span>
              <br />
              <input
                type="text"
                style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table-full" cellSpacing="0" cellPadding="0">
  <tr>
    <td className="row-half-37">
      <span>City</span><br />
      <input type="text" style={{width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px'}} />
    </td>
    <td className="row-half-9">
      <span>State</span><br />
      <input type="text" style={{width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px'}} />
    </td>
    <td className="row-half-13">
      <span>ZIP/Postal Code</span><br />
      <input type="text" style={{width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px'}} />
    </td>
    <td className="row-half-12">
      <span>Country</span><br />
      <input type="text" style={{width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px'}} />
    </td>
    <td className="row-half-11">
      <span>Country Code</span><br />
      <input type="text" style={{width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px'}} />
    </td>
    <td className="row-half-7">
      <span>Area Code</span><br />
      <input type="text" style={{width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px'}} />
    </td>
    <td className="row-half-17">
      <span>Phone Number</span><br />
      <input type="text" style={{width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px'}} />
    </td>
  </tr>
</table>
<table className="table-full" cellSpacing="0" cellPadding="0">
  <tr>
    <td className="freight-charge-left">Freight charges are <b>PREPAID</b> unless marked collect<br />
      <label>CHECK BOX IF COLLECT<input type="checkbox" /></label>
    </td>
    <td className="freight-charge-middle">
      <span className="left-middle-text">
        <label><input type="checkbox" />USD</label><br />
        <label><input type="checkbox" />CAD</label>
      </span>
      <span className="right-middle-text">
        <b>C.O.D.</b><br />
        <input type="text" style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }} /><b>AMOUNT</b>
      </span>
    </td>
    <td className="freight-charge-right">
      <b>1. The letters “C.O.D.” must appear in box before consignee’s name above.</b><br />
      <span>2. C.O.D. funds to be collected as:
        <label><input type="checkbox" />Certified Funds</label>
        <label><input type="checkbox" />Company Check</label>
        <label><input type="checkbox" />Personal Check</label>
      </span><br />
      <span>C.O.D. fee to be paid by:
        <label><input type="checkbox" />Shipper</label>
        <label><input type="checkbox" />Consignee</label>
      </span>
    </td>
  </tr>
</table>
<table style={{ width: '100%', backgroundColor: '#452b93', padding: '5px 20px' }}>
  <tr>
    <td></td>
  </tr>
</table>
<table className="table-full" cellspacing="0" cellpadding="0">
      <tr>
        <td className="row-half-50">
          <span>Name</span>
          <br />
          <input
            type="text"
            style={{
              width: "calc(100% - 0px)",
              border: "0px",
              backgroundColor: "#f1f4ff",
              padding: "6px 0px"
            }}
          />
        </td>
        <td className="row-half-50">
          <span>Mailing Address</span>
          <br />
          <input
            type="text"
            style={{
              width: "calc(100% - 0px)",
              border: "0px",
              backgroundColor: "#f1f4ff",
              padding: "6px 0px"
            }}
          />
        </td>
      </tr>
    </table>



    <table className="table-full" cellSpacing="0" cellPadding="0">
  
        <tr>
          <td className="row-half-37">
            <span>City</span>
            <br />
            <input
              type="text"
              style={{
                width: 'calc(100% - 0px)',
                border: '0px',
                backgroundColor: '#f1f4ff',
                padding: '6px 0px'
              }}
            />
          </td>
          <td className="row-half-9">
            <span>State</span>
            <br />
            <input
              type="text"
              style={{
                width: 'calc(100% - 0px)',
                border: '0px',
                backgroundColor: '#f1f4ff',
                padding: '6px 0px'
              }}
            />
          </td>
          <td className="row-half-13">
            <span>ZIP/Postal Code</span>
            <br />
            <input
              type="text"
              style={{
                width: 'calc(100% - 0px)',
                border: '0px',
                backgroundColor: '#f1f4ff',
                padding: '6px 0px'
              }}
            />
          </td>
          <td className="row-half-12">
            <span>Country</span>
            <br />
            <input
              type="text"
              style={{
                width: 'calc(100% - 0px)',
                border: '0px',
                backgroundColor: '#f1f4ff',
                padding: '6px 0px'
              }}
            />
          </td>
          <td className="row-half-11">
            <span>Country Code</span>
            <br />
            <input
              type="text"
              style={{
                width: 'calc(100% - 0px)',
                border: '0px',
                backgroundColor: '#f1f4ff',
                padding: '6px 0px'
              }}
            />
          </td>
          <td className="row-half-7">
            <span>Area Code</span>
            <br />
            <input
              type="text"
              style={{
                width: 'calc(100% - 0px)',
                border: '0px',
                backgroundColor: '#f1f4ff',
                padding: '6px 0px'
              }}
            />
          </td>
          <td className="row-half-17">
      <span>Phone Number</span>
      <br />
      <input
        type="text"
        style={{ width: 'calc(100% - 0px)', border: '0px', backgroundColor: '#f1f4ff', padding: '6px 0px' }}
      />
    </td>
          </tr>
          </table>

<table className="table-full" cellSpacing="0" cellPadding="0">
      <tr>
        <td className="row-half-100">
          <span>
            <b>RECEIVED,</b> subject to individually determined rates or contracts that have been agreed upon in writing between the carrier and shipper, if applicable, otherwise to the rates, classifications and rules that have been established by the carrier and are available to the shipper, on request, and to all applicable state and
            federal regulations, the property described below, in apparent good order, except as noted (contents and condition of contents of packages unknown) marked, consigned and destined as shown hereon, which said carrier agrees to carry to destination, if on its route, or otherwise to deliver to another carrier on the
            route to destination. Every service to be performed hereunder shall be subject to all the conditions not prohibited by law, whether printed or written, herein contained, including the conditions on the back hereof, and the conditions of the FXF 100 Series Rules Tariff, or otherwise referenced, which are hereby agreed 
          </span>
        </td>
      </tr>
    </table>

    </div>
  )
}

export default AddressForm
