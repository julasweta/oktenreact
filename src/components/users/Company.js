import React from 'react';


function Company({company}) {
  return (
    /*name,catchPhrase,bs */
    <div className='user-company'>
          <h2>Company</h2>
          <span> name: <b>{company.name}</b></span>
          <span> catchPhrase: <b>{company.catchPhrase}</b></span>
          <span> bs: <b>{company.catchPhrase}</b></span>
    </div>
  )
}

export default Company
