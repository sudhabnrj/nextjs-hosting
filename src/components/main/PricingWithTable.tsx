"use client";
import React, { useState } from "react";
import Button from "./../ui/Button";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { JSX } from "react/jsx-runtime";

interface Server {
  title: string;
  cpu: string;
  cpuDes: string;
  speed: string;
  speedDes: string;
  ram: string;
  ramDes: string;
  storage: string;
  storageDes: string;
  price: string;
}

const servers: Server[] = [
  {
    title: "Professional Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Professional light Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Enterprise 10 Cores Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Enterprise 20 Cores Light",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Professional Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Professional Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Professional Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Professional Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Professional Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Professional Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
  {
    title: "Professional Server",
    cpu: "6C/12T",
    cpuDes: "Xeon E-2236",
    speed: "3.4GHZ",
    speedDes: "4.8 GHZ Turbo",
    ram: "32GB",
    ramDes: "64GB MAX",
    storage: "2x1TB",
    storageDes: "RAID 1 (1TB Usable)",
    price: "$95.60",
  },
];

const itemsPerPage = 5;

export default function PricingWithTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = Math.ceil(servers.length / itemsPerPage);

  const paginatedServers: Server[] = servers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = (): JSX.Element[] => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage > 3) pages.push(1, "...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      )
        pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...", totalPages);
    }

    return pages.map((page, index) => (
      <Button
        key={index}
        onClick={() => typeof page === "number" && changePage(page)}
        className={`!sm:text-lg !min-w-[25px] rounded-lg px-3 py-1 !text-xs sm:!min-w-[37px] ${currentPage === page ? "border border-transparent bg-custom-gradient text-white" : "border border-gray-300 bg-white"}`}
        disabled={page === "..."}
      >
        {page}
      </Button>
    ));
  };

  return (
    <div className="w-full sm:p-6">
      <div className="mb-7 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <div className="mb-5 flex w-full items-center justify-center sm:mb-0 sm:w-1/3 sm:items-start sm:justify-start">
          <Button className="flex items-center justify-center gap-2 rounded-md bg-gray-300 font-beatrice text-sm text-gray-500">
            Clear All
            <IoClose className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex w-max justify-end gap-2 rounded-md border-2 border-blue-600 p-2">
          <Button className="flex min-w-[80px] items-center justify-center gap-2 rounded-md bg-custom-gradient !px-3 font-beatrice text-sm text-white hover:bg-custom-gradient-hover">
            USD
          </Button>
          <Button className="flex min-w-[80px] items-center justify-center gap-2 rounded-md border-2 border-blue-600 !px-3 font-beatrice text-sm">
            EUR
          </Button>
          <Button className="flex min-w-[80px] items-center justify-center gap-2 rounded-md border-2 border-blue-600 !px-3 font-beatrice text-sm">
            INR
          </Button>
        </div>
      </div>
      {paginatedServers.map((server, index) => (
        <div
          key={index}
          className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-md"
        >
          <div className="flex flex-col justify-start md:flex-row md:items-center md:justify-between">
            <div className="w-full flex-1 md:max-w-[200px]">
              <h3 className="flex items-center justify-start gap-5 font-dmSans text-lg font-bold">
                <span className="order-2 w-max md:order-1 md:max-w-[120px]">
                  {server.title}
                </span>
                <span className="order-1 md:order-2">
                  <Image
                    width={30}
                    height={30}
                    src={
                      "http://localhost/nextadmin/wp-content/uploads/2025/03/proServer.svg"
                    }
                    alt={server.title}
                    className="h-7 w-7"
                  />
                </span>
              </h3>
            </div>

            <div className="mt-5 grid flex-1 grid-cols-2 gap-4 md:mt-0 md:w-[542px] md:grid-cols-4 md:text-center">
              <p className="font-dmSans text-base font-semibold text-primary">
                {server.cpu}
                <span className="block text-sm font-normal text-bodyText">
                  {server.cpuDes}
                </span>
              </p>
              <p className="font-dmSans text-base font-semibold text-primary">
                {server.speed}
                <span className="block text-sm font-normal text-bodyText">
                  {server.speedDes}
                </span>
              </p>
              <p className="font-dmSans text-base font-semibold text-primary">
                {server.ram}
                <span className="block text-sm font-normal text-bodyText">
                  {server.ramDes}
                </span>
              </p>
              <p className="font-dmSans text-base font-semibold text-primary">
                {server.storage}
                <span className="block text-sm font-normal text-bodyText">
                  {server.storageDes}
                </span>
              </p>
            </div>

            <div className="mt-5 flex-1 md:mt-0 md:max-w-[180px] md:text-center">
              <p className="font-dmSans text-2xl font-bold text-primary">
                {server.price}
                <span className="text-xs text-bodyText">/mo</span>
              </p>
              <p className="font-dmSans text-xs text-bodyText">
                (Best price on 12 month billing)
              </p>
              <Button className="mt-2 bg-custom-gradient font-beatrice text-sm text-white">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <Button
          className="!sm:text-base !sm:min-w-[100px] !min-w-[60px] rounded-md border border-gray-300 font-dmSans !text-xs font-medium text-secondary hover:text-primary"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {renderPagination()}
        <Button
          className="!sm:text-base !sm:min-w-[100px] !min-w-[60px] rounded-md border border-gray-300 font-dmSans !text-xs text-secondary hover:text-primary"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
