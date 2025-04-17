import './Page.css';
import './Deal.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import Deal from "./Deal";

type DealType = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  value: number;
  status: boolean;
  account_id: number;
  hidden: boolean;
  org_id: number;
};

type OrganizationType = {
  id: number;
  name: string;
};

type AccountType = {
  id: number;
  name: string;
};

function Dashboard(props: any) {
  const [activeTab, setActiveTab] = useState<string>("");
  const [currentOrganization, setCurrentOrganization] = useState<OrganizationType | null>(null);
  const [currentAccount, setCurrentAccount] = useState<AccountType | null>(null);

  const [startDateFilter, setStartDateFilter] = useState('');
  const [endDateFilter, setEndDateFilter] = useState('');

  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [nameFilter, setNameFilter] = useState('');


  useEffect(() => {
    if (props.accounts.length > 0 && !activeTab) {
      setActiveTab(props.accounts[0].name);
    }

    const organization = props.organizations.find(
      (org: OrganizationType) => org.name === props.activeId
    );
    if (organization) {
      setCurrentOrganization(organization);
    }

    const account = props.accounts.find(
      (account: AccountType) => account.name === activeTab
    );
    if (account) {
      setCurrentAccount(account);
    }
  }, [props.accounts, props.activeId, props.organizations, activeTab]);

  // Filter deals
  const filteredDeals = props.deals.filter((deal: DealType) => {
    const isMatchingAccountAndOrg =
      deal.account_id === currentAccount?.id && deal.org_id === currentOrganization?.id;

    const matchesName = deal.name.toLowerCase().includes(nameFilter.toLowerCase());

    const matchesStartDate =
      !startDateFilter || new Date(deal.start_date) >= new Date(startDateFilter);

    const matchesEndDate =
      !endDateFilter || new Date(deal.end_date) <= new Date(endDateFilter);

    const matchesActive = !showOnlyActive || !!deal.status;

    return (
      isMatchingAccountAndOrg &&
      matchesName &&
      matchesStartDate &&
      matchesEndDate &&
      matchesActive
    );
  });

  // Calculate the total value of the filtered deals
  const totalValue = filteredDeals.reduce((sum, deal) => sum + deal.value, 0);

  return (
    <div
      className={`page-wrapper ${props.activeId ? 'active' : 'inactive'} ${props.rotate ? 'shrink-dash' : 'grow-dash'}`}
    >
      <h1 className="no-margin">{props.activeId}</h1>
      <h3 className="no-margin">Deals</h3>
      <div className="dash-wrapper">
        <div className="deals-wrapper">
          <div className="tabbed">
            <ul>
              {props.accounts.map((account: AccountType, index: number) => (
                <li
                  key={account.id || index}
                  onClick={() => setActiveTab(account.name)}
                  className={`page-wrapper ${activeTab === account.name ? 'active' : ''}`}
                >
                  {account.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="deals-tabs-wrapper">
            <div className="top-deals-tab-wrapper">
              <div>
                <h4 style={{ margin: "0px" }}>{activeTab}</h4>
                <div>
                  {/* Display the total value of the filtered deals */}
                  Total Value: ${totalValue.toLocaleString()}
                </div>
                <div>
                  <div className='status-color blue-status'></div><span>Active</span> &nbsp;
                  <div className='status-color red-status'></div><span>Inactive</span>
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div className='filter-button' onClick={() => setShowFilter(!showFilter)}>
                  Filter <FontAwesomeIcon icon={faSliders} />
                </div>
                {showFilter && (
                  <div className="filter-dropdown">
                    <div>
                      <label>Filter by Name:</label>
                      <input
                        type="text"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>
                        Show Only Active
                      </label>
                      <input
                        type="checkbox"
                        checked={showOnlyActive}
                        onChange={(e) => setShowOnlyActive(e.target.checked)}
                      />
                    </div>
                    <div>
                      <label>Start Date Range:</label>
                      <input
                        type="date"
                        value={startDateFilter}
                        onChange={(e) => setStartDateFilter(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>End Date Range:</label>
                      <input
                        type="date"
                        value={endDateFilter}
                        onChange={(e) => setEndDateFilter(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              {filteredDeals.map((deal: DealType, index: number) => (
                <Deal
                  className={`${deal.hidden ? 'hidden' : ''}`}
                  key={deal.id || index}
                  deal={deal}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;