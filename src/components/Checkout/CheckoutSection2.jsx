// Auto-generated from checkout.html section 2
const CheckoutSection2 = () => (
  <section className="checkout-area bg-color-fefefe ptb-100">
  <div className="container">
  <div className="checkout-wrap">
  <div className="row">
  <div className="col-lg-8 col-md-12">
  <div className="alert alert-blue alert-icon" role="alert">
  <i className="icofont-info-circle"></i> Already have an account? <a href="#" data-bs-target="#modal-signin" data-bs-toggle="modal" data-bs-dismiss="modal" className="alert-link hover">Sign in</a> for faster checkout experience.
  							</div>
  <form>
  <div className="billing-address">
  <h3 className="title">Billing Address</h3>
  <div className="row">
  <div className="col-lg-12">
  <div className="form-floating">
  <input type="text" className="form-control" id="firstName" placeholder="First Name" value="" required="" />
  <label htmlFor="firstName" className="form-label">First Name</label>
  <div className="invalid-feedback"> Valid first name is required.</div>
  </div>
  </div>
  <div className="col-lg-12">
  <div className="form-floating">
  <input type="text" className="form-control" id="lastName" placeholder="First Name" value="" required="" />
  <label htmlFor="lastName" className="form-label">Last Name</label>
  <div className="invalid-feedback"> Valid last name is required. </div>
  </div>
  </div>
  <div className="col-lg-12">
  <div className="form-floating">
  <input type="email" className="form-control" id="email" placeholder="you@example.com" required="" />
  <label htmlFor="email" className="form-label">Email</label>
  <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
  </div>
  </div>
  <div className="col-lg-12">
  <div className="form-floating">
  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
  <label htmlFor="address" className="form-label">Address</label>
  <div className="invalid-feedback"> Please enter your shipping address. </div>
  </div>
  </div>
  <div className="col-lg-12">
  <div className="form-selectr mb-20">
  <select className="form-select form-control">
  <option value="1">Country</option>
  <option value="2">United Kingdom</option>
  <option value="3">China</option>
  <option value="4">Arab</option>
  <option value="5">Germany</option>
  <option value="6">France</option>
  <option value="7">Japan</option>
  </select>
  </div>
  </div>
  <div className="col-lg-12">
  <div className="form-selectr mb-20">
  <select className="form-select form-control">
  <option value="1">State</option>
  <option value="2">California</option>
  </select>
  </div>
  </div>
  <div className="col-lg-12">
  <div className="form-floating">
  <input type="text" className="form-control" id="zip" placeholder="Zip Code" required="" />
  <label htmlFor="zip" className="form-label">Zip Code</label>
  <div className="invalid-feedback"> Zip code required. </div>
  </div>
  </div>
  <div className="col-lg-12 col-md-6">
  <div className="form-floating">
  <input type="text" className="form-control" id="city" placeholder="City" required="" />
  <label htmlFor="city" className="form-label">City</label>
  <div className="invalid-feedback">City required</div>
  </div>
  </div>
  <div className="col-lg-12 col-md-12">
  <div className="form-floating">
  <textarea name="summary" id="summary" cols="30" rows="7" className="form-control textarea" placeholder="Order Summary"></textarea>
  <label htmlFor="summary" className="form-label">Order Summary</label>
  </div>
  </div>
  <div className="col-lg-12 col-md-12">
  <div className="form-check">
  <input type="checkbox" className="form-check-input" id="same-address" />
  <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
  </div>
  </div>
  <div className="col-lg-12 col-md-12">
  <div className="form-check mb-0">
  <input type="checkbox" className="form-check-input" id="save-info" />
  <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
  </div>
  </div>
  </div>
  </div>
  </form>
  <form className="pt-70">
  <div className="billing-address">
  <h3 className="title">Shipping Address</h3>
  <div className="row">
  <div className="col-lg-6 col-md-6">
  <div className="form-floating">
  <input type="text" className="form-control" id="firstNames" placeholder="First Name" value="" required="" />
  <label htmlFor="firstNames" className="form-label">First Name</label>
  <div className="invalid-feedback"> Valid first name is required.</div>
  </div>
  </div>
  <div className="col-lg-6 col-md-6">
  <div className="form-floating">
  <input type="text" className="form-control" id="lastsName" placeholder="Last Name" value="" required="" />
  <label htmlFor="lastsName" className="form-label">Last Name</label>
  <div className="invalid-feedback"> Valid first name is required. </div>
  </div>
  </div>
  <div className="col-lg-6 col-md-6">
  <div className="form-floating">
  <input type="email" className="form-control" id="emailss" placeholder="you@example.com" required="" />
  <label htmlFor="emailss" className="form-label">Email</label>
  <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
  </div>
  </div>
  <div className="col-lg-6 col-md-6">
  <div className="form-floating">
  <input type="text" className="form-control" id="addresss" placeholder="1234 Main St" required="" />
  <label htmlFor="addresss" className="form-label">Address</label>
  <div className="invalid-feedback"> Please enter your shipping address. </div>
  </div>
  </div>
  <div className="col-lg-6 col-md-6">
  <div className="form-selectr mb-20">
  <select className="form-select form-control">
  <option value="1">Country</option>
  <option value="2">United Kingdom</option>
  <option value="3">China</option>
  <option value="4">Arab</option>
  <option value="5">Germany</option>
  <option value="6">France</option>
  <option value="7">Japan</option>
  </select>
  </div>
  </div>
  <div className="col-lg-6 col-md-6">
  <div className="form-selectr mb-20">
  <select className="form-select form-control">
  <option value="1">State</option>
  <option value="2">California</option>
  </select>
  </div>
  </div>
  <div className="col-lg-6 col-md-6">
  <div className="form-floating">
  <input type="text" className="form-control" id="zips" placeholder="Zip Code" required="" />
  <label htmlFor="zips" className="form-label">Zip Code</label>
  <div className="invalid-feedback"> Zip code required. </div>
  </div>
  </div>
  <div className="col-lg-6 col-md-6">
  <div className="form-floating">
  <input type="text" className="form-control" id="zipss" placeholder="Zip Code" required="" />
  <label htmlFor="zipss" className="form-label">City</label>
  <div className="invalid-feedback">City required</div>
  </div>
  </div>
  <div className="col-lg-12">
  <div className="form-floating">
  <textarea name="summary" id="summarys" cols="30" rows="7" className="form-control textarea" placeholder="Order Summary"></textarea>
  <label htmlFor="summarys" className="form-label">Order Summary</label>
  </div>
  </div>
  <div className="col-lg-12 col-md-12">
  <div className="form-check">
  <input type="checkbox" className="form-check-input" id="same-addressss" />
  <label className="form-check-label" htmlFor="same-addressss">Shipping address is the same as my billing address</label>
  </div>
  </div>
  <div className="col-lg-12 col-md-12">
  <div className="form-check mb-0">
  <input type="checkbox" className="form-check-input" id="save-infos" />
  <label className="form-check-label" htmlFor="save-infos">Save this information for next time</label>
  </div>
  </div>
  </div>
  </div>
  </form>
  </div>
  <div className="col-lg-4">
  <div className="shopping-carts mb-7">
  <h3>Order Summary</h3>
  <div className="shopping-cart-item d-flex justify-content-between">
  <div className="d-flex flex-row d-flex align-items-center">
  <a href="products-details.html">
  <img className="product-img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop" alt="Image" />
  </a>
  <div className="w-100 ms-4">
  <h3 className="post-title mb-1">
  <a href="products-details.html" className="link-dark">Wheel Bearing Retainer</a>
  </h3>
  <div className="small">Color: Yellow</div>
  <div className="small">Size: 300</div>
  </div>
  </div>
  <div className="ms-2 d-flex align-items-center">
  <p className="price fs-sm"><span className="amount">$450.00</span></p>
  </div>
  </div>
  <div className="shopping-cart-item d-flex justify-content-between">
  <div className="d-flex flex-row d-flex align-items-center">
  <a href="products-details.html">
  <img className="product-img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop" alt="Image" />
  </a>
  <div className="w-100 ms-4">
  <h3 className="post-title mb-1">
  <a href="products-details.html" className="link-dark">Brake Conversion Kit</a>
  </h3>
  <div className="small">Color: White & Yellow</div>
  <div className="small">Size: 150</div>
  </div>
  </div>
  <div className="ms-2 d-flex align-items-center">
  <p className="price fs-sm"><span className="amount">$500.00</span></p>
  </div>
  </div>
  <div className="shopping-cart-item d-flex justify-content-between">
  <div className="d-flex flex-row d-flex align-items-center">
  <a href="products-details.html">
  <img className="product-img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop" alt="Image" />
  </a>
  <div className="w-100 ms-4">
  <h3 className="post-title mb-1">
  <a href="products-details.html" className="link-dark">Shock Mount Insulator</a>
  </h3>
  <div className="small">Color: Yellow</div>
  <div className="small">Size: 400</div>
  </div>
  </div>
  <div className="ms-2 d-flex align-items-center">
  <p className="price fs-sm"><span className="amount">$100.00</span></p>
  </div>
  </div>
  </div>
  <div className="shipping-option">
  <h3>Shipping</h3>
  <div className="form-check">
  <input id="standart" name="shippingMethod" type="radio" className="form-check-input" required="" />
  <label className="form-check-label" htmlFor="standart">Free - Standart delivery</label>
  <small className="text-muted d-block">Shipment may take 5-6 business days</small>
  </div>
  <div className="form-check">
  <input id="express" name="shippingMethod" type="radio" className="form-check-input" checked="" required="" />
  <label className="form-check-label" htmlFor="express">$10 - Express delivery</label>
  <small className="text-muted d-block">Shipment may take 2-3 business days</small>
  </div>
  </div>
  <div className="your-order">
  <h3>Order Summary</h3>
  <ul>
  <li>Subtotal <span>$1390.00</span></li>
  <li>Discount (10%) <span className="discount">-$139.00</span></li>
  <li>Shipping <span>$10.00</span></li>
  <li>Total <span>$196.00</span></li>
  <li className="total-amount">Grand Total <span>1241</span></li>
  </ul>
  <a href="checkout.html" className="main-btn">
  <span>Place Order</span>
  </a>
  </div>
  </div>
  </div>
  </div>
  </div>
  </section>
);

export default CheckoutSection2;
