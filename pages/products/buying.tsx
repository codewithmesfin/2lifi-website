/* eslint-disable @next/next/no-img-element */
import GetStartedButton from '@/components/getStartedButton'
import Link from 'next/link'

import React from 'react'

export default function Buying() {
    return (
        <div>
            <section className='bg-blue-600'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  pt-32 pb-8 md:pb-16'>
                    <div className="md:flex md:items-center md:justify-between md:space-x-10">
                        <div className='w-full md:w-1/2'>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl pt-2">
                                Streamlining Your
                            </h1>
                            <h1 className="my-3 font-extrabold text-gray-200 text-white text-3xl md:text-7xl">
                                Purchase Management
                            </h1>
                            <h1 className="text-gray-200 text-white text-3xl md:text-5xl pt-2">
                                Take control of your procurement, buy intelligently, and stock your
                                stores exactly as you need with 2lifi.
                            </h1>
                            <div className="md:pt-4">
                                <GetStartedButton />
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 py-10 md:py-1'>
                            <img
                                src="https://img.freepik.com/free-vector/infographic-user-panel-dashboard_52683-30025.jpg?t=st=1708681646~exp=1708685246~hmac=3ae54c4e8ea7538088f71f223b39cced5e7cd2b9af288f71da6753108a55c39b&w=1800"
                                className='rounded-xl'
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex  justify-center md:space-x-10">
                        <div

                            className='w-full shadow rounded md:w-1/2  md:max-w-[400px]'>
                            <img src="https://img.freepik.com/premium-photo/vlogger-woman-influencer_908344-4572.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=sph" alt=""
                                className='object-cover rounded h-full max-h-[300px] w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Spend Time Procuring Items, Not Software
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                As an all-in-one ERP solution, ERPNext sports most of the features
                                needed to run any kind of organization. Focus on procuring items in
                                your warehouses and let ERPNext safely record all your data.
                                There are features for managing quotations, suppliers, and purchase
                                orders. Be it sales, purchase, or people management, {"we've"} got it covered. <br />
                                Features like auto-reorder and supplier quotation help you make
                                data-driven decisions and procure effectively. Automatically
                                apply taxes to orders, rate suppliers and manage batched inventory.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Request For Quotation
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Get the best price before buying. Request quotations from multiple
                                suppliers for the items you need to procure. Fetch these items
                                from other documents automatically, and send emails to the supplier
                                right from the system.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full shadow rounded md:w-1/2 '>
                            <img src="https://erpnext.com/files/proc-rfq.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div

                            className='w-full shadow rounded md:w-3/5'>
                            <img src="https://erpnext.com/files/leather-portal.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Supplier Portal
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Use the supplier portal to help suppliers manage themselves.
                                The suppliers can submit requests for quotations and automatic
                                supplier quotations, or access ongoing purchase orders and receipts.
                                Suppliers can also raise purchase invoices for fulfilled orders.
                                You can then verify these invoices for final approval.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Auto-Apply Taxes And Charges
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Purchase tax templates can automatically fetch tax rates into transactions.
                                You can even set specific tax rules and even tax categories to further
                                automate the process. The set tax rates can also be edited both in
                                the templates and in individual transactions.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div

                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/proc-tax.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5'>
                            <img src="https://erpnext.com/files/proc-po.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Purchase Order
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Record purchase orders to keep track of all the items you need to procure.
                                The pricing, taxes, discounts, addresses, and supplier details only
                                need to be stored once and will be fetched automatically.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Purchase Receipt And Invoice
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                On receiving items from purchase orders, record
                                purchase receipts and/or purchase invoices to
                                update the stock and accounting details.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/proc-pi.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5'>
                            <img src="https://erpnext.com/files/stock-entry.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Stock Entry
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Manage a multitude of warehouse transactions like receiving,
                                transferring, repacking, and discarding items and view reports
                                for them instantly. Procure efficiently by manipulating stock in
                                warehouses to meet your needs and reflect accurate information.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Control And Fetch Pricing
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Maintain multiple price lists, based on the transaction or territory.
                                Set a unit threshold at which the price will be applied, and set how
                                many units in a packing size it will be applied to. You can also
                                set different pricing based on the lead time for products.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/fmcg-item-price.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5'>
                            <img src="https://erpnext.com/files/stock-ageing.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Stock Aging Report
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                See the age of all your inventory in one place.
                                This is especially important when dealing with perishable items.
                                Use this report to determine the age of inventory and sell off
                                specific batches or serial numbers using stock picking.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Auto-Reorder
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Stocking warehouses is risky when pricing is volatile.
                                With 2lifi, never worry about the stock dipping too low.
                                Set a threshold and our wholesale distribution software will
                                automatically generate material requests to replenish stock.
                                The stock and purchase managers will be notified promptly, so
                                {"there's "} no need to stock up on items and spend additional money.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/inv-reorder.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5'>
                            <img src="https://erpnext.com/files/supplier-scorecard.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Supplier Scorecard
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Learn which suppliers deliver quality products on time, and
                                rate suppliers based on various criteria and scoring systems.
                                This will give you insights to choose the best supplier for
                                all your procurement needs.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Quality Inspection
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Implement quality inspections to ensure that the correct
                                stock leaves or enters warehouses. Link transactions to the
                                quality inspection, select a sample size, enter the readings,
                                and decide whether to accept or reject the items
                                during your procurement cycle.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/fmcg-quality.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5'>
                            <img src="https://erpnext.com/files/whole-qsb.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Quick Stock Balance
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Instantly get the stock balance in any warehouse for a
                                specific date. Make data-driven decisions for fulfilling
                                orders by knowing which warehouse has how much stock and
                                what {"it's"} worth, all just a few clicks away.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Item Variants
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Create one master template, and generate multiple item
                                variants based on different sizes, colors, or shapes.
                                {"There's "} no restriction here — you can define your own
                                item attributes to create any kind of variant you want,
                                (e.g. based on colors, meters, shapes or manufacturer).
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/fmcg-variants.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5'>
                            <img src="https://erpnext.com/files/barcode-scan.jpg" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Barcode Scanning
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                {"There's"} no need for manual entries. Simply connect a barcode
                                scanner to your computer and quickly record items in transactions.
                                {"What's"} more, you can do this right from your smartphone!
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Unlimited Warehouses
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Create unlimited warehouses to keep track of not just actual
                                warehouses but also rooms, rows, shelves, and bins. Get a holistic
                                view of all your warehouses in a tree chart. You can configure
                                separate accounts for each warehouse to analyze the expenses,
                                stock movements, profit and loss, and to check on overall profitability.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/warehouses.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5'>
                            <img src="https://erpnext.com/files/fmcg-landed.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Landed Cost Voucher
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Items arrived, but want to add shipping charges or customs duties?
                                Update landed costs to include shipping charges, customs duties,
                                or any other additional charges.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Save Your Time By Setting Defaults
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                {"Don't "} waste time selecting or entering prices and other
                                standard details on orders every time. With our procurement
                                system, you can preset the default source and target warehouses,
                                pricing methods, and accounts. The defaults can be set separately
                                for sales and purchase, and they can, of course, be changed for
                                individual orders.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/fmcg-defaults.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-1/2'>
                            <img src="https://erpnext.com/files/inv-batch.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Batched Inventory
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Move or split batches between different warehouses. If you produce
                                your items in batches, the Batch master will come in handy to
                                track manufacturing dates, expiration dates, and more details.
                                You can even scan item barcodes via your device camera for easy
                                search through all your stock.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-gray-100'>
                <div className='mx-auto w-[90%] md:max-w-[90%]  py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-2/5 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Multiple Units Of Measure
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Whether you sell in kilograms or kilocoulomb, cups or carats,
                                we got you covered. {"What’s "} more, you can create your own measurements
                                and set up conversion factors to measure your inventory just the
                                way you want it. Once you set defaults, the unit of measure for an
                                item will be automatically fetched into orders and invoices.
                            </p>
                            <GetStartedButton />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-3/5 py-10 md:py-1 '>
                            <img
                                src="https://erpnext.com/files/fmcg-uom.png"
                                alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='mx-auto w-[90%] md:max-w-[90%] py-10'>
                    <div className="md:flex items-center justify-center md:space-x-10">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full shadow rounded md:w-1/2'>
                            <img src="https://erpnext.com/files/fmcg-returns.png" alt=""
                                className='object-cover rounded h-full w-full'
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            className='w-full md:w-1/2 py-10 md:py-1'>
                            <h1 className='text-2xl md:text-4xl font-normal text-blue-600'>
                                Manage Returns Easily
                            </h1>
                            <p className='text-[#676c72] pt-4 py-2'>
                                Be it for sales or purchases, returns {"aren't"} pleasant,
                                but they happen all the time in the real world. In 2lifi, you can
                                record returns with just two clicks. The stocks will be updated
                                automatically to show the returns.
                            </p>
                            <GetStartedButton />
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}
