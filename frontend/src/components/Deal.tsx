import './Deal.css';

function convertToDollars(number: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number);
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function Deal(props: any) {
  const { deal } = props;

  const statusClass = deal.status ? 'blue-status' : 'red-status';

  return (
    <div className="deal-wrapper">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className={`status-color ${statusClass}`}></div>
        <div>{deal.name}</div>
      </div>
      <div>
        <span style={{ marginRight: "8px", fontSize: "0.9em", color: "#555" }}>
          {formatDate(deal.start_date)} – {formatDate(deal.end_date)}
        </span>
        {convertToDollars(deal.value)}
      </div>
    </div>
  );
}

export default Deal;