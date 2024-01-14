"use client";
import Gift from "@/components/Gift";
import {gifts} from "../../_data/data";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

import {useState, useEffect} from "react";

const Give = () => {
	const selectedGift = JSON.parse(localStorage.getItem("gifts")) || [];
	const [addedStatus, setAddedStatus] = useState({});

	useEffect(() => {
		const storedAddedStatus =
			JSON.parse(localStorage.getItem("addedStatus")) || {};
		setAddedStatus(storedAddedStatus);
	}, []);

	const handleCancel = (giftId) => {
		const updatedSelectedGifts = selectedGift.filter(
			(gift) => gift.id !== giftId
		);
		localStorage.setItem("gifts", JSON.stringify(updatedSelectedGifts));

		const newAddedStatus = {...addedStatus, [giftId]: !addedStatus[giftId]};
		localStorage.setItem("addedStatus", JSON.stringify(newAddedStatus));
		setAddedStatus(newAddedStatus);
	};

	return (
		<>
			<section className="md:w-2/4 p-4 mx-auto">
				<div className="pb-14">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
					>
						<path
							d="M15.0901 19.92L8.57009 13.4C7.80009 12.63 7.80009 11.37 8.57009 10.6L15.0901 4.08"
							stroke="#292D32"
							stroke-width="1.5"
							stroke-miterlimit="10"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<form>
					<div className="pb-14">
						<label htmlFor="" className="text-black text-xl font-semibold">
							Giver&apos;s Name
						</label>

						<div className="flex justify-between p-4 bg-[#F7F3F3] border rounded-2xl mt-2">
							<input
								type="text"
								placeholder="Wetin be your name boss"
								className="outline-none text-black bg-transparent"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									opacity="0.4"
									d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z"
									fill="#292D32"
								/>
								<path
									d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z"
									fill="#292D32"
								/>
								<path
									d="M18.7802 19.36C17.0002 21 14.6202 22.01 12.0002 22.01C9.38022 22.01 7.00021 21 5.22021 19.36C5.46021 18.45 6.11022 17.62 7.06021 16.98C9.79022 15.16 14.2302 15.16 16.9402 16.98C17.9002 17.62 18.5402 18.45 18.7802 19.36Z"
									fill="#292D32"
								/>
							</svg>
						</div>
					</div>
					<div className="pb-14">
						<label htmlFor="" className="text-black text-xl font-semibold">
							Date
						</label>
						<div className="flex justify-between p-4 bg-[#F7F3F3] border rounded-2xl mt-2">
							<input
								type="date"
								placeholder="Wetin be your name boss"
								className="outline-none text-black bg-transparent"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M16.75 3.56V2C16.75 1.59 16.41 1.25 16 1.25C15.59 1.25 15.25 1.59 15.25 2V3.5H8.74998V2C8.74998 1.59 8.40998 1.25 7.99998 1.25C7.58998 1.25 7.24998 1.59 7.24998 2V3.56C4.54998 3.81 3.23999 5.42 3.03999 7.81C3.01999 8.1 3.25999 8.34 3.53999 8.34H20.46C20.75 8.34 20.99 8.09 20.96 7.81C20.76 5.42 19.45 3.81 16.75 3.56Z"
									fill="#292D32"
								/>
								<path
									opacity="0.4"
									d="M20 9.84C20.55 9.84 21 10.29 21 10.84V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V10.84C3 10.29 3.45 9.84 4 9.84H20Z"
									fill="#292D32"
								/>
								<path
									d="M8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.07 13.01 8.51 12.92 8.88 13.08C9.01 13.13 9.12 13.2 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71C9.02 14.89 8.76 15 8.5 15Z"
									fill="#292D32"
								/>
								<path
									d="M12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.38 13.2 11.49 13.13 11.62 13.08C11.99 12.92 12.43 13.01 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71C12.66 14.75 12.61 14.79 12.56 14.83C12.5 14.87 12.44 14.9 12.38 14.92C12.32 14.95 12.26 14.97 12.2 14.98C12.13 14.99 12.07 15 12 15Z"
									fill="#292D32"
								/>
								<path
									d="M15.5 15C15.24 15 14.98 14.89 14.79 14.71C14.61 14.52 14.5 14.26 14.5 14C14.5 13.74 14.61 13.48 14.79 13.29C14.89 13.2 14.99 13.13 15.12 13.08C15.3 13 15.5 12.98 15.7 13.02C15.76 13.03 15.82 13.05 15.88 13.08C15.94 13.1 16 13.13 16.06 13.17C16.11 13.21 16.16 13.25 16.21 13.29C16.39 13.48 16.5 13.74 16.5 14C16.5 14.26 16.39 14.52 16.21 14.71C16.16 14.75 16.11 14.79 16.06 14.83C16 14.87 15.94 14.9 15.88 14.92C15.82 14.95 15.76 14.97 15.7 14.98C15.63 14.99 15.56 15 15.5 15Z"
									fill="#292D32"
								/>
								<path
									d="M8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C7.99 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.3 16.5 8.5 16.48 8.7 16.52C8.76 16.53 8.82 16.55 8.88 16.58C8.94 16.6 9 16.63 9.06 16.67C9.11 16.71 9.16 16.75 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21C9.16 18.25 9.11 18.3 9.06 18.33C9 18.37 8.94 18.4 8.88 18.42C8.82 18.45 8.76 18.47 8.7 18.48C8.63 18.49 8.57 18.5 8.5 18.5Z"
									fill="#292D32"
								/>
								<path
									d="M12 18.5C11.74 18.5 11.48 18.39 11.29 18.21C11.11 18.02 11 17.76 11 17.5C11 17.24 11.11 16.98 11.29 16.79C11.66 16.42 12.34 16.42 12.71 16.79C12.89 16.98 13 17.24 13 17.5C13 17.76 12.89 18.02 12.71 18.21C12.52 18.39 12.26 18.5 12 18.5Z"
									fill="#292D32"
								/>
								<path
									d="M15.5 18.5C15.24 18.5 14.98 18.39 14.79 18.21C14.61 18.02 14.5 17.76 14.5 17.5C14.5 17.24 14.61 16.98 14.79 16.79C15.16 16.42 15.84 16.42 16.21 16.79C16.39 16.98 16.5 17.24 16.5 17.5C16.5 17.76 16.39 18.02 16.21 18.21C16.02 18.39 15.76 18.5 15.5 18.5Z"
									fill="#292D32"
								/>
							</svg>
						</div>
					</div>

					<div className="pb-14">
						<label htmlFor="" className="text-black text-xl font-semibold">
							Promise
						</label>

						<div className="grid grid-cols-2 gap-4">
							{selectedGift.map((gift) => (
								<div
									key={gift.id}
									className="bg-green-300 flex flex-col items-center p-4 relative rounded-lg"
								>
									<div
										className="bg-white rounded-full absolute right-4"
										onClick={() => handleCancel(gift.id)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
										>
											<path
												d="M13.0601 12L15.3601 9.69998C15.6501 9.40998 15.6501 8.92999 15.3601 8.63999C15.0701 8.34999 14.5901 8.34999 14.3001 8.63999L12.0001 10.94L9.70011 8.63999C9.41011 8.34999 8.93011 8.34999 8.64011 8.63999C8.35011 8.92999 8.35011 9.40998 8.64011 9.69998L10.9401 12L8.64011 14.3C8.35011 14.59 8.35011 15.07 8.64011 15.36C8.79011 15.51 8.98011 15.58 9.17011 15.58C9.36011 15.58 9.55011 15.51 9.70011 15.36L12.0001 13.06L14.3001 15.36C14.4501 15.51 14.6401 15.58 14.8301 15.58C15.0201 15.58 15.2101 15.51 15.3601 15.36C15.6501 15.07 15.6501 14.59 15.3601 14.3L13.0601 12Z"
												fill="#292D32"
											/>
										</svg>
									</div>
									<Image
										src={gift.img}
										alt={gift.title}
										width={50}
										height={50}
									/>
									<h1 className="text-black">{gift.title}</h1>
								</div>
							))}
							<Link
								href="/addgift"
								className="text-black bg-[#EDEFEE] flex items-center justify-center flex-col rounded-lg"
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="65"
										height="64"
										viewBox="0 0 65 64"
										fill="none"
									>
										<path
											d="M16.5 32H48.5"
											stroke="#292D32"
											stroke-width="4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M32.5 48V16"
											stroke="#292D32"
											stroke-width="4"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
								<p>add gift</p>
							</Link>
						</div>
					</div>

					<div className="pb-14">
						<label htmlFor="" className="text-black text-xl font-semibold">
							Giver&apos;s Name
						</label>
						<div className="flex gap-2  p-4 bg-[#F7F3F3] border rounded-lg mt-2">
							<select
								name=""
								id=""
								className="text-black bg-[#E4E2E4] py-2 px-4 rounded-lg  outline-none"
							>
								<option className="text-sm" value="">
									NGN
								</option>
								<option className="text-sm" value="">
									USD
								</option>
								<option className="text-sm" value="">
									EUR
								</option>
								<option className="text-sm" value="">
									CAD
								</option>
								<option className="text-sm" value="">
									GBP
								</option>
							</select>
							<input
								type="text"
								placeholder="How much you go like give me"
								className="outline-none text-black bg-transparent w-full"
							/>
						</div>
					</div>
					<Button
						className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full "
						label="Submit"
					/>
				</form>
			</section>
		</>
	);
};

export default Give;
