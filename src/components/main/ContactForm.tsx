"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface FormDataProps {
  email: string;
  name: string;
  phone: string;
  message: string;
  captchaInput: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormDataProps>({
    email: "",
    name: "",
    phone: "",
    message: "",
    captchaInput: "",
  });

  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [captcha, setCaptcha] = useState<{ num1: number; num2: number }>({
    num1: 0,
    num2: 0,
  });

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (parseInt(form.captchaInput) !== captcha.num1 + captcha.num2) {
      setStatus("Captcha incorrect. Please try again.");
      setError(true);
      generateCaptcha();
      setForm((prev) => ({ ...prev, captchaInput: "" }));
      return;
    }

    setStatus("Sending...");
    setError(false);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}wp-json/custom/v1/contact`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );
      const data: { message?: string } = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setError(false); // Success state
        setForm({
          email: "",
          name: "",
          phone: "",
          message: "",
          captchaInput: "",
        });
        generateCaptcha();
      } else {
        setStatus(data.message || "Something went wrong.");
        setError(true);
      }
    } catch (error) {
      setError(false);
      setStatus((error as Error).message || "Failed to send Message.");
    }
  };

  console.log(status);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {status && (
        <div
          className={`alert mb-3 rounded-lg px-10 py-3 text-white ${
            error ? "alert-error" : "alert-success"
          }`}
        >
          {status}
        </div>
      )}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block w-full font-dmSans text-sm font-medium text-secondary"
          >
            Full Name: <em className="text-[#085BDF]">*</em>
          </label>
          <input
            type="text"
            id="name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter your Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block w-full font-dmSans text-sm font-medium text-secondary"
          >
            Your email <em className="text-[#085BDF]">*</em>
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm outline-none focus:border-primary focus:ring-primary"
            placeholder="name@flowbite.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="phone"
          className="mb-2 block w-full font-dmSans text-sm font-medium text-secondary"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm outline-none focus:border-primary focus:ring-primary"
          placeholder="933 115 8759"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4 sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 block w-full font-dmSans text-sm font-medium text-secondary"
        >
          Your message
        </label>
        <textarea
          id="message"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 shadow-sm outline-none focus:border-primary focus:ring-primary"
          placeholder="Leave a comment..."
          value={form.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Captcha Section */}
      <div className="mt-4 flex w-full items-center justify-start">
        <label
          htmlFor="captchaInput"
          className="mb-2 block font-dmSans text-sm font-medium text-secondary"
        >
          Solve this: {captcha.num1} + {captcha.num2} =
        </label>
        <input
          type="number"
          id="captchaInput"
          className="ml-2 block h-[50px] w-[200px] appearance-none rounded-lg border border-gray-300 bg-transparent p-2 text-sm text-gray-900 shadow-sm outline-none focus:border-gray-300 focus:border-transparent focus:outline-none"
          placeholder="Enter the sum"
          value={form.captchaInput}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="focus:ring-primary-300 mt-4 rounded-full bg-custom-gradient px-5 py-3 text-center font-dmSans text-sm font-bold text-white hover:bg-custom-gradient-hover focus:outline-none focus:ring-4 sm:w-fit"
      >
        Post Comment
      </button>
    </form>
  );
}
