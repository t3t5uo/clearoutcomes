// pages/services.js
"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function Services() {
  return (
    <div className="font-serif bg-white text-gray-800">
      <Head>
        <title>Services - Clear Outcomes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Header */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Services</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">We offer a range of services to help charities understand, measure, and communicate their outcomes effectively.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Each Service Block */}
          {/* Example for one service, replicate for others */}
          <div className="mb-12">
            <img src="/gray.jpg" alt="Theory of Change" className="w-full rounded-lg mb-6" />
            <h2 className="text-2xl font-semibold mb-3">Theory of Change development</h2>
            <p className="text-lg">Theory of Change is a powerful technique to help charities understand what their outcomes are, and how to achieve them. It is a strategic tool, a guide to measurement, and a communication aid. We can help you build a Theory of Change – either for your whole charity or for a specific project or programme.</p>
          </div>

          {/* Repeat similar blocks for other services */}
          {/* ... */}

        </div>
      </section>

      {/* Footer */}
      {/* Include your existing footer component or code here */}
    </div>
  );
}
