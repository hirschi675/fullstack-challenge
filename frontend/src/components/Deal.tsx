import './Deal.css';

function Deal(props:any) {
  const testName = "Google"
  const testValue = "$2,590.00"
  return (
      <div className="deal-wrapper">
        <div><div className="status-color blue-status"></div><div className="status-color">{testName}</div></div>
        <div>{testValue}</div>
      </div>
  );
}

export default Deal;