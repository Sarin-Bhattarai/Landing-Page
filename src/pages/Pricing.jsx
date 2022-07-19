import React from "react";
import "../utils/css/pricing.css";

const Pricing = () => {
  return (
    <>
      <h1 className="pricing_header">OUR PRICING</h1>
      <br />
      <div
        id="generic_price_table"
        style={{
          marginTop: "10%",
        }}
      >
        <section className="container">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="generic_content clearfix">
                  <div class="generic_head_price clearfix">
                    <div class="generic_head_content clearfix">
                      <div class="head_bg"></div>
                      <div class="head">
                        <span>Basic</span>
                      </div>
                    </div>

                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">19</span>
                        <span class="cent">.99</span>
                      </span>
                    </div>
                  </div>

                  <div class="generic_feature_list">
                    <ul>
                      <li>
                        <span>1GB</span> Bandwidth
                      </li>
                      <li>
                        <span>100MB</span> Storage
                      </li>
                      <li>
                        <span>02</span> Accounts
                      </li>
                      <li>
                        <span>05</span> Host Domain
                      </li>
                      <li>
                        <span>NO</span> Support
                      </li>
                    </ul>
                  </div>

                  <div class="generic_price_btn clearfix">
                    <a class="" href="/#">
                      buy now
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-3">
                <div class="generic_content active clearfix">
                  <div class="generic_head_price clearfix">
                    <div class="generic_head_content clearfix">
                      <div class="head_bg"></div>
                      <div class="head">
                        <span>Popular</span>
                      </div>
                    </div>

                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">39</span>
                        <span class="cent">.99</span>
                      </span>
                    </div>
                  </div>

                  <div class="generic_feature_list">
                    <ul>
                      <li>
                        <span>2GB</span> Bandwidth
                      </li>
                      <li>
                        <span>500MB</span> Storage
                      </li>
                      <li>
                        <span>10</span> Accounts
                      </li>
                      <li>
                        <span>10</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>

                  <div class="generic_price_btn clearfix">
                    <a class="" href="/#">
                      buy now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="generic_content clearfix">
                  <div class="generic_head_price clearfix">
                    <div class="generic_head_content clearfix">
                      <div class="head_bg"></div>
                      <div class="head">
                        <span>Advanced</span>
                      </div>
                    </div>

                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">80</span>
                        <span class="cent">.00</span>
                      </span>
                    </div>
                  </div>

                  <div class="generic_feature_list">
                    <ul>
                      <li>
                        <span>4GB</span> Bandwidth
                      </li>
                      <li>
                        <span>1GB</span> Storage
                      </li>
                      <li>
                        <span>18</span> Accounts
                      </li>
                      <li>
                        <span>15</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>

                  <div class="generic_price_btn clearfix">
                    <a class="" href="/#">
                      buy now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="generic_content clearfix">
                  <div class="generic_head_price clearfix">
                    <div class="generic_head_content clearfix">
                      <div class="head_bg"></div>
                      <div class="head">
                        <span>Premium</span>
                      </div>
                    </div>

                    <div class="generic_price_tag clearfix">
                      <span class="price">
                        <span class="sign">$</span>
                        <span class="currency">29</span>
                        <span class="cent">.99</span>
                      </span>
                    </div>
                  </div>

                  <div class="generic_feature_list">
                    <ul>
                      <li>
                        <span>1GB</span> Bandwidth
                      </li>
                      <li>
                        <span>500MB</span> Storage
                      </li>
                      <li>
                        <span>05</span> Accounts
                      </li>
                      <li>
                        <span>10</span> Host Domain
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>

                  <div class="generic_price_btn clearfix">
                    <a class="" href="/#">
                      buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
