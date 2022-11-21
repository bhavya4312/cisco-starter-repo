import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import Address from './Address';

function App() { 
    return (
      <div className="App">
        
        <Banner banner="Sextant" />
        
        <Exhibit heading="Public IPv4 Address"> 
            <Address url='https://api.ipify.org?format=json'/>
        </Exhibit>  
        <Exhibit heading="Public IPv6 Address">
            <Address url='https://api64.ipify.org?format=json' />
        </Exhibit>

      </div>
    );
}


export default App;
