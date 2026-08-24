import "./BoxTest.css";

const FlexBoxTest = () => {
  const dataArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  function generateRandomString(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  return (
    <div className="style1">
      {dataArray.map((number) => (
        <div key={number} className="small-Box">
          <img src={`https://robohash.org/${generateRandomString(10)}`} alt="robot" />
        </div>
      ))}
    </div>
  );
};

export default FlexBoxTest;