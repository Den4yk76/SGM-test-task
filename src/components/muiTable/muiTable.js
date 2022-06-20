import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Fragment } from 'react';

const MuiTable = ({ testData }) => {
  const filteredYears = data => {
    const dataArr = [];
    Object.entries(data).map(el => {
      return Object.entries(el[1].G).map(elem => {
        return dataArr.push(elem[0]);
      });
    });
    const uniqueArray = dataArr.filter((val, ind, arr) => arr.indexOf(val) === ind);
    return uniqueArray.sort();
  };

  function createPopupWin(pageURL, pageTitle, popupWinWidth, popupWinHeight) {
    const left = (window.screen.width - popupWinWidth) / 2;
    const top = (window.screen.height - popupWinHeight) / 4;

    window.open(
      pageURL,
      pageTitle,
      `resizable=yes, width=${popupWinWidth}, height=${popupWinHeight}, top=${top}, left=${left}`,
    );
  }

  return (
    <>
      <TableContainer>
        <Table sx={{ border: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ border: 1 }}>
              <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                regions
              </TableCell>
              {filteredYears(testData).map(year => {
                return (
                  <TableCell key={Math.random()} sx={{ border: 1 }} align="center" colSpan={3}>
                    {year}
                  </TableCell>
                );
              })}
            </TableRow>
            <TableRow sx={{ border: 1 }}>
              {filteredYears(testData).map(year => {
                return (
                  <Fragment key={Math.random()}>
                    <TableCell sx={{ border: 1 }} align="center">
                      xx
                    </TableCell>
                    <TableCell sx={{ border: 1 }} align="center">
                      yy
                    </TableCell>
                    <TableCell sx={{ border: 1 }} align="center">
                      zz
                    </TableCell>
                  </Fragment>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody sx={{ border: 1 }}>
            {Object.entries(testData).map(reg => {
              return (
                <TableRow key={Math.random()}>
                  <TableCell sx={{ border: 1 }} align="center">
                    {reg[0]}
                  </TableCell>
                  {filteredYears(testData).map(sortedYear => {
                    if (!!reg[1].G[sortedYear]) {
                      return Object.values(reg[1].G[sortedYear]).map(el => {
                        return (
                          <TableCell
                            key={Math.random()}
                            sx={{ border: 1 }}
                            align="center"
                            onClick={() => {
                              createPopupWin(`${window.location.origin}/popup`, 'popUpWindow', 900, 500);
                            }}
                          >
                            {el.value}
                          </TableCell>
                        );
                      });
                    } else {
                      return (
                        <Fragment key={Math.random()}>
                          <TableCell
                            sx={{ border: 1 }}
                            align="center"
                            onClick={() => {
                              createPopupWin(`${window.location.origin}/popup`, 'popUpWindow', 900, 500);
                            }}
                          >
                            null
                          </TableCell>
                          <TableCell
                            sx={{ border: 1 }}
                            align="center"
                            onClick={() => {
                              createPopupWin(`${window.location.origin}/popup`, 'popUpWindow', 900, 500);
                            }}
                          >
                            null
                          </TableCell>
                          <TableCell
                            sx={{ border: 1 }}
                            align="center"
                            onClick={() => {
                              createPopupWin(`${window.location.origin}/popup`, 'popUpWindow', 900, 500);
                            }}
                          >
                            null
                          </TableCell>
                        </Fragment>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MuiTable;
