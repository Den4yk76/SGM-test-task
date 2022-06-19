import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useState } from 'react';
import Popup from '../popup/popup';
import s from '../muiTable/muiTable.module.css';

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
    },
  },
};

const mockData = [
  { value: '1', date: '25.11.2020', user: 'Cal', comment: 'simple comment' },
  { value: '2', date: '15.06.2019', user: 'Calvin', comment: 'simple comment' },
  { value: '3', date: '08.08.2025', user: 'Calviner', comment: 'simple comment' },
];

const MuiTable = () => {
  const [popupData, setPopupData] = useState(mockData);
  const [popupActive, setPopupActive] = useState(false);
  const [popupNumber, setPopupNumber] = useState('');
  const [popupDate, setPopupDate] = useState(date());
  const [popupUserName, setPopupUserName] = useState('defaultUser');
  const [popupComment, setPopupComment] = useState('');

  function date() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    return `${day}.0${month + 1}.${year}`;
  }

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

  const resetInputs = () => {
    setPopupNumber('');
    setPopupDate(date());
    setPopupUserName('defaultUser');
    setPopupComment('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = document.getElementById('signup');

    const popupNumber = form.elements['popupNumber'].value;
    const popupDate = form.elements['popupDate'].value;
    const popupUserName = form.elements['popupUserName'].value;
    const popupComment = form.elements['popupComment'].value;

    if (popupNumber.trim() && popupDate.trim() && popupUserName.trim() && popupComment.trim()) {
      setPopupData([...popupData, { popupNumber, popupDate, popupUserName, popupComment }]);
      console.log(
        `{\n  popupNumber: ${popupNumber}, \n  popupDate: ${popupDate}, \n  popupUserName: ${popupUserName}, \n  popupComment: ${popupComment},\n}`,
      );
      resetInputs();
    } else {
      alert('add value and comment');
    }
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ border: 1 }} aria-label="simple table">
          <TableBody sx={{ border: 1 }}>
            <TableRow sx={{ border: 1 }}>
              <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                regions
              </TableCell>
              {filteredYears(testData).map(year => {
                return (
                  <TableCell sx={{ border: 1 }} align="center" colSpan={3}>
                    {year}
                  </TableCell>
                );
              })}
            </TableRow>
            <TableRow sx={{ border: 1 }}>
              {filteredYears(testData).map(year => {
                return (
                  <>
                    <TableCell sx={{ border: 1 }} align="center">
                      xx
                    </TableCell>
                    <TableCell sx={{ border: 1 }} align="center">
                      yy
                    </TableCell>
                    <TableCell sx={{ border: 1 }} align="center">
                      zz
                    </TableCell>
                  </>
                );
              })}
            </TableRow>
            {Object.entries(testData).map(reg => {
              return (
                <TableRow>
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
                              setPopupActive(true);
                            }}
                          >
                            {el.value}
                          </TableCell>
                        );
                      });
                    } else {
                      return (
                        <>
                          <TableCell sx={{ border: 1 }} align="center">
                            null
                          </TableCell>
                          <TableCell sx={{ border: 1 }} align="center">
                            null
                          </TableCell>
                          <TableCell sx={{ border: 1 }} align="center">
                            null
                          </TableCell>
                        </>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup active={popupActive} setActive={setPopupActive}>
        <form id="signup">
          <TableContainer>
            <Table sx={{ border: 1 }} aria-label="simple table">
              <TableHead sx={{ border: 1 }}>
                <TableRow sx={{ border: 1 }}>
                  <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                    value
                  </TableCell>
                  <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                    date
                  </TableCell>
                  <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                    user
                  </TableCell>
                  <TableCell sx={{ border: 1 }} rowSpan={2} align="center">
                    comment
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {popupData.map(el => {
                  return (
                    <TableRow key={Math.random()} sx={{ border: 1 }}>
                      {Object.values(el).map(value => {
                        return (
                          <TableCell key={Math.random()} sx={{ border: 1 }} align="center">
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
                <TableRow sx={{ border: 1 }}>
                  <TableCell sx={{ border: 1 }} align="center">
                    <input
                      type="number"
                      name="popupNumber"
                      min="0"
                      value={popupNumber}
                      onChange={e => {
                        setPopupNumber(e.target.value);
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ border: 1 }} align="center">
                    <input className={s.readonlyInput} type="text" name="popupDate" defaultValue={popupDate} readOnly />
                  </TableCell>
                  <TableCell sx={{ border: 1 }} align="center">
                    <input
                      className={s.readonlyInput}
                      type="text"
                      name="popupUserName"
                      defaultValue={popupUserName}
                      readOnly
                    />
                  </TableCell>
                  <TableCell sx={{ border: 1 }} align="center">
                    <input
                      type="text"
                      name="popupComment"
                      value={popupComment}
                      onChange={e => {
                        setPopupComment(e.target.value);
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <input onClick={handleSubmit} type="submit" value="Add" />
        </form>
      </Popup>
    </>
  );
};

export default MuiTable;
