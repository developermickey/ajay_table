import React from 'react'

const AddressTable = () => {
  return (
    <table className="table-full" cellSpacing="0" cellPadding="0">
    <tbody>
      <tr>
        <td className="width-30">
          <span>Attn. to</span>
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
        <td className="width-8">
          <span>Area Code</span>
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
        <td className="width-12">
          <span>Phone Number</span>
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
        <td className="width-30">
          <span>Attn. to</span>
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
        <td className="width-8">
          <span>Area Code</span>
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
        <td className="width-12">
          <span>Phone Number</span>
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
    </tbody>
  </table>
  
  )
}

export default AddressTable
