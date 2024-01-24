import { useRef, useState } from "react";
import "./Table2.css";
import { Table } from "react-bootstrap";

const Table2 = () => {
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true)

    const handleHorizantalScroll = (element: any, speed: any, distance: any, step: any) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable(true);
            } else {
                setArrowDisable(false);
            }
        }, speed);
    };
    return (
        <div className="mt-5">
            <div className="button-contianer">
                <button
                    onClick={() => {
                        handleHorizantalScroll(elementRef.current, 25, 100, -10);
                    }}
                    disabled={arrowDisable}
                >
                    Left
                </button>
                <button
                    onClick={() => {
                        handleHorizantalScroll(elementRef.current, 25, 100, 10);
                    }}
                >
                    Right
                </button>
            </div>
            <div className="img-container" ref={elementRef}>
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
    );
}

export default Table2;