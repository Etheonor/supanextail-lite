/*
This is the pricing component.  (Backend not available in the lite version)
----------
Dont forget to create your customer portal on Stripe 
https://dashboard.stripe.com/test/settings/billing/portal 
*/

const Pricing = (): JSX.Element => {
  return (
    <div>
      <div className="container px-6 py-8 mx-auto text-base-100">
        <h2 className="mt-0 mb-5 text-3xl font-bold text-center sm:text-4xl font-title text-base-content">
          Pricing
        </h2>
        <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:-mx-4 lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center rounded-lg shadow-lg lg:mx-4 bg-base-100 text-base-content">
            <div className="flex-shrink-0">
              <h3 className="inline-flex items-center badge-neutral badge badge-lg bg-base-content text-base-100">
                Casual
              </h3>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold uppercase">FREE</span>
            </div>
            <ul className="flex-1 space-y-4 text-base-content">
              <li>Up to 10 projects</li>
              <li>Up to 20 collaborators</li>
              <li>10Gb of storage</li>
            </ul>

            <button className="btn btn-primary">Start for free</button>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center rounded-lg shadow-lg lg:mx-4 bg-base-100 text-base-content">
            <div className="flex-shrink-0">
              <h3 className="inline-flex items-center badge-neutral badge badge-lg bg-base-content text-base-100">
                Professional
              </h3>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold uppercase">$4.90</span>
              <span>/month</span>
            </div>
            <ul className="flex-1 space-y-4 text-base-content">
              <li>Up to 30 projects</li>
              <li>Up to 25 collaborators</li>
              <li>100Gb of storage</li>
              <li>Real-time collaborations</li>
            </ul>

            <button
              className="btn btn-primary"
              onClick={() => {
                return;
              }}>
              Log in
            </button>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center rounded-lg shadow-lg lg:mx-4 bg-base-100 text-base-content">
            <div className="flex-shrink-0">
              <h3 className="inline-flex items-center badge-neutral badge badge-lg bg-base-content text-base-100">
                Business
              </h3>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-4xl font-bold uppercase">$24.90</span>
              <span>/month</span>
            </div>
            <ul className="flex-1 space-y-4 text-base-content">
              <li>Up to 60 projects</li>
              <li>Up to 200 collaborators</li>
              <li>1Tb of storage</li>
              <li>Real-time collaborations</li>
            </ul>

            <button
              className="btn btn-primary"
              onClick={() => {
                return;
              }}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
