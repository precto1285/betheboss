import React from 'react';
import { Card, Button } from 'reactstrap';

const IntroParagraph = () => {
  return (
    <Card>
      <div className="card-body p-3">
        <p>Our <span className="text-uppercase">Be The Boss Internship Passionpreneurship Program</span> transforms youth and young adults (ages 16-24) into confident and successful  entrepreneurs. </p>

        <p>Through our six-week program, interns generate business ideas, conduct market research, write business plans, pitch to a panel of investors, and launch their very own businesses.</p>
      </div>
      <div className="card-footer p-2">
        <Button className="btn-danger btn-block">Enroll Now!</Button>
      </div>
    </Card>
  )
}

export default IntroParagraph;