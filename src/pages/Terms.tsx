import { COMPANY_DETAILS } from "../constants/company";

export default function Terms() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-zinc-900 mb-8">Terms and Conditions</h1>
        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              These Terms and Conditions govern your use of the services provided by {COMPANY_DETAILS.name} ("the Company"). By engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Services</h2>
            <p>
              The Company provides IT services, including but not limited to managed support, cybersecurity, cloud services, and consultancy. The specific scope of services will be defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
            <p>
              All prices are quoted in Great British Pounds (GBP) and are subject to VAT at the prevailing rate. Invoices are payable within 30 days of the invoice date unless otherwise agreed in writing. Late payments may incur interest at a rate of 8% above the Bank of England base rate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed, all intellectual property rights in materials created by the Company during the provision of services shall remain the property of the Company. The Client is granted a non-exclusive, non-transferable license to use such materials for their internal business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all non-public information disclosed by the other party during the course of the engagement. This obligation shall survive the termination of the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Limitation of Liability</h2>
            <p>
              The Company's total liability for any claim arising out of or in connection with the services shall be limited to the total fees paid by the Client in the 12 months preceding the claim. We shall not be liable for any indirect or consequential loss, including loss of profits or data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <section className="pt-8 border-t border-zinc-100">
            <p className="text-sm font-bold text-zinc-900">Company Details:</p>
            <p className="text-sm">{COMPANY_DETAILS.name}</p>
            <p className="text-sm">Registered Office: {COMPANY_DETAILS.address}</p>
            <p className="text-sm">Company Registration Number: {COMPANY_DETAILS.crn}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
