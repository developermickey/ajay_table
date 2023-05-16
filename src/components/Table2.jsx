import React, { useState } from "react";
import FedEx_Freight from "./FedEx_Freight.png";
import {
	addDoc,
	collection,
	doc,
	getDocs,
	getFirestore,
	setDoc,
} from "firebase/firestore";
import { app } from "../firebase.config";

const Table2 = () => {
	const db = getFirestore(app);
	const [order, setOrder] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Form submitted!");

		const orders = {
			name: order,
			id: 123,
			date: "12/23/44",
		};
		if (order) {
			console.log(orders);
			addDoc(collection(db, "order_data"), orders);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
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
							<b>OTRT Reference: </b>
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
							<b>
								Bill of Lading: (Tanvi allow sufficient space here for a
								sticker)
							</b>
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
						<td className='date-div'>
							<b>Pickup: </b>
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
							<b>PO: </b>
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
							<b>Order:</b>
							<br />
							<input
								type='text'
								style={{
									width: "calc(100% - 0px)",
									border: "0px",
									backgroundColor: "#f1f4ff",
									padding: "6px 0px",
								}}
								onChange={(event) => {
									setOrder(event.target.value);
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
							<br />
							<label>
								<input type='checkbox' />
								Collect
							</label>
						</td>
						<td className='required-service'>
							<b>Carrier: </b>
							<br />
							<select style={{ marginTop: "15px" }}>
								<option value=''>-- Select a delivery option --</option>
								<option value='FedEx Freight'>FedEx Freight</option>
								<option value='A Duie Pyle'>A Duie Pyle</option>
								<option value='YRC'>YRC</option>
								<option value='ODFL'>ODFL</option>
								<option value='Custom'>Custom</option>
							</select>
						</td>
						<td className='required-service'>
							<b>Service Type: </b>
							<br />
							<select style={{ marginTop: "15px" }}>
								<option value=''>-- Select a delivery option --</option>
								<option value='Economy Freight'>Economy Freight</option>
								<option value='Priority Freight'>Priority Freight</option>
								<option value='Custom text'>Custom text</option>
							</select>
						</td>
					</tr>
				</table>
				<table className='table-full' cellSpacing='0' cellPadding='0'>
					<tr>
						<td
							className=''
							style={{
								marginBottom: "20px",
								height: "50px",
								width: "calc(100% - 0px)",
								border: "1px solid #452b93",
								padding: "6px 0px",
								color: "#452b93",
							}}
						>
							<span>Ship From :</span>
							<br />
							<select style={{ marginTop: "15px", width: "100%" }}>
								<option value=''>-- Select a service --</option>
								<option value='address1'>
									On the Right Track Systems, Inc.174 Hudson Street New York, NY
									– 10013
								</option>
								<option value='address2'>
									On the Right Track Systems, Inc.140 Broad StreetMontgomery, PA
									– 17752
								</option>
								<option value='Custom text'>Custom text</option>
							</select>
						</td>
					</tr>
				</table>

				<table className='table-full' cellSpacing='0' cellPadding='0'>
					<tbody>
						<tr>
							<td className='row-half-100'>
								<span>Ship To: </span>
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

				<table className='table-full' cellSpacing='0' cellPadding='0'>
					<tbody>
						<tr>
							<td className='row-half-100'>
								<span>Bill Freight Charges To: </span>
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
				<table className='table-full' cellSpacing='0' cellPadding='0'>
					<tbody>
						<tr>
							<td className='row-half-100'>
								<span>Shipping Dims:</span>
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

				<table
					style={{ width: "100%", backgroundColor: "#452b93" }}
					cellspacing='0'
					cellpadding='0'
				>
					<tr>
						<td className='row-half-8'>
							<span>Pallets</span>
						</td>
						<td className='row-half-8'>
							<span>Cartons</span>
						</td>
						<td className='row-half-3'>
							<span>Weight (lbs.)</span>
						</td>
						<td className='row-half-4 orange-4'>
							<span>Size (in)</span>
						</td>
						<td className='row-half-46'>
							<span>Description</span>
							<select style={{ width: "100%" }}>
								<option value=''>-- Select option --</option>
								<option value='Disposable Curtains'>Disposable Curtains</option>
								<option value='Hospital Track'>Hospital Track</option>
								<option value='custom'>Custom</option>
							</select>
						</td>
						<td className='row-half-10'>
							<span>Class</span>
							<select style={{ width: "100%" }}>
								<option value=''>-- Select option --</option>
								<option value='85'>85</option>
								<option value='125'>125</option>
								<option value='custom'>Custom</option>
							</select>
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
						<td className='row-half-20'>
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
						<td className='row-half-20'>
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
					</tr>
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
						<td></td>
						<td className='required-service'>
							<b>Signature/Date</b>
							<br />
							<br />
							<u
								style={{
									width: "calc(100% - 120px)",
									marginLeft: "5px",
									height: "10px",
									borderBottom: "2px solid #452b93",
									display: "inline-block",
								}}
							></u>
							<br />
							<br />
							<b style={{ color: "#452b93" }}>
								This is to certify that the above named materials
								<br /> classified packaged, marked, and labeled, and
								<br /> are in proper condition for transportation
								<br /> according to the applicable regulation of DOT.
							</b>
						</td>

						<td className='required-service'>
							<b>Trailer Loaded: </b>
							<br />
							<label>
								<input type='checkbox' />
								By Shipper
							</label>
							<br />
							<label>
								<input type='checkbox' />
								By Driver
							</label>
						</td>
						<td className='required-service'>
							<b>Freight Counted:: </b>
							<br />
							<label>
								<input type='checkbox' />
								By shipper
							</label>
							<br />
							<label>
								<input type='checkbox' />
								By driver/pallets said to contain
							</label>
							<br />
							<label>
								<input type='checkbox' />
								By driver/pieces
							</label>
						</td>
						<td className='required-service'>
							<b>Carrier Signature/Picked Date</b>
							<br />
							<br />
							<u
								style={{
									width: "calc(100% - 120px)",
									marginLeft: "5px",
									height: "10px",
									borderBottom: "2px solid #452b93",
									display: "inline-block",
								}}
							></u>
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
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Table2;
