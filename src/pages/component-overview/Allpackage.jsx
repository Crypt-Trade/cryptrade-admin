import React from 'react';
import "../../css/allpackage.css";

const Allpackage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
    
        {/* Kick Starter Package */}
        <div className="col-md-3 my-4">
          <div className="card cardpackage" style={{ background: 'linear-gradient(45deg,rgb(214, 27, 170),rgb(61, 175, 201))' }}>
            <div className="card-body text-white">
              <h3 className="text-white" style={{ lineHeight: '105%' }}>Kick Starter</h3>
              <div className="fw-bold h3 text-white">50 USDT</div>
              <div className="kick fw-bold h5">🌟🌟 Add on 25 USDT Monthly</div>
              <div className="kick">🌟 Basic trading knowledge</div>
              <div className="kick">🌟 Meme coin name</div>
              <div className="kick">🌟 1-month subscription for premium</div>
              <div className="kick">🌟 Bonus 1-2 long-term GEM coin</div>
            </div>
          </div>
        </div>

        {/* Bull Starter Package */}
        <div className="col-md-3 my-4">
          <div className="card cardpackage" style={{ background: 'linear-gradient(45deg, rgb(15, 169, 167), rgb(83, 236, 45))' }}>
            <div className="card-body text-white">
              <h3 className="text-white">Bull Starter</h3>
              <div className="fw-bold h3 text-white">100 USDT</div>
              <div className="kick fw-bold h5">🌟🌟 Add on 25 USDT Monthly</div>
              <div className="kick">🌟 Advance crypto knowledge</div>
              <div className="kick">🌟 Meme coin checklist</div>
              <div className="kick">🌟 3-month subscription for premium group</div>
              <div className="kick">🌟 Future trading call</div>
              <div className="kick">🌟 Bonus 5 long-term holding</div>
            </div>
          </div>
        </div>

        {/* Whales Starter Package */}
        <div className="col-md-3 my-4">
          <div className="card cardpackage" style={{ background: 'linear-gradient(45deg, rgb(217, 63, 138), rgb(225, 105, 19))' }}>
            <div className="card-body text-white">
              <h3 className="fw-bold text-white">Whales Starter</h3>
              <div className="fw-bold h3 text-white">500 USDT</div>
              <div className="kick fw-bold h5">🌟🌟 Add on 25 USDT Monthly</div>
              <div className="kick">🌟 Master trading skill + lifetime asset</div>
              <div className="kick">🌟 1-year subscription premium group</div>
              <div className="kick">🌟 10 GEM coin name</div>
              <div className="kick">🌟 Portfolio management</div>
              <div className="kick">🌟 Future trade call</div>
              <div className="kick">🌟 Liquidation strategy</div>
              <div className="kick">🌟 Future scalping</div>
              <div className="kick">🌟 20 long-term coin name</div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-4">
          <div className="card cardpackage" style={{ background: 'linear-gradient(45deg,rgb(56, 143, 117),rgb(238, 127, 199))' }}>
            <div className="card-body text-white">
              <h3 className="text-white" style={{ lineHeight: '105%' }}>Monthly subscription (Add On)</h3>
              <div className="fw-bold h4 text-white">25 USDT</div>
              <div className="kick">🌟1-month subscription for premium</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allpackage;
