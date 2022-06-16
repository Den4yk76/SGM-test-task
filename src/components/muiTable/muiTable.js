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
            2020: {
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
            2025: {
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
            console.log('el', el);
            return Object.entries(el[1].G).map(elem => {
                console.log('elem', Object.values(elem[1]));
                return dataArr.push(elem[0]);
            });
        });
        const uniqueArray = dataArr.filter(
            (val, ind, arr) => arr.indexOf(val) === ind,
        );
        return uniqueArray;
    };

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell rowSpan={2}>regions</TableCell>
                        {filteredData(testData).map(el => {
                            return (
                                <TableCell
                                    key={Math.random()}
                                    align="center"
                                    colSpan={3}
                                >
                                    {el}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                    <TableRow>
                        {filteredData(testData).map(el => {
                            return (
                                <>
                                    <TableCell key={Math.random()}>
                                        xx
                                    </TableCell>
                                    <TableCell key={Math.random()}>
                                        yy
                                    </TableCell>
                                    <TableCell key={Math.random()}>
                                        zz
                                    </TableCell>
                                </>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(testData).map(el => {
                        return (
                            <TableRow key={el[0]}>
                                <TableCell>{el[0]}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MuiTable;
