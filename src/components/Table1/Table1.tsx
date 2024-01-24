import { Button, Container, Table } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
import "./Table1.css";

const Table1 = () => {

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
        <>
            <div className='d-flex justify-content-center'>
                <div className="table-container" ref={tableContainerRef} >
                    <Table
                        // responsive="xl"
                        size="sm"
                    >
                        <thead>
                            <tr className=" fs-16 text-nowrap">
                                {/* <th className="text-nowrap p-3 "></th> */}
                                <th className="text-nowrap p-3 ">A</th>
                                <th className="text-nowrap p-3 ">B</th>
                                <th className="text-nowrap p-3 ">C</th>
                                <th className="text-nowrap p-3 ">D</th>
                                <th className="text-nowrap p-3 ">E</th>
                                <th className="text-nowrap p-3 ">G</th>
                                <th className="text-nowrap p-3 ">A</th>
                                <th className="text-nowrap p-3 ">B</th>
                                <th className="text-nowrap p-3 ">C</th>
                                <th className="text-nowrap p-3 ">D</th>
                                <th className="text-nowrap p-3 ">E</th>
                                <th className="text-nowrap p-3 ">G</th>
                                <th className="text-nowrap p-3 ">A</th>
                                <th className="text-nowrap p-3 ">B</th>
                                <th className="text-nowrap p-3 ">C</th>
                                <th className="text-nowrap p-3 ">D</th>
                                <th className="text-nowrap p-3 ">E</th>
                                <th className="text-nowrap p-3 ">G</th>
                                <th className="text-nowrap p-3 ">A</th>
                                <th className="text-nowrap p-3 ">B</th>
                                <th className="text-nowrap p-3 ">C</th>
                                <th className="text-nowrap p-3 ">D</th>
                                <th className="text-nowrap p-3 ">E</th>
                                <th className="text-nowrap p-3 ">G</th>
                            </tr>
                        </thead>
                        <tbody className=" fs-16">
                            <tr className=" fs-16 text-nowrap">
                                {/* <td className="text-nowrap p-3 "></td> */}
                                <td className="text-nowrap p-3 ">A</td>
                                <td className="text-nowrap p-3 ">B</td>
                                <td className="text-nowrap p-3 ">C</td>
                                <td className="text-nowrap p-3 ">D</td>
                                <td className="text-nowrap p-3 ">E</td>
                                <td className="text-nowrap p-3 ">G</td>
                                <td className="text-nowrap p-3 ">A</td>
                                <td className="text-nowrap p-3 ">B</td>
                                <td className="text-nowrap p-3 ">C</td>
                                <td className="text-nowrap p-3 ">D</td>
                                <td className="text-nowrap p-3 ">E</td>
                                <td className="text-nowrap p-3 ">G</td>
                                <td className="text-nowrap p-3 ">A</td>
                                <td className="text-nowrap p-3 ">B</td>
                                <td className="text-nowrap p-3 ">C</td>
                                <td className="text-nowrap p-3 ">D</td>
                                <td className="text-nowrap p-3 ">E</td>
                                <td className="text-nowrap p-3 ">G</td>
                                <td className="text-nowrap p-3 ">A</td>
                                <td className="text-nowrap p-3 ">B</td>
                                <td className="text-nowrap p-3 ">C</td>
                                <td className="text-nowrap p-3 ">D</td>
                                <td className="text-nowrap p-3 ">E</td>
                                <td className="text-nowrap p-3 ">GEnd</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="scroll-buttons mt-3">
                <Button variant="primary" onClick={() => handleScroll('left')}>
                    Scroll Left
                </Button>
                <Button variant="primary" className='mx-3' onClick={() => handleScroll('right')}>
                    Scroll Right
                </Button>
            </div>
        </>
    );
}

export default Table1;