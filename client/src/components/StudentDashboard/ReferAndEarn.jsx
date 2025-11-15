import React, { useState } from 'react'

const ReferAndEarn = () => {
  const referralLink = 'https://ricr.in/free-demo/MTc=';

  const [copied, setCopied] = useState(false);

  const referrals = [
    { id: 1, name: 'Harsh Sahare', handle: '24dsp04014', amount: '₹570', avatar: `https://i.pravatar.cc/40?img=12` },
    { id: 2, name: 'Yugant Nath', handle: '24ricr0205', amount: '₹600', avatar: `https://i.pravatar.cc/40?img=3` },
    { id: 3, name: 'Aayush Pawar', handle: '24ricr0423', amount: '₹600', avatar: `https://i.pravatar.cc/40?img=45` },
    { id: 4, name: 'Lucky Pawar', handle: '24ricr0424', amount: '₹800', avatar: `https://i.pravatar.cc/40?img=32` },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // fallback - do nothing
    }
  };

  return (
    <div className="p-6 w-[1500px] mx-auto bg-gradient-to-br mt-10 h-[50rem] from-blue-50 to-indigo-50 ">

      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Refer & Earn</h2>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: Poster */}
          <div className="lg:col-span-7  p-6 ">
            <div className=" rounded-xl p-6 h-[620px] flex flex-col items-center justify-center">
              <div className="w-full h-full  overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8a59b7b7e9e7c9c9e9e9e9e9e9e9e9e9"
                  alt="Cashback poster"
                  className="object-cover rounded-2xl w-full h-full"
                />
              </div>

              <div className="mt-6 w-full flex justify-center">
                <button className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-700 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5">
                  View Cashback Policy
                </button>
              </div>
            </div>
          </div>

          {/* Right: Controls and referrals */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Start Earning in 4 Easy Steps</h3>
                    <p className="text-sm text-gray-600 mt-1">Invite friends and earn cashback when they enroll.</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((step) => (
                    <div 
                      key={step}
                      className="bg-blue-100 text-blue-800 border border-blue-400 p-4 rounded-xl text-center  font-semibold shadow-md"
                    >
                      {step}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2 items-center">
                  <input
                    type="text"
                    readOnly
                    value={referralLink}
                    className="flex-1 bg-gray-50 border border-gray-300 rounded-l-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Referral link"
                  />
                  <button 
                    onClick={copyLink} 
                    className={`px-6 py-3 rounded-r-xl font-medium transition-all duration-300 ${
                      copied 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg'
                    }`}
                    aria-label="Copy referral link"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
                <div className="text-sm text-gray-600 font-medium">Earning</div>
                <div className="text-2xl font-bold text-gray-800 mt-2">₹2570</div>
                <div className="text-xs text-green-500 font-medium mt-1">(₹0 Locked)</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center">
                <div className="text-sm text-gray-600 font-medium">Referred</div>
                  <div className="text-2xl font-bold text-gray-800 mt-2">4</div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-lg  border border-gray-100 flex flex-col items-end">
                <div className="text-sm text-gray-600 font-medium text-center">Incentive</div>
                <div className="text-2xl font-bold text-green-500 mt-2 text-center">4%</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-gray-800">Referrals</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{referrals.length} friends</span>
              </div>
              <div className="space-y-4">
                  <div className="space-y-4 ref-scroll max-h-28 overflow-y-auto pr-2">
                    {referrals.map((r) => (
                      <div key={r.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                        <div className="flex items-center gap-3">
                          <img src={r.avatar} alt="avatar" className="h-12 w-12 rounded-full object-cover border-2 border-purple-200" />
                          <div>
                            <div className="font-semibold text-gray-800">{r.name}</div>
                            <div className="text-xs text-gray-500">{r.handle}</div>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-green-500 bg-green-50 px-3 py-1 rounded-lg">
                          {r.amount}
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferAndEarn