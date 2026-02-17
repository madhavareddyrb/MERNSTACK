import "./DeliveryHeader.css";

function DelivaryHead() {
const delivery = {
  time: "6 Minutes",
  location: "Kondapur,Hyderbad"
}
  return (
    <>
      <div className="container">
        <div className="left-heading">
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/14.14.0/images/header/primary-logo.svg"
            alt="Zepto"
          />

          <div>
            <span className="delivery-time">⌚ {delivery.time}</span>
            <p>{delivery.location}</p>
          </div>
          <button className="change-button">Change</button>
          
        </div>

        <div className="search-bar">
          <img
            className="logo search-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06GLt9ubMtrBxjhTPfkAvCKByYD7_Pdq3KQ&s"
            alt="Search-Icon"
          />

          <input
            className="search-box"
            type="search"
            name="search"
            id=""
            placeholder="search"
          />
        </div>
        <div className="right-nav">
          <div>
            <img
              className="logo"
              src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              alt="Profile"
            />
            <p className="ml-2">Login</p>
          </div>
          <div>
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWW1WxKxCqdVzsNsOVFYypNGkeZ2dswjyZ4w&s"
              alt="Cart"
            />
            <p className="ml-2">Cart</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DelivaryHead;
