import React, { useState, useEffect } from 'react';
import { usePageBlock } from './hooks';

export const BaseTable = ({
    columnNames = [],
    data = [],
    onClick = () => {},
    ...props
}) => {
    return (
        <>
            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        {columnNames.map((columnName, headIndex) => (
                            <th key={headIndex} scope="col">
                                {columnName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr>
                            {columnNames.map((columnName, colIndex) => (
                                <td
                                    key={colIndex}
                                    onClick={row[columnName]}
                                    className="pt-4 pb-4"
                                >
                                    {row[columnName]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
