import React from 'react';
import { Card, Button } from 'reactstrap';

const CriteriaRequirement = () => {
  return (

    <Card>
      <div className="card-header">
        <h4>Intern criteria requirements:</h4>
      </div>
      <div className="card-body">
        <ul className="mt-2 px-3">
          <li>16-24 years old</li>
          <li>Qualify as low to moderate income</li>
          <li>Part of a demographic group underrepresented in entrepreneurship including women and minorities</li>
          <li>Does not have access to a computer at home</li>
          <li>Does not have access to entrepreneurial resources from a family network</li>
        </ul>
      </div>
      <div className="card-footer">
        <Button className="btn-block btn-danger">Support Our Work</Button>
      </div>
    </Card>
  )
}
export default CriteriaRequirement;

