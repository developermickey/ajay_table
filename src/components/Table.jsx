import React from "react";
// import FedEx_Freight from './images/FedEx_Freight.png';
import FedEx_Freight from "./FedEx_Freight.png";
const Table = () => {
	return (
		<>
			<table>
				<tr>
					<td className='top-strip'>
						<b>UNIFORM STRAIGHT BILL OF LADING ORIGINAL---NOT NEGOTIABLE</b>
						<br />
						ALL SERVICES SUBJECT TO THE TERMS AND CONDITIONS OF THE FXF 100
						SERIES RULES TARIFF. SEE FEDEX.COM FOR DETAILS. --- QUESTIONS? CALL
						1.866.393.4585
					</td>
				</tr>
			</table>
			<table
				style={{
					border: "1px solid #482e92",
					width: "100%",
					padding: "0px",
					borderSpacing: "none",
				}}
				cellSpacing='0'
				cellPadding='0'
			>
				<tr>
					<td rowspan='2' className='fedex-logo'>
						<img src={FedEx_Freight} />
					</td>
					<td className='date-div'>
						<b>Date</b>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='date-div'>
						<b>Purchase Order# </b>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
				</tr>
				<tr>
					<td className='date-div second-date'>
						<b>Shipper #</b>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='date-div'>
						<b>Shipper #</b>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
				</tr>
				<tr>
					<td></td>
					<td className='required-service'>
						<b>REQUIRED: Please select a service type</b>
						<br />
						<label>
							<input type='checkbox' />
							Prepaid
						</label>
						<br />
						<label>
							<input type='checkbox' />
							3rd Party
						</label>
					</td>
					<td className='required-service'>
						<b>
							OPTIONAL: You may select a money-back guarantee
							<br />
							delivery (charges and tariff limitations may apply).
						</b>
						<br />
						<label style={{ marginTop: "15px", display: "inline-block" }}>
							<input type='checkbox' />
							A.M. Delivery
						</label>
						<label
							style={{
								paddingLeft: "20px",
								marginTop: "10px",
								display: "inline-block",
							}}
						>
							<input type='checkbox' />
							Close of Business Delivery
						</label>
					</td>
				</tr>
			</table>
			<table className='blue-table-color'>
				<tr>
					<td className='table-half-50'>
						SHIPPER (from) Please provide ZIP codes and phone numbers
					</td>
					<td className='table-half-50'>CONSIGNEE (to)</td>
				</tr>
			</table>
			<table className='table-full' cellspacing='0' cellpadding='0'>
				<tr>
					<td className='width-30'>
						<span>Shipper</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='width-20'>
						<span>FXF Acct. #</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='width-30'>
						<span>Consignee</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='width-20'>
						<span>FXF Acct. #</span>
						<br />
						<input
							type='text'
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
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tbody>
					<tr>
						<td className='width-30'>
							<span>Attn. to</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
						<td className='width-8'>
							<span>Area Code</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
						<td className='width-12'>
							<span>Phone Number</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
						<td className='width-30'>
							<span>Attn. to</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
						<td className='width-8'>
							<span>Area Code</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
						<td className='width-12'>
							<span>Phone Number</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<table className='table-full' cellspacing='0' cellpadding='0'>
				<tr>
					<td className='row-half-50'>
						<span>Address</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-50'>
						<span>Address</span>
						<br />
						<input
							type='text'
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
			<table className='table-full' cellspacing='0' cellpadding='0'>
				<tr>
					<td className='row-half-50'>
						<span>Address (Store, Dept., Ste., Flr., Apt., Div.)</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-50'>
						<span>Address (Store, Dept., Ste., Flr., Apt., Div.)</span>
						<br />
						<input
							type='text'
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
			<table className='table-full' cellspacing='0' cellpadding='0'>
				<tr>
					<td className='row-half-50'>
						<span>Address</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-50'>
						<span>Address</span>
						<br />
						<input
							type='text'
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
			<table className='table-full' cellspacing='0' cellpadding='0'>
				<tr>
					<td className='row-half-50'>
						<span>City</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-50'>
						<span>City</span>
						<br />
						<input
							type='text'
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
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tr>
					<td className='row-half-25'>
						<span>State/Province</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-14'>
						<span>ZIP/Postal Code</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-11'>
						<span>Country</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-25'>
						<span>State/Province</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-14'>
						<span>ZIP/Postal Code</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-11'>
						<span>Country</span>
						<br />
						<input
							type='text'
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
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tr>
					<td className='row-half-50'>
						<span>Optional or Additional Service Fees and Charges</span>
						<label>
							<input type='checkbox' />
							Liftgate
						</label>
						<label>
							<input type='checkbox' />
							Inside Pickup
						</label>
						<label>
							<input type='checkbox' />
							Limited Access
						</label>
					</td>
				</tr>
			</table>
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tbody>
					<tr>
						<td className='row-half-50'>
							<span>Shipper Bill of Lading #</span>
							<input
								type='text'
								style={{
									width: "calc(100% - 175px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
						<td className='row-half-50'>
							<input type='checkbox' />
							<span>Custom Delivery Window:</span>
							<input
								type='text'
								style={{
									width: "calc(100% - 210px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tbody>
					<tr>
						<td className='row-half-100'>
							<span>Special Instructions</span>
							<br />
							<input
								type='text'
								style={{
									height: "50px",
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<table className='blue-strip-row-100' cellSpacing='0' cellPadding='0'>
				<tbody>
					<tr>
						<td className='blue-strip-text'>
							BILL FREIGHT CHARGES TO (if different than above):
						</td>
					</tr>
				</tbody>
			</table>
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tbody>
					<tr>
						<td className='row-half-38'>
							<span>Name</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
						<td className='row-half-22'>
							<span>FXF Acct. #</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
						<td className='row-half-40'>
							<span>Mailing Address</span>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tr>
					<td className='row-half-37'>
						<span>City</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-9'>
						<span>State</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-13'>
						<span>ZIP/Postal Code</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-12'>
						<span>Country</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-11'>
						<span>Country Code</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-7'>
						<span>Area Code</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-17'>
						<span>Phone Number</span>
						<br />
						<input
							type='text'
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
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tr>
					<td className='freight-charge-left'>
						Freight charges are <b>PREPAID</b> unless marked collect
						<br />
						<label>
							CHECK BOX IF COLLECT
							<input type='checkbox' />
						</label>
					</td>
					<td className='freight-charge-middle'>
						<span className='left-middle-text'>
							<label>
								<input type='checkbox' />
								USD
							</label>
							<br />
							<label>
								<input type='checkbox' />
								CAD
							</label>
						</span>
						<span className='right-middle-text'>
							<b>C.O.D.</b>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
							/>
							<b>AMOUNT</b>
						</span>
					</td>
					<td className='freight-charge-right'>
						<b>
							1. The letters “C.O.D.” must appear in box before consignee’s name
							above.
						</b>
						<br />
						<span>
							2. C.O.D. funds to be collected as:
							<label>
								<input type='checkbox' />
								Certified Funds
							</label>
							<label>
								<input type='checkbox' />
								Company Check
							</label>
							<label>
								<input type='checkbox' />
								Personal Check
							</label>
						</span>
						<br />
						<span>
							C.O.D. fee to be paid by:
							<label>
								<input type='checkbox' />
								Shipper
							</label>
							<label>
								<input type='checkbox' />
								Consignee
							</label>
						</span>
					</td>
				</tr>
			</table>
			<table
				style={{
					width: "100%",
					backgroundColor: "#452b93",
					padding: "5px 20px",
				}}
			>
				<tr>
					<td></td>
				</tr>
			</table>
			<table className='table-full' cellspacing='0' cellpadding='0'>
				<tr>
					<td className='row-half-50'>
						<span>Name</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-50'>
						<span>Mailing Address</span>
						<br />
						<input
							type='text'
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

			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tr>
					<td className='row-half-37'>
						<span>City</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-9'>
						<span>State</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-13'>
						<span>ZIP/Postal Code</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-12'>
						<span>Country</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-11'>
						<span>Country Code</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-7'>
						<span>Area Code</span>
						<br />
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-17'>
						<span>Phone Number</span>
						<br />
						<input
							type='text'
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

			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tr>
					<td className='row-half-100'>
						<span>
							<b>RECEIVED,</b> subject to individually determined rates or
							contracts that have been agreed upon in writing between the
							carrier and shipper, if applicable, otherwise to the rates,
							classifications and rules that have been established by the
							carrier and are available to the shipper, on request, and to all
							applicable state and federal regulations, the property described
							below, in apparent good order, except as noted (contents and
							condition of contents of packages unknown) marked, consigned and
							destined as shown hereon, which said carrier agrees to carry to
							destination, if on its route, or otherwise to deliver to another
							carrier on the route to destination. Every service to be performed
							hereunder shall be subject to all the conditions not prohibited by
							law, whether printed or written, herein contained, including the
							conditions on the back hereof, and the conditions of the FXF 100
							Series Rules Tariff, or otherwise referenced, which are hereby
							agreed
						</span>
					</td>
				</tr>
			</table>
			<table
				style={{ width: "100%", backgroundColor: "#452b93" }}
				cellspacing='0'
				cellpadding='0'
			>
				<tr>
					<td className='row-half-8'>
						<span>HANDLING UNITS (H/U)</span>
					</td>
					<td className='row-half-8'>
						<span>H/U PKG. TYPE</span>
					</td>
					<td className='row-half-3'>
						<span>PIECES</span>
					</td>
					<td className='row-half-4 orange-4'>
						<span>HM (X)</span>
					</td>
					<td className='row-half-46'>
						<span>
							KIND OF PACKAGE, DESCRIPTION OF ARTICLES, SPECIAL MARKS AND
							EXCEPTIONS (subject to correction)
						</span>
					</td>
					<td className='row-half-10'>
						<span>WEIGHT IN LBS</span>
					</td>
					<td className='row-half-12 white-border'>
						<span>NMFC ITEM #</span>
					</td>
					<td className='row-half-4'>
						<span>CLASS</span>
					</td>
					<td className='row-half-4'>
						<span>CUBE</span>
					</td>
				</tr>
				<tr>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-46 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-10 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-12 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
				</tr>
				<tr>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-46 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-10 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-12 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
				</tr>
				<tr>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-46 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-10 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-12 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input' />
					</td>
				</tr>
				<tr>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-46 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-10 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-12 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
				</tr>
				<tr>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-46 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-10 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-12 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
				</tr>
				<tr>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-8 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-46 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-10 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-12 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
					<td className='row-half-4 blue-border'>
						<input type='text' className='same-input'></input>
					</td>
				</tr>
			</table>
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tr>
					<td className='row-half-20'>
						<span>TOTAL H/U:</span>
						<input
							type='text'
							style={{
								marginTop: "13px",
								width: "calc(100% - 83px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "6px 0px",
							}}
						/>
					</td>
					<td className='row-half-80'>
						<span>
							{" "}
							<span class='star'>&#9734;</span> MARK “X” OR “RQ” IN THE HM
							COLUMN TO DESIGNATE HAZARDOUS MATERIALS OR REPORTABLE QUANTITY AS
							DEFINED IN DOT REGULATIONS.
						</span>
					</td>
				</tr>
			</table>
			<table className='table-full' cellSpacing='0' cellPadding='0'>
				<tr>
					<td className='row-half-50 font-size-14px'>
						<span>HM EMERGENCY CONTACT PHONE NUMBER</span>
						<input
							type='text'
							style={{
								width: "calc(100% - 324px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "11px 0px",
							}}
						/>
						<br />
						<span style={{ marginTop: "8px", fontSize: "14px" }}>
							<b>
								CUSTOMER REGISTERED W/EMERGENCY RESPONSE INFO. PROVIDER or
								CONTRACT #
							</b>
						</span>
						<input
							type='text'
							style={{
								width: "calc(100% - 0px)",
								border: "0px",
								backgroundColor: "#f1f4ff",
								padding: "10px 0px",
							}}
						/>
						<span>
							NOTE (1) Where the rate and carrier’s liability for loss or damage
							may be dependent on value, shippers must state specifically in
							writing the agreed or declared value of the property as follows:
							“The agreed or declared value of the property is specifically
							stated by the shipper to be not exceeding
							<input
								type='text'
								style={{
									width: "calc(100% - 85%)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "5px 0px",
									borderBottom: "2px solid #452b93",
								}}
							/>
							per
							<input
								type='text'
								style={{
									width: "calc(100% - 85%)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "5px 0px",
									borderBottom: "2px solid #452b93",
								}}
							/>
							"
						</span>
						<br />
						<span>
							Note (2) liability limitation for loss or damage on this shipment
							shall be applicable as provided by contract or in the current NMFC
							or this carrier’s governing tariffs. See FXF 100 Series Rules
							Tariff for complete limited liability provisions. Carrier’s
							maximum standard liability is limited to $25 per pound per package
							for NEW articles and $.50 per pound per package (or its equivalent
							in Mexican Pesos (MXN) or Canadian Dollars (CAD), at the rate of
							exchange which is in effect at the place and on the date of
							shipment) for USED or RECONDITIONED articles. In no case shall
							carrier liability exceed $100,000 per occurrence (or its
							equivalent in MXN or CAD at the rate of exchange which is in
							effect at the place and on the date of shipment) for NEW articles
							or $10,000 per occurrence (or its equivalent in MXN or CAD at the
							rate of exchange which is in effect at the place and on the date
							of shipment) for USED or RECONDITIONED articles. For availability
							and limits of excess liability coverage and applicable rates and
							charges, please refer to FXF 100 Series Rules Tariff. Not
							selecting an additional coverage option is considered to be a
							waiver of same and standard liability coverage will apply.
						</span>
						<span>
							<input type='checkbox' />
							Articles are NEW, and require Excess Liability Coverage in the
							amount of
							<input
								type='text'
								style={{
									width: "calc(100% - 85%)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "5px 0px",
									borderBottom: "2px solid #452b93",
								}}
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
							<input type='checkbox' />
							Articles are USED or RECONDITIONED and require Excess Liability
							Coverage. Additional charges will apply.
						</span>
						<br />
						<span>
							NOTE (3) Commodities requiring special or additional care or
							attention in handling or stowing must be so marked and packaged as
							to ensure safe transportation with ordinary care. See Sec. 2(e) of
							NMFC Item 360.
						</span>
					</td>
					<td className='row-half-50'>
						<span className='blue-strip-text-blue'>
							FOR INTERNATIONAL SHIPMENTS INDICATE BROKER NAME, FAX AND PHONE
							NUMBERS
						</span>
						<table style={{ width: "100%" }} cellSpacing='0' cellPadding='0'>
							<tr>
								<td
									style={{
										verticalAlign: "top",
										border: "1px solid #452b93",
										width: "60%",
										borderTop: "0",
									}}
								>
									<span style={{ fontSize: "14px", fontWeight: "700" }}>
										EEI/SED Number or Exception
									</span>
									<input
										type='text'
										style={{
											width: "calc(100% - 199px)",
											border: "0",
											backgroundColor: "#f1f4ff",
											padding: "10px 0",
										}}
									/>
								</td>
								<td
									style={{
										verticalAlign: "top",
										border: "1px solid #452b93",
										width: "40%",
										borderTop: "0",
									}}
								>
									<span style={{ fontSize: "14px", fontWeight: "700" }}>
										Phone #
									</span>
									<input
										type='text'
										style={{
											width: "calc(100% - 58px)",
											border: "0",
											backgroundColor: "#f1f4ff",
											padding: "10px 0",
										}}
									/>
								</td>
							</tr>
							<tr>
								<td
									style={{
										verticalAlign: "top",
										border: "1px solid #452b93",
										width: "60%",
										borderTop: "0",
									}}
								>
									<span style={{ fontSize: "14px", fontWeight: "700" }}>
										Broker Name
									</span>
									<input
										type='text'
										style={{
											width: "calc(100% - 88px)",
											border: "0",
											backgroundColor: "#f1f4ff",
											padding: "10px 0",
										}}
									/>
								</td>
								<td
									style={{
										verticalAlign: "top",
										border: "1px solid #452b93",
										width: "40%",
										borderTop: "0",
									}}
								>
									<span style={{ fontSize: "14px", fontWeight: "700" }}>
										FAX #
									</span>
									<input
										type='text'
										style={{
											width: "calc(100% - 42px)",
											border: "0",
											backgroundColor: "#f1f4ff",
											padding: "10px 0",
										}}
									/>
								</td>
							</tr>
						</table>

						<span className='blue-strip-text-blue'>
							FOR FREIGHT COLLECT SHIPMENTS
						</span>
						<span>
							Subject to Section 7 of conditions of applicable Bill of Lading.
							If this shipment is to be delivered to the consignee,without
							recourse on the consignor, the consignor shall sign the following
							statement. The carrier may decline tomake delivery of this
							shipment without payment of freight and all other lawful charges.
						</span>
						<span>Consignor Signature</span>
						<u
							style={{
								width: "calc(100% - 158px)",
								marginLeft: "5px",
								height: "20px",
								borderBottom: "2px solid #452b93",
								display: "inline-block",
							}}
						></u>
						<span className='blue-strip-text-blue'>SHIPPER CERTIFICATION</span>
						<span>
							I hereby declare that the contents of this consignment are fully
							and accurately described above by the proper shipping name, and
							are classified, packaged, marked and labeled/placarded, and are in
							all respects in proper condition for transport according to
							applicable international and national governmental regulations.
						</span>
						<span className='blue-strip-text-blue'>CARRIER CERTIFICATION</span>
						<span>
							Carrier acknowledges receipt of packages and required
							placards.Carrier certifies emergency response information was made
							available and/or carrier has the DOT emergency response guidebook
							or equivalent document in the vehicle.
						</span>
						<table style={{ width: "100%", borderCollapse: "collapse" }}>
							<tbody>
								<tr>
									<td
										style={{
											verticalAlign: "top",
											border: "1px solid #ffffff",
											width: "18%",
											borderBottom: 0,
											borderLeft: 0,
										}}
									>
										<span
											style={{
												display: "inline-block",
												fontSize: 14,
												color: "#ffffff",
												fontWeight: 700,
												backgroundColor: "#452b93",
												width: "100%",
												padding: "5px 0px",
											}}
										>
											DATE
										</span>
										<br />
										<span
											style={{
												width: "100%",
												height: 50,
												display: "block",
												borderRight: "1px solid #452b93",
											}}
										></span>
									</td>
									<td
										style={{
											verticalAlign: "top",
											border: "1px solid #ffffff",
											width: "52%",
											borderBottom: 0,
										}}
									>
										<span
											style={{
												display: "inline-block",
												fontSize: 14,
												color: "#ffffff",
												fontWeight: 700,
												backgroundColor: "#452b93",
												width: "100%",
												padding: "5px 0px",
											}}
										>
											DRIVER/EMPLOYEE NUMBER
										</span>
										<br />
										<span
											style={{
												width: "100%",
												height: 50,
												display: "block",
												borderRight: "1px solid #452b93",
											}}
										></span>
									</td>
									<td
										style={{
											verticalAlign: "top",
											border: "1px solid #ffffff",
											width: "18%",
											borderBottom: 0,
										}}
									>
										<span
											style={{
												display: "inline-block",
												fontSize: 14,
												color: "#ffffff",
												fontWeight: 700,
												backgroundColor: "#452b93",
												width: "100%",
												padding: "5px 0px",
											}}
										>
											PIECE COUNT
										</span>
										<br />
										<span
											style={{
												width: "100%",
												height: 50,
												display: "block",
												borderRight: "1px solid #452b93",
											}}
										></span>
									</td>
									<td
										style={{
											verticalAlign: "top",
											border: "1px solid #ffffff",
											width: "12%",
											borderBottom: 0,
											borderRight: 0,
										}}
									>
										<span
											style={{
												display: "inline-block",
												fontSize: 14,
												color: "#ffffff",
												fontWeight: 700,
												backgroundColor: "#452b93",
												width: "100%",
												padding: "5px 0px",
											}}
										>
											TRAILER #
										</span>
										<br />
										<span
											style={{
												width: "100%",
												height: 50,
												display: "block",
												borderRight: "1px solid #452b93",
											}}
										></span>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</table>
		</>
	);
};

export default Table;
