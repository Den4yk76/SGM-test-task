import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    // Paper,
} from '@mui/material';

const testData = {
    Kyivska: {
        G: {
            2017: {
                XX: {
                    value: 150000,
                    dateRelease: '2017-12-31',
                },
                YY: {
                    value: 100000,
                    dateRelease: '2017-12-31',
                },
                ZZ: {
                    value: 77,
                    dateRelease: '2017-12-31',
                },
            },
            2018: {
                XX: {
                    value: 160000,
                    dateRelease: '2018-12-31',
                },
                YY: {
                    value: 110000,
                    dateRelease: '2018-12-31',
                },
                ZZ: {
                    value: 72,
                    dateRelease: '2018-12-31',
                },
            },
            2019: {
                XX: {
                    value: 130000,
                    dateRelease: '2019-12-31',
                },
                YY: {
                    value: 85000,
                    dateRelease: '2019-12-31',
                },
                ZZ: {
                    value: 72,
                    dateRelease: '2019-12-31',
                },
            },
        },
    },
    Odeska: {
        G: {
            2017: {
                XX: {
                    value: 10000,
                    dateRelease: '2017-12-31',
                },
                YY: {
                    value: 5000,
                    dateRelease: '2017-12-31',
                },
                ZZ: {
                    value: 45,
                    dateRelease: '2017-12-31',
                },
            },
            2019: {
                XX: {
                    value: 15000,
                    dateRelease: '2019-12-01',
                },
                YY: {
                    value: 0,
                    dateRelease: '2022-02-18',
                },
                ZZ: {
                    value: 0,
                    dateRelease: '2022-02-18',
                },
            },
        },
    },
    Lvivska: {
        G: {
            2017: {
                XX: {
                    value: 640000,
                    dateRelease: '2017-12-31',
                },
                YY: {
                    value: 510000,
                    dateRelease: '2017-08-01',
                },
                ZZ: {
                    value: 67,
                    dateRelease: '2017-08-01',
                },
            },
            2018: {
                XX: {
                    value: 740000,
                    dateRelease: '2018-12-31',
                },
                YY: {
                    value: 530000,
                    dateRelease: '2018-08-01',
                },
                ZZ: {
                    value: 61,
                    dateRelease: '2018-08-01',
                },
            },
        },
    },
};

const MuiTable = () => {
    const filteredData = data => {
        const dataArr = [];
        Object.entries(data).map(el => {
            return Object.entries(el[1].G).map(elem => {
                return dataArr.push(elem[0]);
            });
        });
        const uniqueArray = dataArr.filter(
            (val, ind, arr) => arr.indexOf(val) === ind,
        );
        return uniqueArray.sort();
    };

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>regions</TableCell>

                        {filteredData(testData).map(year => { // sorted year
                            return (
                                <TableCell
                                    key={Math.random()}
                                    align="center"
                                    colSpan={3}
                                >
                                    {year}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                    {Object.entries(testData).map(reg => { // region
                        return (
                            <TableRow>
                                <TableCell>{reg[0]}</TableCell>
                                {filteredData(testData).map(year => { // sorted year  
                                   return Object.entries(reg[1].G).map(regYear => { // region year
                                    // console.log("year", year)
                                    console.log("regYear", regYear[0])
                                        if (regYear[0]!==year) { // is sorted year === region year
                                            return <>
                                            <TableCell>null</TableCell>
                                            <TableCell>null</TableCell>
                                            <TableCell>null</TableCell>
                                            </>
                                        } else {
                                            return <>
                                            <TableCell>{regYear[1].XX.value}</TableCell>
                                            <TableCell>{regYear[1].YY.value}</TableCell>
                                            <TableCell>{regYear[1].ZZ.value}</TableCell>
                                            </>
                                        }
                                    })
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MuiTable;
