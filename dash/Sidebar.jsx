import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {
  return (
    <div className='bg-white'>
        <div>
            <i className='bi bi-bootstrap-fill my-2'></i>
            <span className='brand-name fs-4'>Holiday planner</span>
        </div>
        <br className='text-dark' />
        <div className='list-group list-group-flush'>
                  <a className='list-group-item list-group-item-action my-2'>
                    <i className='speedometer'></i>
                  </a>
        </div>
    </div>
  )
}

export default Sidebar