import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Button, Container, Table } from 'react-bootstrap';
import Table1 from './components/Table1/Table1';
import Table2 from './components/Table2/Table2';

function App() {

  const tableContainerRef = useRef<any>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: any) => {
    const container = tableContainerRef.current;
    console.log("out if container", container);
    if (container) {
      console.log("in if container", container);
      const scrollAmount = 100; // Adjust as needed

      if (direction === 'left') {
        console.log("container.scrollLeft: ", container.scrollLeft);
        container.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        console.log("container.scrollLeft (right): ", container.scrollLeft);
        container.scrollLeft += scrollAmount;
      }

      setScrollLeft(container.scrollLeft);
    }
  };


  return (
    <div className='mx-5'>
      <h1>Demo slider</h1>
      <Table1 />
      <Table2 />
    </div>
  );
}

export default App;
